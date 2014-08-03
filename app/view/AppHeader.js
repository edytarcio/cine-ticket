Ext.define('CineTicket.view.AppHeader', {
    extend: 'Ext.Container',
    xtype: 'app-header',
    id: 'app-header',
    height: 120,
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function() {
        this.items = [{
                    xtype: 'component',
                    id: 'app-header-title',
                    flex: 1,    
                    baseCls: 'logo'}];  

        if (!Ext.getCmp('options-toolbar')) {
            // Adds a component to the items config. but What
            // is this condition? what is the * of getCmp?
            this.items.push({
                xtype: 'theme-switcher'
            });
        }

        this.callParent();
    }
});
