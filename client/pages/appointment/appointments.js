/**
 * Created by piyushthapa on 3/4/15.
 */
Template.appointment.helpers({
    newAppointments:function(){
        return Appointment.find({isNew:true,accepted:false});
    },
    toLocalDate:function(){
        return new Date(this.date).toLocaleDateString();
    },
    upcomingAppointment:function(){
        return Appointment.find({isNew:false,accepted:true});
    }

});
Template.appointment.events({
   'click .accept':function(e,t){
       e.preventDefault();
       Meteor.call('acceptAppointment',this._id,function(err,res){
           if(!err){

           }
       });
   }
});
Template.displayAppointment.helpers({
    startClock:function(){


    }
});
Template.displayAppointment.rendered=function(){
    var dom=$('#'+this.data._id);
    var dte=(new Date(this.data.date).toLocaleDateString() +' '+ new Date(this.data.date).toLocaleTimeString())
    dom.flipcountdown({
        size: 'md',
          beforeDateTime: dte

    });

}

