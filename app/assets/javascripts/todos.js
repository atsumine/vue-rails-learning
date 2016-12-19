

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

$(document).on('ready page:load', function() {
        var app = new Vue({
            el: "#todo_index",
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
                    console.log('addTodo successfully called!!');
                    if (this.input === '') {
                        console.log('empty input.');
                        return;
                    }
                    this.todos.push({name: this.input, deadline: Date.now().toMysqlFormat, done: false});
                    console.log(Date.now().toMysqlFormat());
                    this.input = '';
                    console.log('todo added successfully!!');
                },

                deleteTodo: function (index) {
                    console.log(index);
                    this.todos.splice(index, 1);
                    console.log('deleteTodo done.');
                }
            }
        });
});
