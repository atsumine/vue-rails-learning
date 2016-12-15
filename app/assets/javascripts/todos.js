
$(document).on('ready page:load', function() {
        new Vue({
            el: "#todo_index",
            data: {
                todos: []
            },
            created: function() {
                this.$http.get('/todos.json').then(function(response, status, request){
                    for(var i = 0; i < response.body.length; i++){
                        console.log(response.body[i]);
                        this.todos.push(response.body[i]);
                    }
                }, function(response) {
                    console.error('request failed.');
                });
            }
        });
});
