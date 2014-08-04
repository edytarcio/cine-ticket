// You have several way for loading data in a Store class...here are some of them
// 1. Load data by defining 'root' config
//    When using this approach you don't need to define 'model' config.

Ext.define('CineTicket.store.NavigationStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    //model: 'CineTicket.model.Session'

    // Basically data can come from root, data, or proxy (json, api) configs.
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
// Although you can directly assign 'root' or 'data' config directelly inside a view to provide
// data, it's preferable to create a store to provide data. It's easier to organize, because
// this way you can presume that all data comes from store, without in-line data.
// Defining a store using 'root' and 'data' config from other components such as grids.

}); 


// 2. Load data by defining 'data' config

// 3. Load data by defining a proxy with an 'api' config json file.
Ext.define('CineTicket.store.SessionStore', {
    extend: 'Ext.data.Store',

    // 1. This is important to load the store automatically
    autoLoad: true,
   
    // Theres no need to require model in Controller or View
    model: 'CineTicket.model.Session',

    // When testing, if intend to bring data from a table that you must use
    // a proxy insted of 'data' or 'root' configs. Also, when using root
    // use only for deep hierarquies, for single data, use 'data' config.
    proxy: {
          // the communication is via 'Ajax request'
          type: 'ajax',
          api: {
              // the json file is plural
              read: 'data/json/sessions.json'
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

// 4. Load data by defining a proxy pointing to a real API.

// 5. Load data by creating in-line stores.

// OTHE IMPORTANT THINGS WHEN DEFINING A STORE
// Model files have a plural name
Ext.define('CineApp.store.Users', {
    // Plural names for strores
    // Extends data.store
    // Models and Views are named singular, Controllers and
    // Stores are named plural.
    extend: 'Ext.data.Store',
    // Assign autoLoad to 'true' to show data when the component
    // is initialized.
    autoLoad: true,
    // Note that model config is singullar. Also you've got
    // to define the full path for the User model. I don't know
    // why this is different from other configs. Never mind. 
    // The important thing is that by doing this way we now 
    // reference the Model instead of defining fields inline
    // as we did in the view. 
    // Stores must declare a model setting full name 
    model: 'CineApp.model.User',


    // Note that you can also declare the 'store.fields' config in
    // a view, istead of a model. In that case you don't need 
    // to assign a 'model' config. 
    // In this case, data is set manually to the 'data' config. 
    // Usually data comes from a proxy config.
    //data: [
    //      {id: 1, nick: 'Alencar', email: 'fabricio.alencar@armazemparaiba.com.br'},
    //    {id: 2, nick: 'Anailza', email: 'anailza.moura@armazemparaiba.com.br'},
    //    {id: 3, nick: 'Fred', email: 'fred@gmail.com'},
    //    {id: 4, nick: 'De Deus', email: 'anthony@gmail.com'},
    //    {id: 5, nick: 'Edytarcio', email: 'edytarcio@gmail.com'},
    //    {id: 6, nick: 'Leticia', email: 'leticia@bol.com.br'}
    //],

  

    // Proxies are going to be defined in Models but there's
    // no problem at all you define your proxies in Stores. If You
    // define a 'proxy' config there no need to assign 'data' config.
    // The proxy goes in the store or the model
    /*
    proxy: {
        // type of data that we going to read
        // Defyning action methods acording to API definition
        type: 'ajax',
        // API definition 
        api: {
            read: 'data/json/users.json'
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
    */
    init: function() {
        // This a possible way to test of a store is working but I'm not sure if
        // this is the best approach.
        // This is not working! Why???
        console.log('passando pela Store'); 
    }
// Ends with semi-collon    
});

Combobox -- Comboboxes also have a 'store' config.