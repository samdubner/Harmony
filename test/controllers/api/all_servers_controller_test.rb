require 'test_helper'

class Api::AllServersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_all_servers_index_url
    assert_response :success
  end

end
