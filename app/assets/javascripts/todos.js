$(document).on('ready page:load', function() {
    App.todoApp = new Vue({
        el: "#todoIndex",
        data: {
            todos: [],
            newTodoName: ''
        },
        created: function() {
            this.$http.get('/api/v1/todos').then(function(response) {
                for (var i = 0; i < response.body.length; i++) {
                    this.todos.push(response.body[i]);
                }
            }, function(response) {
                console.error('GET /todos.json failed. Check log file.');
            });
        },
        methods: {
            createTodo: function() {
                if (this.newTodoName === '') return;
                this.$http.post('/api/v1/todos', { name: this.newTodoName }).then(function(response) {
                    App.todo.addNewTodo(response);
                    this.newTodoName = '';
                }, function(response) {
                    console.error('POST /api/v1/todos failed. Check log file.');
                });
            },

            deleteTodo: function(index, id) {
                this.$http.delete('/api/v1/todos/' + id.toString()).then(function() {
                    App.todo.deleteTodo(index);
                }, function(response) {
                    console.error('DELETE /api/v1/todos/:id failed. Check log file.');
                });
            },

            insertTodo: function(data) {
                this.todos.push({ id: data.id, name: data.name, done: data.done });
            },

            removeTodo: function(data) {
                this.todos.filter(function(todo) {
                    console.log(this.todos);
                    // TODO: この指定の仕方どうにかならんかね
                    App.todoApp.todos.splice(data.index, 1);
                });
            }
        }
    });
});