class AddInviteToServer < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite, :string
  end
end
