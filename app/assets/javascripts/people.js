window.onload = function() {
  var app = new Vue({
    el: '#app',
    data: {
      items: []
    },
    created: function() {
      this.$http.get('/people.json').then(function(response) {
        // success
        for (var i = 0; i < response.body.length; i++) {
          this.items.push(response.body[i]);
        }
      }, function() { });
    }
  });
}
