import React from "react";

import MessageItem from "../message_index/message_item";

class ColorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ``,
    };
    this.updateColor = this.updateColor.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({ color: this.props.users[this.props.currentUser].color });
  }

  updateColor(e) {
    this.setState({ color: e.target.value });
  }

  closeModal() {
    this.props.closeColorModal();
  }

  render() {
    return (
      <div className="color-modal-background">
        <div className="color-modal-body">
          <div className="message-example">
            <MessageItem
              author={this.props.users[this.props.currentUser]}
              content="Hello World!"
            />
            <MessageItem
              author={this.props.users[this.props.currentUser]}
              content="Wow, I'm looking good in chat today!"
            />
          </div>
          <div className="color-form">
            <div className="color-inputs">
              <div className="color-input-item">
                <p>Your Current Color:</p>
                <input
                  type="color"
                  value={this.props.users[this.props.currentUser].color}
                  disabled
                />
              </div>
              <div className="color-input-item">
                <p>New Color:</p>
                <input
                  type="color"
                  value={this.state.color}
                  onChange={this.updateColor}
                />
              </div>
            </div>
            <div className="color-submit">
              <div className="color-buttons" id="update-button">
                Update
              </div>
              <div
                className="color-buttons"
                id="close-button"
                onClick={this.closeModal}
              >
                Close
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorModal;
