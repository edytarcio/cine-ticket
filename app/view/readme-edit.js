Ext.define('CineTicket.view.session.SessionEdit', {
    extend: 'Ext.window.Window',
    // Remember to require here only 'Ext' components. Do not require here
    // component that usually go into views, models or stores folders. The
    // controller will be responsible for requiring your views.  Also remember
    // that you must call Views in controllers; and Models in Stores.
    //alias: 'widget.session-edit',
    xtype: 'session-edit',        
    requires: [
        //'Ext.data.*',
        //'Ext.form.*',
        //'KitchenSink.model.State'
    ],       
    //xtype: 'session-edit',
    //frame: true,
    title: 'Cadastro de Filmes',
    
    
    // try this
    // Every Ext.component has items and buttons config.
    // Again, initComponets are very common when defining views. 
    // Remember that 'initComponent' is used to initialize 
    // components that uses a panel in its hierarqui. 
    initComponent: function(){
        
        // You generally use Ext.apply when you want to set a more
        // complex group of configs. If you want to set up just 'items'
        // and 'buttons' config there's no need to use Ext.apply
        Ext.apply(this, {
            autoShow: true,
            // 1. Must check if 'fit' is the default layout for Windows
            //layout: 'fit', 
            modal: true,
            items: [{
                    xtype: 'form',
                    bodyPadding: 10,
                    width: 600,  
                    height: 270,
                    // Defaults config for 'items' config
                    defaults: { // defauls for the layout
                        anchor: '100%' //???
                        },

                    defaultType: 'textfield',
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
                           // Use the 'style' config to apply css properties without
                           // having to create a css class.
                            baseCls: 'action-title',     
                            height: 35

                            },{     

                            xtype: 'container',
                            layout: 'hbox',  
                            items: [{
                                    //{
                                        // Each compont of 'items' config has a 'subconfig' 
                                        // called 'listeners', this is when you want to do
                                        // some action when the combo changes.
                                        /*
                                        xtype: 'textfield'
                                        listeners: {
                                            scope: this,
                                            change: this.onComoRoomChange
                                        },
                                        */   
                                    //},  
                                    xtype: 'textfield',
                                    name: 'description',
                                    fieldLabel: 'Seção',
                                    allowBlank: false,
                                    flex: 1
                                    //disableKeyFilter: true,
                                    //disabled: true
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
                                    //disableKeyFilter: true,
                                    //disabled: true
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
                                    //store: states,
                                    valueField: 'abbr',
                                    displayField: 'abbr',
                                    //typeAhead: true,
                                    queryMode: 'Audio', // Dublado, Legendado, Nacional
                                    flex: 1

             
                                    },{

                                    xtype: 'combobox',
                                    name: 'comboRoom',
                                    forceSelection: true,
                                    name: 'format', 
                                    fieldLabel: 'Formato', // 2D 3D
                                    //store: states,
                                    valueField: 'abbr',
                                    displayField: 'abbr',
                                    //typeAhead: true,
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
                    // These's a slight design diffence between assign 'buttons'  config
                    // in the scope of a Window or in the scope of another component
                    // such as a Form. But behavior is the same.
                    buttons: [{

                            text: 'Cancelar',  
                            scope: this,
                            // The 'action' config would be very helpful if we wanted
                            // to handle this event in Main controller. We only needed
                            // to listen to it using a selector (show an example). 
                            // On the other hand, this class can handle this responsibility.
                            //action: 'cancel',
                            handler: this.close

                            },{

                            text: 'Salvar',
                            // Note that the main button is bigger than the secondary buttons
                            width: 150,
                            scope: this,
                            //action: 'save',
                            // 'handler' config captures whichever event that occurs.
                            handler: this.onSaveClick

                            }]
                    //}] // remove this
                    
      

        });
        this.callParent();
           
    },
    
    // You can create a 'Reset' buttom as quick way to easily clean
    // the form
    onResetClick: function(){
        this.getForm().reset();
    },
    
    // Whenever the 'Save' button is clicled and the form is correctlly
    // filled, the form values are going to be submitted. 
    onSaveClick: function(){
        // Get 'form' xtype (Ext.form.Panel)
        var form = this.getForm();
        // Testing for validation errors.
        if (form.isValid()) {
            Ext.MessageBox.alert('Submitted Values', form.getValues(true));
        }
    },
    
    // This a way to capture every 'change' event for every field in form,
    // you'll only have to:
    // 1. Set a 'targetFormFieldname' config for every field that is going
    // to monitored for changes. The 'targetFormFiledname' will contain the
    // name of the 'target' that will be affected when this particullar 
    // button change.
    // 2. The 'target' field will be changed only if the 'control' config 
    // ('billingSameAsMailing') tells that the change can be done, otherwise
    // nothing will be done. To quickly find this find the 'control' 
    // parameter use the syntax 
    // 'this.down('[name=billingSameAsMailing]').getValue()' . To find
    // the field that is going to be affected use the syntax
    // this.down('[name=' + field.billingFieldName + ']'); this will 
    //easilly get you to the 'setValue' and 'getValue' methods of the
    // fields.
    onMailingAddrFieldChange: function(field){
        var copyToBilling = this.down('[name=billingSameAsMailing]').getValue(),
            copyField = this.down('[name=' + field.billingFieldName + ']');

        if (copyToBilling) {
            copyField.setValue(field.getValue());
        } else {
            copyField.clearInvalid();
        }
    },
    
    /**
     * Enables or disables the billing address fields according to whether the checkbox is checked.
     * In addition to disabling the fields, they are animated to a low opacity so they don't take
     * up visual attention. The main 'control' is done by 'billingSameAsMailing'
       field. 
     */
    onSameAddressChange: function(box, checked){
        // Get the container for that field.    
        var fieldset = box.ownerCt;
        Ext.Array.forEach(fieldset.previousSibling().query('textfield'), this.onMailingAddrFieldChange, this);
        Ext.Array.forEach(fieldset.query('textfield'), function(field) {
            field.setDisabled(checked);
            // Animate the opacity on each field. Would be more efficient to wrap them in a container
            // and animate the opacity on just the single container element, but IE has a bug where
            // the alpha filter does not get applied on position:relative children.
            // This must only be applied when it is not IE6, as it has issues with opacity when cleartype
            // is enabled
            if (!Ext.isIE6) {
                field.el.animate({opacity: checked ? 0.3 : 1});
            }
        });
    }
});
