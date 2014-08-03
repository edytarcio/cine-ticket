Ext.define('CineTicket.view.studio.StudioEdit', {

    extend: 'Ext.window.Window',
    xtype: 'studio-edit',
    title: 'Editar Estúdio',
    modal: true,
    layout: 'fit',
    autoShow: true,

    initComponent: function() {   
    	// A window usually have 'items' and 'buttons'
        this.items = [{
                    xtype: 'form',
                    bodyPadding: 20, 
                    layout: 'anchor',
                    width: 400,
                    defaults: { 
                        anchor: '100%' //???
                        },
                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelAlign: 'right'
                        },
                    items: [{

                            xtype: 'textfield', 
                            name : 'name',
                            fieldLabel: 'Stúdio'

                            }]
                    }];
        this.buttons = [{
                        text: 'Salvar',
                        action: 'save',
                        iconCls: 'save'

                        },{

                        text: 'Cancelar',
                        iconCls: 'cancel',
                        scope: this,
                        handler: this.close

                        }];  

        this.callParent(arguments);
    }
});

