# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class TodoChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'todo_channel'
  end

  def unsubscribed
  end

  def addNewTodo(data)
    ActionCable.server.broadcast 'todo_channel', todo: data
  end

  def deleteTodo(data)
    ActionCable.server.broadcast 'todo_channel', todo: data
  end
end
