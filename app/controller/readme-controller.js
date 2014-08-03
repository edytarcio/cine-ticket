Ext.define('CineTicket.controller.Main', {
    extend: 'Ext.app.Controller',

    // 1. Controler should load every View used in the application
    requires:[ 
        'CineTicket.view.Viewport',
        'CineTicket.view.Navigation',  
        'CineTicket.view.AppHeader',
        'CineTicket.view.ThemeSwitcher',  
        'CineTicket.view.session.SessionList',
        'CineTicket.view.session.SessionEdit',
        'CineTicket.view.checkcount.CheckCountList',
        'CineTicket.view.checkcount.CheckCountEdit'
    ],

    // This will make stores available for the views.It's equivalent to 'requires' but
    // with a small sintax.
    stores: [
        'SessionStore',
        'CheckCountStore'
    ],


    // By default, the selecor are recognized by its xtypes, so unless your
    // explicitely want to change the selector name, I don't know any other
    // reason to refs.
    refs: [
        {
            // You get the reference from 'xtype' assigned in 'alias'
            // config when defining a class.
            // As a good practice, name your selectors with the same name
            // as your references. 
            ref: 'viewport',
            selector: 'viewport'
        },
        {
            ref: 'navigation',
            selector: 'navigation'
        },
        {
            ref: 'session-list',
            selector: 'session-list'
        }
        //,
        //{
        //    ref: 'contentPanel',  //centerRegion
        //    selector: 'contentPanel'
        //},
      
    ],


    init: function() {
        // This method is very handy when working with selectors.
        this.control({


            //'viewport > movielist': {
            //    // The 'render' envent is fired after the userlist is
            //    // rendered. You don't need to end the command with 
            //    // colons or semi-colons.
            //   render: this.onMovieListRendered
            //},

            
            'navigation': {
                selectionchange: 'onNavigationChange'
            },
 
            'session-list': {
                // Listens to the 'itemdbclick' envent. Which, of course,
                // is fired when the user double-clicks the userlist. 
                // Name the methods according to your views
                itemdblclick: 'onSessionListClicked'
                //itemdblclick: this.onSessionListClicked // this another alternative
            }
            /*,
            'viewport': {
                afterlayout: 'afterViewportLayout'
            },
            'codePreview tool[type=maximize]': {
                click: 'onMaximizeClick'
            },
            'contentPanel': {
                resize: 'centerContent'
            }
            */
        });
    },
    onOpenEditScreen: function(widget, grid, record ){
        // Ext.widget('useredit') creates an instance of useredit. The 
        // same could be done with Ext.create('widget.useredit) as well.
        var  editScreen = Ext.widget(widget);
        // The 'record' variable contains the item that was clicked
        // in the 'UserList' view. If the name of the form fields
        // matches the fields name in record variable then the form
        // will its field loaded automatically.
        console.log(editScreen);
        //form = editScreen.down('form');
        //console.log(form);
        editScreen.down('form').loadRecord(record);
        // another alternative:
        // form = editScreen.down('form');
        // form.loadRecord(record);  

    },
    onSessionListClicked: function(grid, record){
        console.log('On SessionList Clicked!');
        // Maybe I can optimize this and call it from some 'idName' as in Navigation 
        this.onOpenEditScreen('session-edit', grid, record);
    },

    onNavigationChange: function(selModel, records) {

        console.log('Navigation changing is working');
        /*
        var record = records[0],
            text = record.get('text'),
            xtype = record.get('id'),
            alias = 'widget.' + xtype,
            contentPanel = this.getContentPanel(),
            cmp;

        if (xtype) { // only leaf nodes have ids
            contentPanel.removeAll(true);  

            var className = Ext.ClassManager.getNameByAlias(alias);
            var ViewClass = Ext.ClassManager.get(className);
            var clsProto = ViewClass.prototype;
            if (clsProto.themes) {
                clsProto.themeInfo = clsProto.themes[Ext.themeName] || clsProto.themes.classic;
            }

            cmp = new ViewClass();
            contentPanel.add(cmp);
            if (cmp.floating) {
                cmp.show();
            } else {
                this.centerContent();
            }

            contentPanel.setTitle(text);

            document.title = document.title.split(' - ')[0] + ' - ' + text;
            location.hash = xtype;

            this.updateDescription(clsProto);

            if (clsProto.exampleCode) {
                this.updateCodePreview(clsProto.exampleCode);
            } else {
                this.updateCodePreviewAsync(clsProto, xtype);
            }
        }
        */
    }
    
    
});
