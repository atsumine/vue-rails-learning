App.todo = App.cable.subscriptions.create("TodoChannel", {
  connected: function() {
  },

  disconnected: function() {
  },

  received: function(data) {
      App.todoApp.insertTodo(data.todo);
  },

    // vue-resourceのresponseを引数に取る
    addNewTodo: function(response) {
        return this.perform('addNewTodo', { id: response.body.id, name: response.body.name, done: response.body.done });
    },

    deleteTodo: function(id) {
        return this.perform('deleteTodo', { data: id });
    }
});
