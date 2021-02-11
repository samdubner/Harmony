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
    validaites :name, uniqueness: { scope: :server_id }
end
