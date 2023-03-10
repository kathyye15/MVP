import React, { useState, useEffect } from 'react';
import ListItem from './ListItem.jsx';

export default function List({ rows }) {
  return (
    <ul className="application-list">
      <li className="col-header-container" style={{display: 'flex'}}>
        <div style={{display: 'flex', gap: '0.5rem'}}>
          <div className="col-header">App #</div>
          <div className="col-header">Name</div>
          <div className="col-header">Role</div>
          <div className="col-header">Status</div>
          <button className="hidden col-header edit" ><i className="fa-solid fa-pen-to-square" /></button>
          <button className="hidden col-header delete"><i className="fa-regular fa-trash-can"/></button>
        </div>
      </li>
      {rows.map((ele, i) => <ListItem item={ele} key={ele.id} index={i} pgID={ele.id}/>)}
    </ul>
  );
}