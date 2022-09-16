const path = require('path');

module.exports = {
  entry: {
	'Dashboard' : './javascript/Dashboard.js',
	'AddProject' : './javascript/AddProject.js',
	'EditProject' : './javascript/EditProject.js',
	'SignIn' : './javascript/SignIn.js',
	'SearchByDate' : './javascript/SearchByDate.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};