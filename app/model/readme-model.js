// Model files have a singular name. Note that the namespace is
// is formed with the application name, model folder name, and class name for
// your model.
Ext.define('CineTicket.model.Gender', {
	// The fisical file names of your model and controller is singular, stores are plural. 
	// Extends from data model
	extend: 'Ext.data.Model',
	fields: [
		// Defining the fields and types of your model(fields names and types), 
		// you've got to set name and type
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
	
	],
	proxy: {
		// the communication is via 'Ajax request'
		type: 'ajax',
		api: {
			// the json file is plural
			read: 'data/json/genders.json'
		},
		actionMethods: {
  			read: 'POST'
		},
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		}
	}
// ExtJs Ext class ends with a semi-collon.
});
// Leave proxies for Stores, if you have simple bussines rules you can put is
// inside Model, if you have complex bussines rules your better create  
// Repositories or Helper classes.