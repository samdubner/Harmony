# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  sender_id    :integer          not null
#  recipient_id :integer          not null
#

class FriendRequest < ApplicationRecord
    validates :sender_id, :recipient_id, presence: true

    belongs_to :sender,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :recipient,
        primary_key: :id,
        foreign_key: :recipient_id,
        class_name: :User
end
