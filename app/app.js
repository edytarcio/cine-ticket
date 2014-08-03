Ext.application({

    name: 'CineTicket',

    requires: [],

    controllers: [
        'Main'
    ], 

    autoCreateViewport: true,
    
});


/*
The app.js file

RootApplicationFolder/app/app.js

BP: The app.js is the starting point for initializing your application. 
It will be called from index.html. As a good practice, the app.js file 
should be created inside the app folder (see basic structure for the 
application), one of the reasons is that the whole application itself it
will be contained inside the app folder, it gets a lot easier to copy and
paste your application later if you need.

The basic structure for the app.js class is as follow:    

Ext.application({

    // This is the name of your application and also it's namespace.
    // All the classes of your application should start with this name. 
    name: 'ExampleApp',  

    // He you are going to require only the classes that needs initialization
    // and that are not part of your application (I mean user defined). They
    // will be initialized inside 'init' config function. Generally you don't
    // require your app views, stores and models here, you can do it later
    // inside your controller class (app/controller/Main).  
    requires: [
        'ExampleApp.SomeClass',
        'Ext.class.X',
        'Ext.class.Y'
    ],

    // It's practical and easier to have just one controller per 
    // system/application. Create more controllers only if your
    // application needs it and for organization purposes.
    controllers: [
        'Main'
    ], 

    // It's good to have a viewport even for very simple applications. It
    // makes a lot easier to maintain it if it grows bigger. See Viewport
    // topic for more information.
    autoCreateViewport: true,

    // In app.js file, the init config will be used for the initialization
    // of classes that are not user define in your application. An example
    // of such classes could be as follow. Note that, depending on the way
    // the classes of your application are organized, it's not crucial to 
    // define the init function in the app.js file, you can *omit it.
    init: function() {
        // See ExtJs documentation for mode information on those classes.
        Ext.setGlyphFontFamily('Pictos');
        Ext.tip.QuickTipManager.init();  
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
    }
});


Getting a simple example running

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

In general, ExtJs let's you code your application the way you want! This
seems obvious, but what I really mean is that you can logically structure
an extjs application in several ways. This is quite good when you aquire
experience but this can also be confusing for begginers specially
when you want communication between the components. That's why I started this tutorial:
To makes thing easier and point a possible way to do it based on ExtJs 
documentation.

Ext.application

Ext.application is the main class in the app.js, beside another responsibilities,
it creates a global variable for the application.

-Definition of the most common configs for some classes in extJs
-Debbuging in extjs
-Inheritance inextJs
-Extonready

Tip: Define classes with basic configs for your application.

For useful information on this particullar subject see:
  Application Architecture Guide. 

More on definition of classes
Ext.define('MyApp.app.Application', {
    extend: 'Ext.app.Application',
    ...
});
Ext.application('MyApp.app.Application');

*/

