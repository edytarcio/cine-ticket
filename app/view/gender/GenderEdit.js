Ext.define('CineTicket.view.gender.GenderEdit', {
    extend: 'Ext.window.Window',
    xtype: 'gender-edit',
    title: 'Editar Gênero',
    modal: true,
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
    
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
                                    },
                    items: [{
        
                            xtype: 'textfield', 
                            name: 'description',
                            fieldLabel: 'Gênero'
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

