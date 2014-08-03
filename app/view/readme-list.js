// Things that are important when defining a list

Ext.define('CineTicket.view.session.SessionList', {
    extend: 'Ext.grid.Panel',
    //alias: 'widget.session-list', // You can also use xtype
    xtype: 'session-list',
    title: 'Listagem de Sessões',

    // It's very important to define 'width' and 'height' configs for grid.Panel 
    // otherwise the view may be shown with unexpected result.
    // 1. Define width and height otherwise the screen won't be shown as expected.
    width: 800, 
    height: 300,

    // Note that 'store' config in views do not requires/load stores, it only tells
    // which store should be used. Stores can be loaded in Controller 'stores' config.
    // 2. Don't forget to load 'store' config in Controller.
    store: 'SessionStore',   
    iconCls: 'film',
    
    columns: [
            // Item of the grid, this the first step when creating a screen
            // The second step is creating the add/edit form
            // 2. For grid.Panel use can use columns.text not columns.header
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

    // the default xtype for 'items' of toolbar is button.
            // xtype: button. Other xtypes that you can use in a
            // toolbar are splitbutton, textfield, tbseparator, 
            // tbtext, tpspacer and tbfill. 
            // Other question: 
            // 1. Does each component has a default xtype?
            // 2. How does one know if a component has a 
            //    'dockedItems' config?
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

// You must create SessionList before creating SessionEdit or SessionDetails. And befor
// creating SessionList your must create SessionStore

// Defining stores
    // store, models, controllers and views are defined 
    // inside arrays.
    // store: ['Users'],


    //--------------------------------------------------------
    // initComponet is commonly used in views when using
    // components that extends Ext.panel. All no-primitive
    // data types and arrays should be defined inside 
    // initComponent.
  
    /*
    initComponent: function() {
        console.log('Inside Views initComponents');

        // Creating an inline Store
        // This is a simple way of setting data to a store, this is
        // very useful when you want to quickly test a component.
        // After you've done comment this code snipt and pass the
        // control the user defined store class: 
        // this.store = ['Users'];
        
        this.store = {
            // As common practice you define 'fields' in Models 
            // and 'data' comes from proxies. Note that 'data' 
            // is a normal array of dictionaries easilly extracted
            // from a .json file. 
            fields: ['id', 'nick', 'email'],
            data: [
                {id: 1, nick: 'Alencar', email: 'fabricio.alencar@armazemparaiba.com.br'},
                {id: 2, nick: 'Anailza', email: 'anailza.moura@armazemparaiba.com.br'},
                {id: 3, nick: 'Fred', email: 'fred@gmail.com'},
                {id: 4, nick: 'Leticia', email: 'leticia@bol.com.br'}
            ]
        };
        

        // The data comes Stores/proxies
        this.columns = [
         {header: 'ID', dataIndex: 'id', width: 50},
           //{header: 'Nome Completo', dataIndex: 'fullName', width: 250},
         {header: 'Nick', dataIndex: 'nick', flex: 1},
         {header: 'E-Mail', dataIndex: 'email', flex: 1}

           // flex config
           // the flex config gets the remaining space of the component
           // and divide (in equal values) between other fields that uses
           // the flex config. If there is only one field using flex than
           // that field with get all the remaing space.


        // Use 'equal' sign (not collons) to assign values to
        // properties using the 'this' pointer. Semi-colons
        // are used at the end of the commands. If you declare
        // the store in Controller' stores config you will be
        // able to declare the 'stores' config the normal,
        // in other words you can assign it outside of the 
        // initComponent methods. The same happens to 'columns'
        // config but this config will be defined in Models 
        // columns config.
        // stores:['Users'];

        ];
        this.callParent(arguments); 
    }
    */


// Defining fields inline
// It's an expression used when you define a config
// property that normally should be defined somewhere
// else, this is useful when you want to quickly test 
// something without having to follow common practices.
// Example:


// What the difference between dynamic loading and 
// non-dynamic loading?
// Does controllers execute Ext.require? 
// Ext.requires makes all dependencies available.


// Ext.require('') , Ext.Loader,
// Loading a component 
// The proper way to load a component is trough Controller 
// classes or Ext.application. You only have to assign 
// configs such as views, controller, models and stores 
// (in controllers or Ext.application) or requires.
/*
Ext.define("MyApp.controller.Foo", {
     extend: "Ext.app.Controller",
     stores: ['Users', 'Vehicles']
 });
or

// Note that with requires you have to set the full path
Ext.define("MyApp.controller.Foo", {
     extend: "Ext.app.Controller",

     requires: [
         'MyApp.store.Users',
         'MyApp.store.Vehicles'
     ]

     getUsersStore: function() {
         return this.getStore("Users");
     }
 });
*/ 
// 
// By doing this way the 'references' will be loaded at 
// the correct time and they will be registered with
// StoreManager, so you will be alble to access them  
// with controller.getStore(storeId).  


//Synchronously loading 'MyApp.store.Store1'; consider 
// adding Ext.require('MyApp.store.Store1') above Ext.onReady
// Working around the above warning:
// The only way I could manage to get rid of all the warnings
// without going through every file and analyze it's store 
//dependencies, was to add 
// Ext.require(['MyApp.store.Store1' ... 'StoreN'].

// Stores are use widely in my App, thats why I thought that 
// requiring them ONCE was better and more practical than 
// requiring them in every file that uses them. 