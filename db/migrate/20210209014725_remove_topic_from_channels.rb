class RemoveTopicFromChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :topic
  end
end
