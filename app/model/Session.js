Ext.define('CineTicket.model.Session',{
    extend: 'Ext.data.Model',
    fields: [

        {name: 'id', type: 'int'},
        {name: 'description', type: 'string'},
        {name: 'movieDescription', type: 'string'},
        {name: 'initialTime', type: 'string'},
        {name: 'finalTime', type: 'string'},
        {name: 'initialDate', type: 'string'},
        {name: 'finalDate', type: 'string'},
        {name: 'format', type: 'string'},
        {name: 'roomDescription', type: 'string'},
        {name: 'seats', type: 'int'},
        {name: 'audio', type: 'string'},
        {name: 'classification', type: 'string'}
        ]

});

