// Model files have a plural name
Ext.define('CineTicket.store.UserStore', {

	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'CineTicket.model.User',
	
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

