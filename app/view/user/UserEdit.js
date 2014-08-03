Ext.define('CineTicket.view.user.UserEdit', {
    extend: 'Ext.window.Window',
    xtype: 'user-edit',
    title: 'Editar Usuário',
    iconCls: 'people',
    modal: true,
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
                        xtype: 'form',
                        bodyPadding: 20, 
                        width: 400,
                        layout: 'anchor',
                        defaults: { // defauls for the layout
                            anchor: '100%' //???
                            },
                        defaultType: 'textfield',
                        fieldDefaults: {
                            labelAlign: 'right',
                                    labelWidth: 150,
                                    msgTarget: 'qtip',   
                                    allowBlank: false  
                                    },
                                
                        items: [{
                                xtype: 'textfield', 
                                name : 'firtName',
                                fieldLabel: 'Nome'

                                },{

                                xtype: 'textfield', 
                                name : 'lastName',
                                fieldLabel: 'Sobrenome'

                                },{

                                xtype: 'textfield',
                                name : 'email',
                                fieldLabel: 'E-mail' 

                                },{

                                xtype: 'textfield',
                                name: 'acessPriviledge', 
                                fieldLabel: 'Tipo de Acesso'

                                },{

                                xtype: 'textfield',
                                name: 'login', 
                                fieldLabel: 'Login'

                                },{

                                xtype: 'textfield',
                                name: 'password', 
                                fieldLabel: 'Senha'

                                },{

                                xtype: 'textfield',
                                name: 'passwordConfirmation', 
                                fieldLabel: 'Confirmação Senha'

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

