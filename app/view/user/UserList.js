Ext.define('CineTicket.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-list',
    title: 'Listagem de Usuarios',
    width: 800,
    height: 300,

    store: 'UserStore',  
    iconCls: 'people',
    columns: [
           {header: 'ID', dataIndex: 'id', width: 50},
           {header: 'Nome', dataIndex: 'firstName', width: 100},
           {header: 'Sobrenome', dataIndex: 'lastName', width: 200},
           {header: 'E-Mail', dataIndex: 'email', width: 150},
           {header: 'Tipo Acesso', dataIndex: 'accessPriviledge', width: 100},
           {header: 'Login', dataIndex: 'login', width: 100},
           {header: 'Senha', dataIndex: 'password', width: 100}
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

