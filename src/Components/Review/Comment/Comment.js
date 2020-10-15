import React from 'react';

export default function Comment (props) {
  const { comment } = props;
  return (
    <div>
      <h6>{comment.nickname}</h6>
      <p>{comment.body}</p>
      <h6>posted at: {comment.posted_on} </h6>
    </div>
  );
}