# == Schema Information
#
# Table name: servers
#
#  id       :bigint           not null, primary key
#  name     :string           not null
#  owner_id :integer          not null
#  invite   :string           not null
#
require 'test_helper'

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
