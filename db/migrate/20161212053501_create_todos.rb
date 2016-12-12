class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.datetime :deadline
      t.boolean :done
      t.references :category, index: true, foreign_key: true

      t.timestamps
    end
  end
end
