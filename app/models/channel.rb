# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  topic      :string
#
class Channel < ApplicationRecord
    validates :name, :server_id, presence: true
    validates :name, uniqueness: { scope: :server_id }

    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server

    has_many :messages,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Message
end
