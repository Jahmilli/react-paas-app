var Airtable = require('airtable')
require('dotenv').config()
var base = new Airtable({apiKey: process.env.API_KEY}).base('appdbQ2r2gkt9rRYP')
var fs = require('fs')
var parse = require('csv-parse')
var async = require('async')

const AIRTABLE_TABLE = 'Test Members Table'
let re = /\w+@student.uts.edu.au/ //Fix this regex

//Look at list of things to do written down
//Look into deleting empty records in Airtable
//Look into automating the capture of these fields
const AIRTABLE_COLUMNS = [
  'Email',
  'Sign-up Date',
  'First Name',
  'Last Name',
  'Gender',
  'Mobile Number',
  'Post Code',
  'DOB',
  'User Type',
  'Graduate Level',
  'Student Type',
  'Faculty',
  'Dietary Requirements'
]

function readCSV() {
  return myPromise = new Promise(function(resolve, reject) {
    let csvData = []
    fs.createReadStream(process.env.CSV_FILE)
      .pipe(parse({delimiter: ','}))
      .on('data', function(csvrow) {
        csvData.push(csvrow)
      })
      .on('end',function() {
        resolve(csvData)
      })
  }).catch(function(err) {
    reject(err)
  })
}

//Lists all members in Airtable
function listAllMembers() {
  return new Promise(function(resolve, reject) {
    base(AIRTABLE_TABLE).select({
        view: 'Grid view'
    }).eachPage(function page(records) {
      var memberData = [];
      records.forEach(function(record) {
        var details = []
        for(var i in AIRTABLE_COLUMNS) {
          details.push(record.get(AIRTABLE_COLUMNS[i]))
        }
        memberData.push(details)
      })
      resolve(memberData)
    }, function done(err) {
      if (err) { console.error(err); reject(err) }
    })
  })

}

function searchMember(first, last) {
  // let delimiter = name.indexOf(' ')
  // let first = name.substr(0, delimiter)
  // let last = name.substr(delimiter+1, name.length-1)
  return new Promise(function(resolve, reject) {
    base(AIRTABLE_TABLE).select({
      view: 'Grid view'
    }).eachPage(function page(records) {
      records.forEach(function(record) {
        if(record.get('First Name') == first && record.get('Last Name') == last) {
          let details = []
          for(var i in AIRTABLE_COLUMNS) {
            details.push(record.get(AIRTABLE_COLUMNS[i]))
          }
          resolve(details)
        }
      })
    }, function done(err) {
      if (err) { reject(err); return }
    })
  })
}

//checking if empty tables exist on Airtable and should remove them from count!
function checkIsEmpty(emails) {
  let index = emails.length
  while(emails[index-1] == undefined) {
    if(emails[index-1] == undefined) {
      index--
    } else {
      break
    }
  }
  return emails.splice(0, index)
}

//fix the names up
function checkNewMembers(tableName) {
  let airtableEmail = []
  return myPromise = new Promise(function(resolve, reject) {
    base(tableName).select({
      view: 'Grid view'
    }).eachPage(function page(records) {
      let emails = []
      records.forEach(function(record) {
        emails.push(record.get('Email'))
      })
      //console.log('before ' + emails[emails.length-1])
      airtableEmail = checkIsEmpty(emails)
      //console.log('after ' + airtableEmail[airtableEmail.length-1])
    }, function done(err) {
      if(err) {
        console.error(err)
        return
      }
    })
    //Will need to fix this, terrible solution using timeout :(
    setTimeout(function() {
      resolve(airtableEmail)
    }, 5000)
  })
}

//If called, this will loop backwards through .csv file adding members to an array
//until it equals the last member of Airtable.
function checkPreviousMembers(csvEmails, airtableEmails) {
  let newMembers = []
  for(var i = csvEmails.length-1; i > 0; i--) {
    if(csvEmails[i][4] != airtableEmails) {
      //console.log(csvEmails[i][4] + " shouldn't be called " + AirtableEmails)
      newMembers.push(csvEmails[i])
    } else {
      //console.log(csvEmails[i][4] + ' is equal to ' + AirtableEmails)
      // console.log(newMembers)
      // console.log(newMembers.length)
      createMember(AIRTABLE_TABLE, newMembers)
      return newMembers
    }
  }
}

function checkIsUpdated() {
  let csvEmail = []
  let airtableEmail = ''

  readCSV().then(function(myResolve) {
    csvEmail = myResolve
  }).catch(function(err) {
    console.error(err)
  })

  checkNewMembers(AIRTABLE_TABLE).then(function(myResolve) {
    airtableEmail = myResolve
    tempEmail2 = airtableEmail[airtableEmail.length-1].match(re)
  }).then(function() {
    if(airtableEmail.length <= csvEmail.length) {
      if(csvEmail[csvEmail.length-1][4] != tempEmail2) {
        checkPreviousMembers(csvEmail, tempEmail2)
      } else {
      }
    }
    else {
     console.error('Airtable is greater size than the member list, please check Airtable for anomalies')
    }
  }).catch(function(err) {
    console.error(err)
  })
}

//Airtable doesn't accept dates formatted as dd/mm/yy when creating user.
function formatDate(date) {
  let dd = date.match(/\d+/)
  let mm = date.match(/\/\d+\//)
  mm = mm[0].match(/\d*/g)
  date = mm[1] + '/' + dd + '/' + date.substr(date.length-2)
  return date
}

function createMember(tableName, memberDetails) {
  for(var i in memberDetails) {
    base(AIRTABLE_TABLE).create({
      "Email": memberDetails[i][4],
      "First Name": memberDetails[i][5],
      "Last Name": memberDetails[i][6],
      "Gender": memberDetails[i][7],
      "Mobile Number": memberDetails[i][8],
      "Post Code": memberDetails[i][9],
      "DOB": formatDate(memberDetails[i][10]),
      "User Type": memberDetails[i][11],
      "Graduate Level": memberDetails[i][12],
      "Student Type": memberDetails[i][13],
      "Faculty": memberDetails[i][14],
      "Dietary Requirements": memberDetails[i][15],
      "Sign-up Date": formatDate(memberDetails[i][3])
    }, function(err, record) {
        if (err) { console.error(err); return }
        console.log(record.getId())
    })
    console.log('User created with email: ' + memberDetails[i][4])
  }
}

module.exports = {
  readCSV: function() {
    return new Promise(function(resolve, reject) {
      readCSV().then(function(myResolve) {
        resolve(myResolve)
      }).catch(function(err) {
        resolve(err)
      })
    })
  },
  searchMember: function(first, last) {
    return new Promise(function(resolve, reject) {
      searchMember(first, last).then(function(myResolve) {
        resolve(myResolve)
      }).catch(function(err) {
        reject(err)
      })
    })
  },
  listAllMembers: function() {
    return new Promise(function(resolve, reject) {
      listAllMembers().then(function(myResolve) {
        resolve(myResolve)
      }).catch(function(err) {
        reject(err)
      })
    })
  },
  checkIsUpdated: function() {
    checkIsUpdated()
  }
}
