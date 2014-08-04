Ext.define('CineTicket.view.Viewport', {
    extend: 'Ext.container.Viewport',

    // Require components, usually ExtJs defined components. Components
    // defined by the user are usually required here. Component define 
    // by the user will required in 'requires' config inside controller.
    // For example, if you want to use app-header xtype you must require
    // the component in the 'Main' controller class.
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
        ],
    layout: 'border',
    items: [{ 

            region: 'west',
            xtype: 'navigation',
            width: 250,
            split: true,
            //stateful: true,
            //stateId: 'mainnav.west',
            collapsible: false

            },{

            //region: 'center'//,
            //xtype: 'centerRegion'
            //xtype: 'session-edit'   //ok
            //xtype: 'session-list' // ok
            //xtype: 'check-count-list' // ok
            xtype: 'gender-list' // 

            }]
});


/*

     
        Ext.create('Ext.container.Viewport',{

            // You can assign layouts to classes that inherit from 'panel'
            layout: 'border',

        

            // Important: When creating a class which inherits from containers 
            // do not forget to create the items. Othewise the componet of your 
            // application won't be shown.
            items: [
                {
                    //xtype: 'logo',
                    xtype: 'panel',
                    region: 'north',
                    title: 'CineApp - Sistema de Venda de Ingressos',
                    width: 200,
                    height: 150, 
                    bodyPadding: 5, // padding for the bodypage

                    // This is a vey useful way to load a background image
                    html: '<img src="resources/images/logo-cinemathe.png" />'
                    //cls: 'header'  /// ???
                    //iconCls: 'users.ico'

                },
                {

                // In order to get the proper layout for your application, 
                // assign new components to the 'xtype' property of 'items'. 
                // The components can be of many types including panels, 
                // containers or customized ones.
                //xtype: 'panel',
                xtype: 'menu',
                title: 'Menu',
                region: 'west',
                //width: 270, // better 270 
                // enable resizing; used with minSize, maxSize
                split: true,
                minSize: 100,
                maxSize: 200,
                collapsible: true,
                margins:'5 0 0 5', // better 5 0 0 5

                //This will be rendered to the panel component
                html: 'finally',
                iconCls: 'users.ico'
                },
                {
                // Erro that you get when a property is not found:
                // Uncaught TypeError: Cannot read property 'substring' of undefined 
                // When using a user defined xtype don't forget to require it by
                // assigning the 'requires' config.
                //xtype: 'userlist',
                //xtype: 'movielist',
                //xtype: 'genderlist',
                //xtype: 'studiolist',
                //xtype: 'roomlist',
                //xtype: 'about',
                xtype: 'licence',
                //xtype: 'checkcountlist',
                //title: 'This is a tiltle',
                region: 'center',
                //This will be rendered to the panel component
                // This Viewport could be customized Viewport. In that
                // case the implemented Viewport should be put at 
                // app/view folder. 
                // html: 'finally' //this property is used with a xtype: panel
                margins: '5 5 0 0' // better 5 5 0 0
                }   
            ]   
        });



*/

/*
The viewport.js file

RootApplicationFolder/app/view/viewport.js

BP: The viewport.js is the main access for the components of your application.
Generally, you use a viewport with a 'border' layout, and then populate 
its regions with user defined components (or any other suitable extjs component). 
You don't have to use all the regions, actually you can get any layout you want 
by combining containers, panel and layout types.

As a good practice, the viewport.js file 
should be created at RootApplicationFolder/app/view/viewport.js
(see basic structure for the application). It's also the place the
place where extjs will look for it if you assign 'autoCreateViewport: true' 
in app.js file (Ext.application).

The basic structure for the viewport.js class is as follow:    

Ext.define('CineTicket.view.Viewport', {
    extend: 'Ext.container.Viewport',

    // Require components to your needs, usually ExtJs defined components.
    // Components defined by the user are usually required here at least
    // in simple applications.
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: 'border',

    items: [{
        region: 'north',
        xtype: 'userAppHeader'
    }, {
        region: 'west',
        xtype: 'userDefined', // Maybe a Navigation
        width: 250,
        split: true,
        //stateful: true,
        //stateId: 'mainnav.west',
        collapsible: true
    }, {
        region: 'center',
        xtype: 'userDefined'
    }]
});

See this example showing a very simple viewport running
[Getting a simple example running]
-------
Sometimes the only thing you need is to quickly show an
example (or a small application) running, to do it,
you'll only need the following peace of code:

// app.js file
Ext.application({
    name: 'MyApp',
    launch: function() {
        // It's not necessary to use a Viewport class, you can 
        // use any other class if you want.
        Ext.create('Ext.container.Viewport', {
            items: {
                html: 'My App'
            }
        });
    }
});

Note that when using this second approach you usually will have to define
inside the app.js configs for models, views and controllers.
----


*/

