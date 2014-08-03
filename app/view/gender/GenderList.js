Ext.define('CineTicket.view.gender.GenderList', {
    extend: 'Ext.grid.Panel', 
    xtype: 'gender-list',  
    title: 'Listagem de Gêneros',     
    store: 'GenderStore', 
    width: 800, 
    height: 300, 
    //iconCls: 'film',
    columns: [
            // Item of the grid, this the first step when creating a screen
            // The second step is creating the add/edit form
            // dataIndex comes from Model
           {text: 'ID', dataIndex: 'id', width: 50},
           {text: 'Gênero', dataIndex: 'description', flex: 1}
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

