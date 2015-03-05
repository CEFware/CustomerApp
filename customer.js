
if(Meteor.isClient){
    merchant = DDP.connect('http://merchant.meteor.com/');
    Services=new Mongo.Collection('services',merchant);
    Appointment=new Mongo.Collection('appointment',merchant);

    Meteor.startup(function(){
        Accounts.ui.config({
            requestPermissions: {},
            extraSignupFields: [{
                fieldName: 'Name',
                fieldLabel: 'Name',
                inputType: 'text',
                visible: true,
                saveToProfile: true
            }, {
                fieldName: 'terms',
                fieldLabel: 'I accept the terms and conditions',
                inputType: 'checkbox',
                visible: true,
                saveToProfile: false
            }]
        });

    });

   Tracker.autorun(function(){
       merchant.subscribe('services',function(){
           console.log(Services.find().fetch());

       });
       merchant.subscribe('customerAppointment',Meteor.userId());
       console.log(merchant.status());
   });

}