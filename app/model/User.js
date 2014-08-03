Ext.define('CineTicket.model.User', {
	extend: 'Ext.data.Model',
	fields: [

		   {name: 'id', type: 'int'},
		   {name: 'firstName', type: 'string'},
		   {name: 'lastName', type: 'string'},
		   {name: 'email', type: 'string'},
		   {name: 'accessPriviledge', type: 'string'},
		   {name: 'login', type: 'string'},
		   {name: 'password', type: 'string'}
	],
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/json/users.json'
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
});