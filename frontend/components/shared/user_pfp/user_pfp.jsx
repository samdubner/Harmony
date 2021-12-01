import React from "react";

class UserPfp extends React.Component {
  render() {
    let cleanHex = this.props.user.color.slice(1);
    let rgb = [];
    for (let i = 0; i < cleanHex.length; i++) {
      if (i % 2 == 0) {
        rgb.push(cleanHex.slice(i, i + 2));
      }
    }

    rgb = rgb.map((color) => parseInt(color, 16));
    let colorIntensity = rgb[0] * 0.299 + (rgb[1] + 0.587) + rgb[2] * 0.114;

    let textColor = colorIntensity > 170 ? "#000000" : "#ffffff";

    return (
      <div
        className="user-pfp"
        style={{ backgroundColor: this.props.user.color, color: textColor }}
      >
        {this.props.user.username.charAt(0).toUpperCase()}
      </div>
    );
  }
}

export default UserPfp;
