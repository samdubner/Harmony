class AddInviteToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite, :string
    change_column_null :servers, :invite, true
  end
end
