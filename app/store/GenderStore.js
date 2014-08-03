Ext.define('CineTicket.store.GenderStore', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'CineTicket.model.Gender',
	
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
	
});