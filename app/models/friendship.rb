# == Schema Information
#
# Table name: friendships
#
#  id           :bigint           not null, primary key
#  primary_id   :integer          not null
#  secondary_id :integer          not null
#
class Friendship < ApplicationRecord
    validates :primary_id, :secondary_id, presence: true

    belongs_to :primary_friend,
        primary_key: :id,
        foreign_key: :primary_id,
        class_name: :User

    belongs_to :secondary_friend,
        primary_key: :id,
        foreign_key: :secondary_id,
        class_name: :User
end
