# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on('ready page:load', ->
  if $("#index")[0]
    new Vue(
      el: "#index"
      created: ->
        @$http.get('/people.json').then((responce) ->
          i = 0
          while i < response.body.length
            @items.push response.body[i]
            i++
          return
        ) ->
          # error
          return
        return
    )
)
