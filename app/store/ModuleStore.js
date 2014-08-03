Ext.define('CineTicket.store.ModuleStore', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
           
            { text: "Vendas", expanded: true, children: [
                { text: "Ingressos", leaf: true }
            ]},
            { text: "Cadastros", expanded: true, children: [  
                { text: "Bilheterias", leaf: true },
                { text: "Filmes", leaf: true },
                { text: "Preços", leaf: true },
                { text: "Salas", leaf: true },
                { text: "Sessões", leaf: true },
                { text: "Usuários", leaf: true }
            ]},
            { text: "Configurações", expanded: true, children: [
                { text: "PDV", leaf: true },
                { text: "Servidor", leaf: true },
                { text: "Vendas", leaf: true }
            ]}
            
        ]  
    }           
});   