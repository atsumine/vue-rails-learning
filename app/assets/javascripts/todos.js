$(document).on('ready page:load', function() {
        var todoApp = new Vue({
            el: "#todoIndex",
            data: {
                todos: []
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
                    if (this.input === '') return;
                    this.todos.push({name: this.input, deadline: Date.now(), done: false});
                    this.input = '';
                },

                deleteTodo: function (index) {
                    this.todos.splice(index, 1);
                }
            }
        });
});
