import React from "react";

class ColorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ``,
    };
    this.updateColor = this.updateColor.bind(this);
  }

  componentDidMount() {
    this.setState({ color: this.props.users[this.props.currentUser].color });
  }

  updateColor(e) {
    this.setState({color: e.target.value})
  }

  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div className="message-example"></div>
          <div className="color-inputs">
            <input
              type="color"
              value={this.props.users[this.props.currentUser].color}
              disabled
            />
            <input
              type="color"
              value={this.state.color}
              onChange={this.updateColor}
            />
            <div className="color-buttons" id="update-button">Update</div>
            <div className="color-buttons" id="close-button">Close</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorModal;
