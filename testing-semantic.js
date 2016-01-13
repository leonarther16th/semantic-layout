if (Meteor.isClient) {

  $('.card')
      .hide();


  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.cards.onRendered(function() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });


    $('.card')
      .transition({
        animation : 'pulse',
        duration  : 1000,
        interval  : 200
      })


  });

  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


