import React from "react";

class PersonalLinks extends React.Component {
  render() {
    return (
      <div className="personal-links">
        <a target="_blank" href="https://github.com/samdubner">
          <div className="link-name">Github</div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/samuel-dubner">
          <div className="link-name">LinkedIn</div>
        </a>
        <a target="_blank" href="https://angel.co/u/samuel-dubner">
          <div className="link-name">AngelList</div>
        </a>
      </div>
    );
  }
}

export default PersonalLinks;
