
$(document).on('ready page:load', function() {
        var app = new Vue({
            el: "#todo_index",
            data: {
                todos: []
            },
            created: function() {
                this.$http.get('/todos.json').then(function(response, status, request){
                    for(var i = 0; i < response.body.length; i++){
                        this.todos.push(response.body[i]);
                    }
                }, function(response) {
                    console.error('GET /todos.json failed. Check log file.');
                });
            },
            methods: {
                addTodo: function (event){
                    console.log('addTodo successfully called!!');
                    if (this.input === '') {
                        console.log('empty input.');
                        return;
                    }
                    this.todos.push({name: this.input, deadline: Date.now(), done: false});
                    this.input = '';
                    console.log('todo added successfully!!');
                    return;
                }
            }
        });
});
