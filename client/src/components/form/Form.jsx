import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomInput from './CustomInput.jsx';

export default function Form({ content, onDismiss, setRows, rows, button, id}) {
  const handleSubmit = (e, button) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    if (button === 'Submit') {
      axios.post('/applications', data)
        .then(() => axios.get('/applications'))
        .then((res) => setRows([...res.data]))
        .catch((err) => console.log(err))
    } else if (button === 'Update') {
        axios.put(`/applications/${id}`, data)
          .then(() => axios.get('/applications'))
          .then((response) => {
            setRows([...response.data])
          })
          .catch((err) => console.log(err))
    }
    // close modal if dismissModal function is passed
    onDismiss?.();
  };

  const edittableForm = (
    <div className="container">
    <form onSubmit={(e)=> {handleSubmit(e, button)}}>
      <label>
        <b>
       * Company Name: <CustomInput type="text" name="name" value={content?.name} />
        </b>
      </label>
      <label>
        <b>
       * Job Title: <CustomInput type="text" name="job_title" value={content?.job_title} />
        </b>
      </label>
      <label>
        <b>
       * Job Posting: <CustomInput type="text" name="job_posting" value={content?.job_posting} />
        </b>
      </label>
      <label>
        <b>
        * Status:
        </b> 
      </label>
        <select name="status">
          <option>interested</option>
          <option>applied</option>
          <option>interview</option>
          <option>on-site</option>
          <option>offered</option>
          <option>rejected</option>
        </select>
      <label>
        <b>
        Notes: <CustomInput type="text" name="notes" value={content?.notes} />
        </b>
      </label>
      <button type="submit">{button}</button>
    </form>
    </div>
  );

  return edittableForm;
}