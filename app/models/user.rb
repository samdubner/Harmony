# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  color           :string
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    before_create :randomize_color

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64

        self.save!

        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def randomize_color
        self.color = "#" + SecureRandom.hex(3)
    end

    has_many :outbound_requests,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :FriendRequest

    has_many :incoming_requests,
        primary_key: :id,
        foreign_key: :recipient_id,
        class_name: :FriendRequest

    has_many :friendships,
        primary_key: :id,
        foreign_key: :primary_id,
        class_name: :Friendship

    has_many :friends,
        through: :friendships,
        source: :secondary_friend

    # has_many :secondary_friendships,
    #     primary_key: :id,
    #     foreign_key: :secondary_id,
    #     class_name: :Friendship

    # has_many :secondary_friends,
    #     through: :secondary_friendships,
    #     source: :secondary_friend

    has_many :user_servers,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :UserServer

    has_many :owned_servers,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Server

    has_many :joined_servers,
        through: :user_servers,
        source: :server

    has_many :user_groups,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :UserGroup

    has_many :owned_groups,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Group

    has_many :joined_groups,
        through: :user_groups,
        source: :group
end
