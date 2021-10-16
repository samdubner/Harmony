class ChangeChannelIdType < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :channel_id, 'integer USING CAST(channel_id AS integer)'
  end
end
