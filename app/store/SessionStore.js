Ext.define('CineTicket.store.SessionStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
   
    // Theres no need to require model in Controller or View
    model: 'CineTicket.model.Session',

    proxy: {
          // the communication is via 'Ajax request using http methods'
          type: 'ajax',
          api: {
              read: 'data/json/sessions.json'
              },
          actionMethods: {
              read: 'POST'
              },
          reader: {
              type: 'json',
              root: 'data',
              successProperty: 'success'
              }
          }

});