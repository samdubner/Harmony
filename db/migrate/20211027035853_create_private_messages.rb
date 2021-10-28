class CreatePrivateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :private_messages do |t|
      t.text :content, null: false
      t.integer :owner_id, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
    add_index :private_messages, :owner_id
    add_index :private_messages, :group_id
  end
end
