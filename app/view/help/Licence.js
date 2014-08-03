Ext.define('CineTicket.view.help.Licence', {
    extend: 'Ext.window.Window',
    alias : 'widget.licence',

    title : 'Licence - Terms of Use',
    //iconCls: 'people',
    modal: true,
    layout: 'fit',

    autoShow: true,
    width: 400,
    height: 400,
    // Example using atribute from a class to store text.
    requires: ['CineTicket.data.static.LicenceText'],
    //html: CineTicket.data.static.LicenceText.licence,
    bodyCls: 'about-text',

    initComponent: function() {
        this.items = [{
            // To use this syntax you must require/load the class
            html: CineTicket.data.static.LicenceText.licence,
            }]
        this.buttons = [{
                text: 'Ok',
                scope: this,
                handler: this.close
                }];
        this.callParent(arguments);  
    }
 
});