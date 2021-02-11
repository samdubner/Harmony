# == Schema Information
#
# Table name: user_groups
#
#  id         :bigint           not null, primary key
#  group_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserGroup < ApplicationRecord
    validates :group_id, :user_id, presence: true
end
