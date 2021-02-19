class RemoveInvites < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :invite
  end
end
