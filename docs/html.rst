Ext.define('CineTicket.view.help.About', {

    extend: 'Ext.window.Window',
    alias : 'widget.about',

    title : 'Sobre o CineApp',
    //iconCls: 'people',
    modal: true,
    layout: 'fit',

    // Set this property to true to show the screen after it is 
    // rendered.
    autoShow: true,
    width: 400,
    html: ['<div class=\'about-texts\'>',
                '<h2>Cine App</h2>',
                '<p>',
                    'CineApp is an application for managing Ticket selling ',
                    'in Movie Theaters. It\'s currentlly in Beta version and it\'s ',
                    'intended to be a contribution to the open source community. ',
                    'CineApp is release under the LGPL licence.',
                    '<a href="https://www.gnu.org/licenses/lgpl.html">Please click this link to see the terms of use.</a>',
                '</p>',
                '<p>','For additional info or reporting bugs you can contact: ','</p>',
                'edytarcio@gmail.com','<p>','Copyright 2014 Edytarcio P Silva','</p>',
                '<p>Beta Version</p>',
           '</div>'],
    bodyCls: 'about-text',





    // Again, initComponets are very common when defining views. 
    // Remember that 'initComponent' is used to initialize 
    // components that uses a panel in it hierarqui. 
    initComponent: function() {
    	// A window usually have 'items' and 'buttons'
        this.buttons = [
        	// Here you can define buttons and actions.
            {
                text: 'Ok',
                // There's no action here, it simply contains a
                // to close the window. Scope config is used to tell 
                // the handler the current 'scope'
                scope: this,
                // hadler can capture the flow of any event. Note
                // the method this.close is also available for the 
                // Window component.
                handler: this.close
            }
        ];
        // Call the Parent's initComponent method.
        this.callParent(arguments);
    }//,
    // Reder to Ext.getBody if you just want to show a quick sole example usinf Form
    // renderTo: Ext.getBody() -- I must do an example with this
});