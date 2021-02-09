class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :content, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :messages, :owner_id
  end
end
