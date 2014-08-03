Ext.define('CineTicket.view.Logo', {
    extend: 'Ext.image',
    alias: 'widget.logo',
    //title: 'Cinemas Teresina',
  
    initComponent: function() {
        console.log('Inside Views initComponents');
        //bodyCls: 'logo-cinemathe',
        this.src = 'http://www.sencha.com/img/20110215-feat-html5.png';
        
        this.callParent(arguments); 
    }
});
