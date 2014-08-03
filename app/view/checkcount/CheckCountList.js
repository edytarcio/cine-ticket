Ext.define('CineTicket.view.checkcount.CheckCountList',{
	extend: 'Ext.grid.Panel',

	xtype: 'check-count-list',
	width: 800,
	height: 300,	
	title: 'Lista de Bilheterias',
	store: 'CheckCountStore',
	columns: [
		{header: 'Descrição Bilheteria', dataIndex: 'description', width: 300},
		{header: 'Endereço IP', dataIndex: 'ipAddress', width: 200},
		{header: 'Status', dataIndex: 'status', width: 200},
		{header: 'Operador', dataIndex: 'operadorName', flex: 1}  // data from another table 

	],
	dockedItems: [
		// must create a CRUD toolbar Store
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{	
					text: 'Adicionar',
				 	iconCls: 'create'
				 },
				{	
					text: 'Editar',
					iconCls: 'modify'
				},
				{	
					text: 'Remover',
					iconCls: 'delete'
				}
			]
		}
	]



});