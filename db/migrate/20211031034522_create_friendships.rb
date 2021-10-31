class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :primary_id, null: false
      t.integer :secondary_id, null: false
    end
    add_index :friendships, :primary_id
    add_index :friendships, :secondary_id
  end
end
