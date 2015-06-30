Template.postPage.helpers({ 
fullpost: function() {   
   return Fullpost.find({postId: this._id}); 
   }
   });