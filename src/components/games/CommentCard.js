import React from 'react'

function CommentCard({ comment }) {
  return (
    <div className="user-comment">
      <div className="user-details is-half">
        <div className="user-name">
          <img src={comment.owner.profileImage} />
          <h3>{comment.owner.username}</h3>
        </div>
        <textarea className="comment-text">{comment.text}</textarea>
      </div>
    </div>
  )
}

export default CommentCard