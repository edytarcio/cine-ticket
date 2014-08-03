Ext.define('CineTicket.view.session.SessionEdit', {
    extend: 'Ext.window.Window',
  
    xtype: 'session-edit',        
    requires: [
        //'Ext.data.*',
        //'Ext.form.*',
        //'KitchenSink.model.State'
    ],       

    title: 'Cadastro de Filmes',
    
    
    initComponent: function(){
        
        Ext.apply(this, {
            autoShow: true,
            modal: true,
            items: [{
                    xtype: 'form',
                    bodyPadding: 10,
                    width: 600,  
                    height: 270,
                    fieldDefaults: {
                                    labelAlign: 'right',
                                    labelWidth: 90,
                                    msgTarget: 'qtip',   
                                    allowBlank: false,  
                                    margins: '0 0 5 15'//, bottom,   
                                    },
                    items: [{            
  
                            xtype: 'component',
                            html: 'Informe dados para cadastrar uma nova Seção',
                            baseCls: 'action-title',     
                            height: 35

                            },{     

                            xtype: 'container',
                            layout: 'hbox',  
                            items: [{
                          
                                    xtype: 'textfield',
                                    name: 'description',
                                    fieldLabel: 'Seção',
                                    allowBlank: false,
                                    flex: 1
                    
                                    }]

                            },{

                            xtype: 'container',
                            layout: 'hbox',

                            items: [{   
                                    xtype: 'combobox',
                                    name: 'movieDescription',
                                    fieldLabel: 'Filme',
                                    allowBlank: false,
                                    flex: 1
                                
                                    },{
                                   
                                    xtype: 'textfield',
                                    name: 'classification',
                                    fieldLabel: 'Classificação',
                                    width: 200
                                  
                                    }]

                            },{

                            xtype: 'container',
                            layout: 'hbox',
                            items: [{

                                    xtype: 'combobox',
                                    name: 'comboRoom',
                                    forceSelection: true,
                                    name: 'roomDescription',
                                    fieldLabel: 'Sala',
                                    valueField: 'abbr',
                                    displayField: 'abbr',
                                    queryMode: 'local',
                                    emptyText: 'Selecione a Sala',
                                    //width: 200
                                    flex: 1
                 
                                    },{

                                    xtype: 'textfield',
                                    name: 'seats',
                                    fieldLabel: 'Lugares',
                                    emptyText: 'Lugares',
                                    allowBlank: false,
                                    width: 200
                                    }]

                            },{

                            xtype: 'container',
                            layout: 'hbox',

                            items: [{

                                    xtype: 'combobox',
                                    name: 'comboRoom',
                                    forceSelection: true,
                                    name: 'audio',
                                    fieldLabel: 'Audio', // 2D 3D
                                    valueField: 'abbr',
                                    displayField: 'abbr',
                                    queryMode: 'Audio', // Dublado, Legendado, Nacional
                                    flex: 1

             
                                    },{

                                    xtype: 'combobox',
                                    name: 'comboRoom',
                                    forceSelection: true,
                                    name: 'format', 
                                    fieldLabel: 'Formato', // 2D 3D
                                    valueField: 'abbr',
                                    displayField: 'abbr',
                                    queryMode: 'Formato Exibição',
                                    width: 200

                                    }]
                            },{

                            xtype: 'container',
                            layout: 'hbox',  

                            items: [{

                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'Horário',
                                    layout: 'hbox',
                                    combineErrors: true,
                                    defaultType: 'textfield',
                                    defaults: {
                                                hideLabel: 'true'
                                              },
                                    fieldDefaults: {
                                       // margins: '0 0 0 0'//, bottom, 
                                                    },
                                    items: [{

                                            xtype: 'textfield',
                                            name: 'initialTime',
                                            fieldLabel: 'Horário Inicial',
                                            margins: '0 0 0 0',
                                            labelAlign: 'top',
                                            name: 'hrInicial',
                                            width: 120,
                                            emptyText: '??:??h - Inicial',
                                            maskRe: /[\d\:h]/,
                                            regex: /^\d{2}:\d{2}h$/,
                                            regexText: 'Deve ser no formato ??:??h'

                                            },{

                                            xtype: 'textfield',
                                            name: 'finalTime',
                                            fieldLabel: 'Horário Final',
                                            margins: '0 0 0 15',
                                            labelAlign: 'top',
                                            name: 'hrFinal',
                                            width: 120, 
                                            emptyText: '??:??h - Final',
                                            maskRe: /[\d\:h]/,
                                            regex: /^\d{2}:\d{2}h$/,
                                            regexText: 'Deve ser no formato ??:??h'

                                            }]
                                    }]
                            },{

                            xtype: 'container',
                            layout: 'hbox',  
                            items: [{
                                    xtype: 'datefield',
                                    name: 'inititalDate',
                                    fieldLabel: 'Data Inicial',
                                    name: 'hrInicial',
                                    width: 350
                                    }]
                            },{

                            xtype: 'container',
                            layout: 'hbox',  
                            items: [{
                                    xtype: 'datefield',
                                    name: 'finalDate',
                                    fieldLabel: 'Data Final',
                                    name: 'hrInicial',
                                    width: 350
                                    }]
                            }]
                    }],
   
                    buttons: [{

                            text: 'Cancelar',  
                            scope: this,
                            handler: this.close

                            },{

                            text: 'Salvar',
                            width: 150,
                            scope: this,
                            handler: this.onSaveClick

                            }]
             
      

        });
        this.callParent();
           
    },
    
    onSaveClick: function(){
    
        var form = this.getForm();
        if (form.isValid()) {
            Ext.MessageBox.alert('Submitted Values', form.getValues(true));
        }
    }
    
   
});
