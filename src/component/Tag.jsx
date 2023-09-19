import React from 'react';

function Tag({ items }) {
  return (
    <div className="tag-box">
      {items.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Tag;
