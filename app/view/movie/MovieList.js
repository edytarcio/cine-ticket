Ext.define('CineTicket.view.movie.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'movie-list',
    title: 'Listagem de Filmes',
    
    store: 'MovieStore',  
    iconCls: 'film',
    width: 800, 
    height: 300,
    columns: [
            // Item of the grid, this the first step when creating a screen
            // The second step is creating the add/edit form  
           {header: 'ID', dataIndex: 'id', width: 50},
           {header: 'Titulo', dataIndex: 'title', flex: 1},
           {header: 'Direção', dataIndex: 'director', width: 150},
           {header: 'Duração', dataIndex: 'duration', width: 100},
           {header: 'Genero', dataIndex: 'gender', width: 100},
           {header: 'Classificação', dataIndex: 'rate', width: 100},
           {header: 'Estúdio', dataIndex: 'studio', width: 100},
           {header: 'Lançamento', dataIndex: 'release', width: 100}
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

