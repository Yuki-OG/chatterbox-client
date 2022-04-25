// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // myMessage = {
    //   username: 'yuki',
    //   text: 'hi',
    //   room: 'testroom',
    //   id: '123'
    // };
    // myMessage1 = {
    //   username: 'asdf',
    //   text: 'hi',
    //   room: 'testroom',
    //   id: '123'
    // };
    // myMessage2 = {
    //   username: 'ds',
    //   text: 'hi',
    //   room: 'testroom',
    //   id: '123'
    // };
    // myMessage3 = {
    //   username: 'fd',
    //   text: 'hi',
    //   room: 'testroom',
    //   id: '123'
    // };
    // Messages.add(myMessage);
    // Messages.add(myMessage1);
    // Messages.add(myMessage2);
    // Messages.add(myMessage3);
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    Messages._data.forEach((message, index) => {
      MessagesView.renderMessage(message, index);
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    this.$chats.append(MessageView.render(message));
    let index = arguments[1] || 0;
    // I'm a mad man
    const username = $($('.chat')[index]).find('.username');

    username.on('click', this.handleClick);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.target.innerText);
  }

};