/**
 * Created by piyushthapa on 3/4/15.
 */
Router.configure({
   layoutTemplate:'layout'
});
Router.route('/',function(){
   this.render('main');
});
Router.route('/single/:_id',function(){
    this.render('singleServices',{
       data:function(){
           return Services.findOne({_id:this.params._id});
       }
    });
},{name:'service.single'});
Router.route('/appointment',function(){
   this.render('appointment');
});