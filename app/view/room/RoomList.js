Ext.define('CineTicket.view.room.RoomList', {
    extend: 'Ext.grid.Panel',
    xtype: 'room-list',
    title: 'Listagem de Salas',
    store: 'RoomStore',
    width: 800, 
    height: 300,  
    //iconCls: 'film',
    columns: [
       
            {header: 'ID', dataIndex: 'id', width: 50},
            {header: 'Sala', dataIndex: 'description', flex: 1},
            {header: 'Lugares', dataIndex: 'seats', width: 100}    
    ],   

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [    
            {
                text: 'Adicionar', 
                iconCls: 'create'
            }, 
            {
                text: 'Editar',
                iconCls: 'modify'
            },
            {
                text: 'Remover',
                iconCls: 'delete'
            }      
        ]
    }]
});

