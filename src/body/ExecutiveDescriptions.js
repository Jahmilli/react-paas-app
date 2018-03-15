const Images = require('../image-urls');
var titles = {
	president: "President",
	vicePresident: "Vice President",
	treasurer: "Treasurer",
	administrator: "Administrator",
	socialOfficer: "Social Officer",
	technicalOfficer: "Technical Officer",
	industryOfficer: "Industry Officer",
	general: "General Executive",
	advisor: "Advisor",
}

module.exports = [
	{
		firstName: "Gavan",
		lastName: "Huang",
		title: titles.president,
		description: "Gavan description",
		profilePicture: Images.profiles.gavanProfile
	},
  {
		firstName: "Sebastian",
		lastName: "Southern",
		title: titles.vicePresident,
		description: "Space and technology enthusiast with a passion to continue to develop my skills that will help me make a difference in the future!",
		profilePicture: Images.profiles.sebastianProfile
	},
	{
		firstName: "Kshitij",
		lastName: "Karub",
		title: titles.vicePresident,
		description: "Description",
		profilePicture: Images.profiles.kshitijProfile
	},
	{
		firstName: "Jason",
		lastName: "Ho",
		title: titles.technicalOfficer,
		description: "Description",
		profilePicture: Images.profiles.jasonProfile
	},
	{
		firstName: "Callum",
		lastName: "Oldfield",
		title: titles.industryOfficer,
		description: "Description",
		profilePicture: Images.profiles.callumProfile
	},
	{
		firstName: "Caley",
		lastName: "Yarnold",
		title: titles.industryOfficer,
		description: "Description",
		profilePicture: Images.profiles.caleyProfile
	},
	{
		firstName: "Argie",
		lastName: "Alaso",
		title: titles.socialOfficer,
		description: "Description",
		profilePicture: Images.profiles.argieProfile
	},
	{
		firstName: "Georgia",
		lastName: "McCarthy",
		title: titles.treasurer,
		description: "Description",
		profilePicture: Images.profiles.georgiaProfile
	},
	{
		firstName: "Shivangi",
		lastName: "Singh",
		title: titles.administrator,
		description: "Description",
		profilePicture: Images.profiles.shivangiProfile
	},
	{
		firstName: "Jonathan",
		lastName: "Reibel",
		title: titles.general,
		description: "Description",
		profilePicture: Images.profiles.jonathanProfile
	},
	{
		firstName: "Michael",
		lastName: "Fedulov",
		title: titles.general,
		description: "Description",
		profilePicture: Images.profiles.michaelProfile
	},
	{
		firstName: "Alastair",
		lastName: "Bate",
		title: titles.advisor,
		description: "Description",
		profilePicture: Images.profiles.alastairProfile
	},
]
