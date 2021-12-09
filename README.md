# Harmony
[Live Site](https://harmonyclone.herokuapp.com)

![Image of Harmony's home page](https://i.imgur.com/CaaKuzn.png)

Harmony is a full-stack Discord clone using Ruby on Rails, postgreSQL, React, and Redux to allow users to send messages in specific channels within larger public servers or privately to other users via private groups.

## Features

### Servers
* Servers contain channels, with the ability for the server owner to add/delete channels as they please
* Users in a server can get an invite code unique to each Server which can be used to invite other users
* Invite codes are generated on server creation and check to ensure a similar code does not already exist
* Model component is reused for creating channels, getting invite, creating servers, and joining servers

![Example of a Harmony server page](https://i.imgur.com/qxscVRW.png)

```js
//server_index.js (example of reused modal component)

switch (this.props.modalState) {
  case "closed":
    modal = null;
    break;
  case "prompt":
    modal = <PromptServerModal closeModal={this.props.closeModal} />;
    break;
  case "join":
    modal = <JoinServerModal closeModal={this.props.closeModal} />;
    break;
  case "create":
    modal = <CreateServerModal closeModal={this.props.closeModal} />;
    break;
  case "invite":
    modal = (
      <InviteServerModal
        closeModal={this.props.closeModal}
        invite={this.props.invite}
      />
    );
    break;
  case "createChannel":
    modal = <CreateChannelModal closeModal={this.props.closeModal} />;
    break;
  default:
    modal = null;
}
```

### Channels / Group Chats
* Uses WebSockets to provide real time chat between multiple clients in the same channel or group!
* Easily identify other users in chat based off the custom color which can be changed at any time
* Delete your own messages in case you've made a typo or other mistake
* Create Group Chats at any time and invite any of your friends

![Example of a Harmony group page](https://i.imgur.com/bjcwIIk.png)

```js
//message_index.js

createConsumer() {
    this.cable = ActionCable.createConsumer(
      `wss://${window.location.host}/cable`
    );
    this.channel = this.cable.subscriptions.create(
      {
        channel: this.props.channel,
        channel_id: `${this.props.currentChannel}`,
      },
      {
        connected: () => {},
        received: (data) => {
          this.props.receiveMessage(data.message);
        },
        sendMessage: function (userId, channelId, messageContent) {
          this.perform("sendMessage", {
            user_id: userId,
            content: messageContent,
            channel_id: channelId,
          });
        },
      }
    );
  }

  sendMessage(messageContent) {
    this.channel.sendMessage(
      this.props.currentUser,
      this.props.currentChannel,
      messageContent
    );
  }
```

### Friends
* Easily send friend requests to any user in a channel or group that you aren't already friends with
* See a given user's profile picture and name before accepting / denying request
* Can easily and privately deny any received friend requests

![Example of the Demo user's friend page on Harmony](https://i.imgur.com/hgN3d61.png)

### Server Discovery
* View all of Harmony's servers that you haven't joined yet
* Have the ability to join individual servers with just the click of a button
* Filter servers using the search box at the top of the page 

![Example of Harmony's Server Discovery Page](https://i.imgur.com/5q24EN4.png)

## Technologies Used

Harmony used the following technologies to accomplish these features:
* `Ruby on Rails` for structuring and handling requests to the backend
* `React` for rendering frontend components
* `React Router` for routing on the frontend
* `Redux` to help manage state in the frontend
* `PostgreSQL` for the database
* `BCrypt` for encyrpting passwords
* `Action Cable` for WebSockets to allow real-time chat
* `JBuilder` for formatting JSON responses in the backend for the frontend to receive

### Future Implementations
* Websocket channel to allow for real-time leaving/joining servers and groups
* User roles to allow for administrators in a server


