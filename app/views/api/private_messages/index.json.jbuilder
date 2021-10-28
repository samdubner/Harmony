json.array! @private_messages do |message|
    json.partial! "message", message: message
end