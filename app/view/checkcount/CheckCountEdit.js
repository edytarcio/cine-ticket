Ext.define('CineTicket.view.checkcount.CheckCountEdit', {

    extend: 'Ext.window.Window',
    xtype: 'check-count-edit',
    title: 'Editar dados da bilheteria', 
    //iconCls: 'film',
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
                items: [{
            
                        xtype: 'textfield', 
                        name : 'id',
                        fieldLabel: 'Número'
     
                        },{
                    
                        xtype: 'textfield', 
                        name : 'description',
                        fieldLabel: 'Descrição'
              
                        },{
                 
                        xtype: 'textfield', 
                        name : 'ipAddress',
                        fieldLabel: 'IP'
              
                        },{
                  
                        xtype: 'textfield', 
                        name : 'status',
                        fieldLabel: 'Status'
               
                        },{
                
                        xtype: 'textfield', 
                        name : 'operadorName',
                        fieldLabel: 'operator'
                
                        }]
                }];

        this.buttons = [{

                text: 'Salvar',
                action: 'save',
                iconCls: 'save',
                scope: this,
                handler: this.onSaveClick
                
                },{

                text: 'Cancelar',
                iconCls: 'cancel',
                scope: this,
                handler: this.close
                
                }];

        this.callParent(arguments);
    },
   
    onSaveClick: function(){
    
        var form = this.getForm();
        if (form.isValid()) {
            Ext.MessageBox.alert('Submitted Values', form.getValues(true));
        }
    }
});

