/**
 * Created by piyushthapa on 3/4/15.
 */
Template.loadServices.events({
   'click .layout-list':function(e,t){
       e.preventDefault();
       var type = $(e.target).data('type');

       if ( type === "list" ) {
           $('body').removeClass('grid');
       } else if ( type === "grid" ) {
           $('body').addClass('grid');
       }
   },
    'click .view-services':function(e,t){
        e.preventDefault();
        Router.go('service.single',{_id:this._id});
    }
});
Template.loadServices.helpers({
    services:function(){
        return Services.find();
    }
});