
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require materialize
//= require turbolinks
//= require vue
//= require vue-resource
//= require action_cable
//= require_self
//= require_tree

(function() {
    this.App || (this.App = {});

    App.cable = ActionCable.createConsumer();
}).call(this);