# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :string
#
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
