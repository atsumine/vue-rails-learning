App.todo = App.cable.subscriptions.create("TodoChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
  },

    addNewTodo: function(data) {
        return this.perform('addNewTodo', {
            data: data
        });
    }
});
