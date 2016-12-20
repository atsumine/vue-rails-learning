module HogeTodo
  class API < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api

    resources :todos do
      desc 'Return all todos.'
      get  do
        Todo.all
      end

      desc 'create todo'
      params do
        requires :name, type: String, desc: 'todo name'
      end
      post do
        Todo.create(name: params[:name], done: false)
      end

      desc 'delete todo'
      params do
        requires :id, type: Integer, desc: 'todo id'
      end
      delete ':id' do
        Todo.find(params[:id]).destroy
      end
    end
  end
end