Ext.define('CineTicket.view.Viewport', {
    extend: 'Ext.container.Viewport',

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
            collapsible: false

            },{

            xtype: 'user-list' 

            }]
});

