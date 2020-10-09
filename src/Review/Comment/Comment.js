import React from 'react';

export default function Comment (props) {
  const { comment_body, timestamp } = props.comment;
  return (
    <div>
      <p>{comment_body}</p>
      <h6>posted at: {timestamp} </h6>
    </div>
  );
}