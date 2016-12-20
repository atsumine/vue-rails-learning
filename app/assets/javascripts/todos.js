$(document).on('ready page:load', function() {
    var todoApp = new Vue({
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
                console.error(response);
                console.error('GET /todos.json failed. Check log file.');
            });
        },
        methods: {
            addTodo: function(event) {
                if (this.newTodoName === '') return;
                this.$http.post('/api/v1/todos', { name: this.newTodoName }).then(function() {
                    this.todos.push({ name: this.newTodoName });
                    this.newTodoName = '';
                }, function(response) {
                    console.error(response);
                    console.error('POST /api/v1/todos failed. Check log file.');
                });
            },

            deleteTodo: function(index, id) {
                this.$http.delete('/api/v1/todos/:id', { id: id }).then(function() {
                    this.todos.splice(index, 1);
                }, function(response) {
                    console.error(response);
                    console.error('DELETE /api/v1/todos/:id failed. Check log file.');
                });
            }
        }
    });
});