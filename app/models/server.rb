# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
    validates :name, :owner_id, presence: true

    before_create :create_invite

    def create_invite
        begin
            self[:invite] = SecureRandom.urlsafe_base64 6
        end while Server.exists?(:invite => self[:invite])
    end

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :user_servers,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :UserServer

    has_many :users,
        through: :user_servers,
        source: :user
end
