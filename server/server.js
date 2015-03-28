Meteor.startup(function() {
   if(Meteor.users.find().count() < 1) {
       var users = [
           {name: 'Admin', roles: ['admin']}
       ];
       _.each(users, function(userData) {
           var userId = Accounts.createUser({
               password: 'test1',
               username: userData.name
           });
           //Meteor.users.update({_id: userId}, {$set:{'emails.0.verified': true}});
           // Roles.addUsersToRoles(userId, userData.roles);
       })
   }
});
