json.extract! todo, :id, :name, :deadline, :done, :created_at, :updated_at
json.url todo_url(todo, format: :json)