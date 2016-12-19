$(document).on('ready page:load', function() {
        var todoApp = new Vue({
            el: "#todoIndex",
            data: {
                todos: [],
                newTodoName: ''
            },
            created: function() {
                this.$http.get('/todos.json').then(function(response){
                    for(var i = 0; i < response.body.length; i++){
                        this.todos.push(response.body[i]);
                    }
                }, function(response) {
                    console.error('GET /todos.json failed. Check log file.');
                });
            },
            methods: {
                addTodo: function (event){
                    if (this.newTodoName === '') return;
                    this.todos.push({name: this.newTodoName, deadline: Date.now(), done: false});
                    this.newTodoName = '';
                },

                deleteTodo: function (index) {
                    this.todos.splice(index, 1);
                }
            }
        });
});
