Ext.define('CineTicket.view.Navigation', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigation',
    title: 'Menu',
    rootVisible: false,
    lines: false,
    useArrows: true,
    root: {
        expanded: true,
        children: [     
            {   
                text: "Vendas", 
                expanded: true, 
                children: [
                    // When using trees as way for accessing other components
                    // acording to the selected item, you must assign the 'id' 
                    // config and set and idenfication that match 
                    // the target component xtype. 
                    { id: 'tickets', text: "Ingressos", leaf: true }
                ]
            },
            {   
                text: "Cadastros", 
                expanded: true, 
                children: [

                    // Navigation must have xtype names of their corresponding screens this
                    // will make navigation between screens easier.
                    { id: 'ticket-counter-list', text: "Bilheterias", leaf: true },
                    { id: 'movies-list', text: "Filmes", leaf: true, iconCls: 'film' },
                    { id: 'prices-list', text: "Preços", leaf: true },
                    { id: 'rooms-list', text: "Salas", leaf: true },
                    { id: 'sessions-list', text: "Sessões", leaf: true },
                    { id: 'users-list',text: "Usuários", leaf: true, iconCls: 'people' }
                ]
            },
            {   text: "Configurações", leaf: true, iconCls: 'application'}
            
        ]  
    } 
   
});