Ext.define('CineTicket.model.Movie', {

	extend: 'Ext.data.Model',
	fields: [
	
		{name: 'id', type: 'int'},
		{name: 'title', type: 'string'},
		{name: 'director', type: 'string'},
		{name: 'duration', type: 'int'},
		{name: 'gender', type: 'string'},
		{name: 'rate', type: 'string'},
		{name: 'studio', type: 'string'},
		{name: 'release', type: 'int'}
	],
	proxy: {

		type: 'ajax',
		api: {
			read: 'data/json/movies.json'
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