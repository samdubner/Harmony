json.extract! @server, :id, :name, :owner_id, :invite

json.users do
    @server.users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username, :color
        end
    end
end