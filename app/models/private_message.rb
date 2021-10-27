# == Schema Information
#
# Table name: private_messages
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  owner_id   :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PrivateMessage < ApplicationRecord
    validates :content, :owner_id, :group_id, presence: true

    belongs_to :group_id
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Group
end
