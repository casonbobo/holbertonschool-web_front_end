var user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  AstrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Ialva",
  location: "Telaviv",
  occupation: "Engineer",
  logWelcomeUser: function(welcomeString) {
    console.log(welcomeString + user.firstName + ". Your occupation is: " + user.occupation);
  }
}

var bindLogWelcomeUser = user.logWelcomeUser.bind("Welcome ");

bindLogWelcomeUser('Hello');
