Images = new FS.Collection("myImages", {
  stores: [new FS.Store.FileSystem("myImages", {path: "~/uploads"})]
});

Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function(postAttributes) {
       
        check(postAttributes, {
            brand: String,
            model: String,
            height: String,
            width: String,
            thickness: String,
            boardType: String,
            tailType: String,
            finSetup: String,
            finSystem: String,
            price: String,
            location: String,
            email: String,
            phone: String
            
        });
        var post = _.extend(postAttributes, {
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
        
    }
});

