# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :integer
#
class Message < ApplicationRecord
    validates :content, :owner_id, :channel_id presence: true

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel
end
