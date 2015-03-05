/**
 * Created by piyushthapa on 3/4/15.
 */
Template.singleServices.rendered=function(){
    $('#dateTime').datetimepicker();
};
Template.singleServices.events({
   'submit #appointmentForm':function(e,t){
       e.preventDefault();
        var appointment={
            by:Meteor.userId(),
            to: t.data.postedBy,
            messege: t.find('#messege').value,
            date: (new Date(t.find('#dateTime').value).toUTCString())
        };
        merchant.call('insertAppointment',appointment,function(err,res){
            if(!err){
                alert('inserted')
            }
        });
   }
});

