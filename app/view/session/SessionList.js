Ext.define('CineTicket.view.session.SessionList', {
    extend: 'Ext.grid.Panel',

    xtype: 'session-list',
    title: 'Listagem de Sessões',
    width: 800, // try remove
    height: 300, // try remove
    store: 'SessionStore',   
    iconCls: 'film',
    
    columns: [
           {header: 'ID', dataIndex: 'id', width: 50},
           {header: 'Sessão', dataIndex: 'description', flex: 150},   
           {header: 'Filme', dataIndex: 'movieDescription', width: 100},
           {header: 'Formato', dataIndex: 'format', width: 50},   
           {header: 'Hr. Inicial', dataIndex: 'initialTime', width: 80},
           {header: 'Hr. Final', dataIndex: 'finalTime', width: 80},
           {header: 'Dt. Inicial', dataIndex: 'initialDate', width: 80},
           {header: 'Dt. Final', dataIndex: 'finalDate', width: 80},
           {header: 'Formato', dataIndex: 'format', width: 50},
           {header: 'Sala', dataIndex: 'roomDescription', width: 50},
           {header: 'Lugares', dataIndex: 'seats', width: 50},
           {header: 'Audio', dataIndex: 'audio', width: 50},
           {header: 'Classification', dataIndex: 'classification', width: 50} 
           
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
