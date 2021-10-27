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
require 'test_helper'

class PrivateMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
