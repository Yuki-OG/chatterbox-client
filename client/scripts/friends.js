// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function(name) {
    Friends._data.push(name);
  },

  toggleStatus: function(name) {
    const index = _.indexOf(Friends._data, name);
    if (index > -1) {
      Friends._data.splice(index, 1);
    } else {
      Friends.add(name);
    }
  }

};