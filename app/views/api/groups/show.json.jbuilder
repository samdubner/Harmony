json.extract! @group, :id, :name, :owner_id

json.users do
    @group.users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username
        end
    end
end