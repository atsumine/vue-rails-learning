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
                    console.log(response);
                    App.todo.addNewTodo(response);
                    this.newTodoName = '';
                }, function(response) {
                    console.error('POST /api/v1/todos failed. Check log file.');
                });
            },

            deleteTodo: function(index, id) {
                this.$http.delete('/api/v1/todos/' + id.toString()).then(function() {
                    this.todos.splice(index, 1);
                    // removeTodo(index);
                }, function(response) {
                    console.error('DELETE /api/v1/todos/:id failed. Check log file.');
                });
            },
            updateTodo: function(index, id) {
                this.$http.put('/api/v1/todos/' + id.toString()).then(function(response) {
                })
            }, insertTodo: function(data) {
                console.log(data);
                this.todos.push({ id: data.id, name: data.name, done: data.done });
            }, removeTodo: function(index) {
                this.todos.splice(index, 1);
            }
        }
    });
});