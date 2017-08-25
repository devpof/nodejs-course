var getUser = (id, callback) => {
  var user =  {
    id: id,
    name: 'Peeeleeep'
  };

  setTimeout(() => {
    callback(user);
  },3000)
};

getUser(26, (user) => {
  console.log(user);
});

//API URL used in the weather app project.
//https://maps.googleapis.com/maps/api/geocode/json
