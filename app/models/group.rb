# == Schema Information
#
# Table name: groups
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Group < ApplicationRecord
    validates :name, :owner_id, presence: true

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :user_groups,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :UserGroup

    has_many :users,
        through: :user_groups,
        source: :user

    has_many :messages,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :PrivateMessage
end
