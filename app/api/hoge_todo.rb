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

      route_param :id do
        desc 'Return a todo'
        get do
          Todo.find_by(id: params[:id], status: true)
        end
      end

      desc 'create todo'
      params do
        requires :todo, type: String, desc: 'todo name'
        requires :deadline, type: Date, desc: 'deadline date'
        requires :category_id, type: Integer, desc: 'category id'
      end
      post do
        Todo.create(todo: params[:todo], deadline: params[:deadline], category_id: params[:category_id])
      end

      desc 'delete todo'
      params do
        requires :id, type: Integer, desc: 'todo id'
      end
      delete do
        Todo.find(params[:id]).destroy
      end
    end
  end
end