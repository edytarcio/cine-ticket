Ext.define('CineTicket.view.help.About', {

    extend: 'Ext.window.Window',
    xtype : 'about',

    title : 'About CineTicket',
    modal: true,
    //layout: 'fit',

    autoShow: true,
    width: 400,
    // Example showing in-line html.
    html: ['<div class=\'about-texts\'>',
                '<h2>CineTicket</h2>',
                '<p>',
                    'CineTicket is an application for managing Ticket selling ',
                    'in Movie Theaters. It\'s currentlly in Beta version. It ',
                    'was developed primarely intended to be a prototype application ',
                    'for learning Application Architecture and other Web-related ',
                    'tecnologies such as ExtJs, Flask and JavaScript to name a few. ',
                    'At the same time, this is also my contribution to the open source community ', 
                    'specially for new developers who have simillar interest as the ones ',
                    'mentioned here. ',
                    'CineApp is released under the LGPL licence. ',
                    '<a href="https://www.gnu.org/licenses/lgpl.html">Please click this link to see the terms of use.</a>',
                '</p>',
                '<p>','For additional info, reporting bugs, or any constructive feedback you  ',
                ' can contact me on at edytarcio@gmail.com','<p>','Copyright 2014 Edytarcio P Silva','</p>',
                'CineTicket - Beta Version',
           '</div>'],
    bodyCls: 'about-text',


    initComponent: function() {
        this.buttons = [{
                text: 'Ok',
                scope: this,
                handler: this.close
                }
        ];
  
        this.callParent(arguments);
    }
});