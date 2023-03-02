import React, { useState, useEffect } from 'react';
import ListItem from './ListItem.jsx';

export default function List({ rows }) {
  return (
    <ul className="applicaion-list">
      {rows.map((ele, i) => <ListItem item={ele} key={ele.id} index={i} />)}
    </ul>
  );
}