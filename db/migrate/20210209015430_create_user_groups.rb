class CreateUserGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :user_groups do |t|
      t.integer :group_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :user_groups, :group_id
    add_index :user_groups, :user_id
  end
end
