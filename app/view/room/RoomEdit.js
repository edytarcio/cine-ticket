Ext.define('CineTicket.view.room.RoomEdit', {

    extend: 'Ext.window.Window',
    xtype: 'room-edit',
    title: 'Editar Sala',
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
                    defaults: { // defauls for the layout
                        anchor: '100%' //???
                        },
                    defaultType: 'textfield',
                    fieldDefaults: {
                                    labelAlign: 'right',
                                    labelWidth: 90,
                                    msgTarget: 'qtip',   
                                    allowBlank: false
                                    },
                    items: [{

                        xtype: 'textfield', 
                        name : 'description',
                        fieldLabel: 'Sala'

                        },{

                        xtype: 'textfield', 
                        name : 'seats',
                        fieldLabel: 'Lugares'

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

