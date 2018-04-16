module.exports = {
  'facebookAuth': {
    'clientID': process.env.FACEBOOK_APP_ID,
    'clientSecret': process.env.FACEBOOK_APP_SECRET,
    'callbackURL': 'http://localhost:30001/auth/facebook/callback'
  }
}
