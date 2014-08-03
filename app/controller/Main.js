Ext.define('CineTicket.controller.Main', {
    extend: 'Ext.app.Controller',

    requires:[ 
        'CineTicket.view.Viewport',
        'CineTicket.view.Navigation',  
        'CineTicket.view.AppHeader',
        'CineTicket.view.ThemeSwitcher',  
        'CineTicket.view.session.SessionList',
        'CineTicket.view.session.SessionEdit',
        'CineTicket.view.checkcount.CheckCountList',
        'CineTicket.view.checkcount.CheckCountEdit',
        'CineTicket.view.gender.GenderList',
        'CineTicket.view.gender.GenderEdit',
        'CineTicket.view.help.About',
        'CineTicket.view.help.Licence',
        'CineTicket.view.movie.MovieList',     
        'CineTicket.view.movie.MovieEdit',
        'CineTicket.view.room.RoomList',
        'CineTicket.view.room.RoomEdit',
        'CineTicket.view.studio.StudioList',
        'CineTicket.view.studio.StudioEdit',
        'CineTicket.view.user.UserList',
        'CineTicket.view.user.UserEdit'
        //'CineTicket.data.static.LicenceText'
        
    ],


    stores: [
        'SessionStore',
        'CheckCountStore',
        'GenderStore',
        'MovieStore',
        'RoomStore',
        'StudioStore',
        'UserStore'
    ],

    /*
    refs: [{
          
            ref: 'viewport',
            selector: 'viewport'

            },{

            ref: 'navigation',
            selector: 'navigation'
        
            },{

            ref: 'session-list',
            selector: 'session-list' 

            }],
    */

    init: function() {
        // This method is very handy when working with selectors.
        this.control({

            
            'navigation': {
                selectionchange: 'onNavigationChange'
            },
            'session-list': {
                itemdblclick: 'onSessionListClicked'
                //itemdblclick: this.onSessionListClicked // this another alternative
            },
            'check-count-list': {
                itemdblclick: 'onCheckCountListClicked'
            },
            'gender-list': {
                itemdblclick: 'onGenderListClicked'
            },
            'movie-list': {
                itemdblclick: 'onMovieListClicked'
            },
            'room-list': {
                itemdblclick: 'onRoomListClicked'
            },
            'studio-list': {
                itemdblclick: 'onStudioListClicked'
            },
            'user-list': {
                itemdblclick: 'onUserListClicked'
            }


        });
    },
    onOpenEditScreen: function(widget, grid, record ){
        var  editScreen = Ext.widget(widget);
        editScreen.down('form').loadRecord(record);
    },
    onSessionListClicked: function(grid, record){
        this.onOpenEditScreen('session-edit', grid, record);
    },
    onCheckCountListClicked: function(grid, record){
        this.onOpenEditScreen('check-count-edit', grid, record);
    },
    onGenderListClicked: function(grid, record){
        this.onOpenEditScreen('gender-edit', grid, record);
    },  
     onMovieListClicked: function(grid, record){
        this.onOpenEditScreen('movie-edit', grid, record);
    },  
     onRoomListClicked: function(grid, record){
        this.onOpenEditScreen('room-edit', grid, record);
    },  
     onStudioListClicked: function(grid, record){
        this.onOpenEditScreen('studio-edit', grid, record);
    },
    onUserListClicked: function(grid, record){
        this.onOpenEditScreen('user-edit', grid, record);
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
