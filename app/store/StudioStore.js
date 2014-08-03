Ext.define('CineTicket.store.StudioStore', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'CineTicket.model.Studio',
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/json/studios.json'
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