import React from "react";
import PropTypes from 'prop-types'

function ActivityItem ({activity}) {
    return (
      <div className="item">
        <div className="avatar">
          <img src={activity.user.avatar} alt="" />
          {/* {activity.user.name} */}
        </div>
        <div className="description">
          <span className="time">{activity.timestamp}</span>
          <p className="text">{activity.text}</p>
        </div>
        <div className="commentCount">{activity.comments.length} Comments</div>
      </div>
    );
}

ActivityItem.propTypes = {
  activity: PropTypes.object
}

export default ActivityItem
