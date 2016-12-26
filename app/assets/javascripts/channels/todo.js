App.todo = App.cable.subscriptions.create("TodoChannel", {
  connected: function() {
  },

  disconnected: function() {
  },

  received: function(data) {
      switch(data.method) {
          case 'add':
              App.todoApp.insertTodo(data.todo);
              console.log('addTodo called');
              break;
          case 'delete':
              console.log(data);
              App.todoApp.removeTodo(data.todo);
              break;
      }
  },

    // vue-resourceのresponseを引数に取る
    addNewTodo: function(response) {
        return this.perform('addNewTodo', { id: response.body.id, name: response.body.name, done: response.body.done });
    },

    deleteTodo: function(index) {
        return this.perform('deleteTodo', { index: index });
    }
});
