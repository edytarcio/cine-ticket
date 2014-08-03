Ext.define('CineTicket.view.studio.StudioList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studio-list',
    title: 'Listagem de Estúdios',
    store: 'StudioStore',  
    width: 800, 
    height: 300, 
    //iconCls: 'film',
    columns: [
           {header: 'ID', dataIndex: 'id', width: 50},
           {header: 'Estúdio', dataIndex: 'name', flex: 1}
    ], 

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
                text: 'Adicionar', 
                iconCls: 'create'

                },{

                text: 'Editar',
                iconCls: 'modify'

                },{

                text: 'Remover',
                iconCls: 'delete'

                }]
    }]
});

