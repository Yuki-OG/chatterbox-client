// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // populate messages data
      Messages._data = [];
      data.forEach(message => {
        Messages.add({
          username: message.username,
          text: message.text,
          room: message.roomname
        });
        Rooms.add(message.roomname);
      });
      // console.log(Messages._data);
      // console.log(Rooms._data);
      // populate rooms data

      // var thing = $('#chats').get();
      // console.log(thing);
      // render messages
      MessagesView.render();
      RoomsView.render();
      // render rooms
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
