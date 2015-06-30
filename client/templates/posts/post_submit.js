Template.postSubmit.events({
  'submit form': function(e) {
   e.preventDefault();

    var post = {
      brand: $(e.target).find('[name=brand]').val(),
      model: $(e.target).find('[name=model]').val(),
      height: $(e.target).find('[name=height]').val(),
      width: $(e.target).find('[name=width]').val(),
      thickness: $(e.target).find('[name=thickness]').val(),
      boardType: $(e.target).find('[name=boardType]').val(),
      tailType: $(e.target).find('[name=tailType]').val(),
      finSetup: $(e.target).find('[name=finSetup]').val(),
      finSystem: $(e.target).find('[name=finSystem]').val(),
      price: $(e.target).find('[name=price]').val(),
      location: $(e.target).find('[name=location]').val(),
      email: $(e.target).find('[name=email]').val(),
      phone: $(e.target).find('[name=phone]').val()    
    };

    dropzone.processQueue();    

    Meteor.call('postInsert', post, function(error, result) {
        if (error)       
          return alert(error.reason);     
          Router.go('postPage', {_id: result._id});    
    });

    
  }
});


Template.imageUpload.onRendered(function(){

  var arrayOfImageIds = [];

  Dropzone.options.autoDiscover = false;

  dropzone = new Dropzone("form#dropzone", {
    autoDiscover: false,
    autoProcessQueue: false,

    success: function(file, done){

      Images.insert(file);

      if(dropzone.getQueuedFiles().length === 0){
        dropzone.removeAllFiles();
      }
    }
  });

});