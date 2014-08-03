Ext.define('CineTicket.store.RoomStore', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	model: 'CineTicket.model.Room',
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/json/rooms.json'
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