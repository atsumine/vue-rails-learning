# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  demo = new Vue(
    el: "#demo"
    data:
      firstName: "太郎"
      lastName: "山田"
      message: "hoge"
    methods:
      execute: ->
        @message = "実行しました"
  )
