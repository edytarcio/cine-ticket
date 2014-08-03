Ext.define('CineTicket.view.movie.MovieEdit', {

    extend: 'Ext.window.Window',
    xtype : 'movie-edit',
    title : 'Editar Filme',
    iconCls: 'film',
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
                        name : 'title',
                        fieldLabel: 'Título'
                
                        },{

                        xtype: 'textfield',
                        name : 'director',
                        fieldLabel: 'Director'
               
                        },{

                        xtype: 'textfield',
                        name : 'duration',
                        fieldLabel: 'Duração'

                        },{

                        xtype: 'combobox',
                        fieldLabel: 'Gênero',
                        // stores can come from a store class, but you
                        // can easily define a store in form of json 
                        // with 'fields' and 'data' attrubutes 
                        name: 'gender',
                        //store: states,
                        store: {
                            fields: ['gender'],
                            data : [
                                {"gender":"Ação"},
                                {"gender":"Aventura"},
                                {"gender":"Ação/Aventura"},
                                {"drama":"Ação/Aventura"}
                                //...
                                ]},
                        queryMode: 'local',
                        displayField: 'gender',
                        valueField: 'gender',
                        editable: false

                        },{

                        xtype: 'combobox',
                        fieldLabel: 'Classificação',
                 
                        name: 'rate',
                        store: {
                            fields: ['rate'],
                            data : [
                                {"rate":"LIVRE"},
                                {"rate":"10 ANOS"},
                                {"rate":"12 ANOS"},  
                                {"rate":"14 ANOS"},
                                {"rate":"16 ANOS"},
                                {"rate":"18 ANOS"}                            
                                ]
                        },
                        queryMode: 'local',
                        displayField: 'rate',
                        valueField: 'rate',
                        editable: false

                        },{

                        xtype: 'combobox',
                        fieldLabel: 'Estúdio',
                        name: 'studio',
                        store: {
                            fields: ['studio'],
                            data : [
                                {"studio":"Fox"},
                                {"studio":"Paramount"},
                                {"studio":"Comlombia"},
                                {"studio":"Pixar"}
                                ]
                            },
                        queryMode: 'local',
                        displayField: 'studio',
                        valueField: 'studio',
                        editable: false

                        },{

                        xtype: 'textfield',
                        name : 'release',
                        fieldLabel: 'Lançamento'

                        }]
        }];

        this.buttons = [
        	// Here you can define buttons and actions.
            {
                text: 'Salvar',
                action: 'save',
                iconCls: 'save'
            },
            {
                text: 'Cancelar',
                iconCls: 'cancel',
                scope: this,
                // hadler can capture the flow of any event. Note
                // the method this.close is also available for the 
                // Window component.
                handler: this.close
            }
        ];
        // Call the Parent's initComponent method.
        this.callParent(arguments);
    }
});

