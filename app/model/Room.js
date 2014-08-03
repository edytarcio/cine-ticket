Ext.define('CineTicket.model.Room', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'description', type: 'string'},
	    {name: 'seats', type: 'int'}     
		]
});