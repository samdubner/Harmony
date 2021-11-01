import React from "react"

class RequestItem extends React.Component {
    render() {
        return (
          <div className="request-item">
            <div className="request-info">
              <div className="friend-pfp" />
              <p className="request-name">IsoVoyd</p>
            </div>
            <div className="request-options">
              <div className="accept-request">
                <i className="fas fa-check"></i>
              </div>
              <div className="deny-request">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        );
    }
}

export default RequestItem;