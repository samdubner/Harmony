json.array! @private_messages do |message|
    json.partial! "private_message", private_message: message
end