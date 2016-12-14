
$(document).on('ready page:load', function() {
        new Vue({
            el: "#todo_index",
            data: {
                items: []
            },
            created: function() {
                console.log('hoge');
                this.$http.get('/todos.json').then(function(response){
                    // success callback
                    console.log(response);
                }, function(response) {
                    console.log(response);
                    // error callback
                });
            }
        });
});