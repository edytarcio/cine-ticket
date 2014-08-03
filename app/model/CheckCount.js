Ext.define('CineTicket.model.CheckCount',{
	extend: 'Ext.data.Model',
	fields: [

		{name: 'id', type: 'int'},
		{name: 'description', type: 'string'},
		{name: 'ipAddress', type: 'string'},
		{name: 'status', type: 'string'},
		{name: 'operadorName', type: 'string'}
	],
	proxy: {
		type: 'ajax',
		api: {
			// the project directory is the current directory
			read: 'data/json/checkcounts.json'
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