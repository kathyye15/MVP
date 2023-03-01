import React, { useState, useEffect } from 'react';
import CustomInput from './CustomInput.jsx';

export default function Form({ content, edittable, onDismiss }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO send post request

    // close modal if dismissModal function is passed
    onDismiss?.();
  };

  const edittableForm = (
    <form>
      <div>
        Job Title: <CustomInput type="text" name="job_title" value={content?.job_title} />
      </div>
      <div>
        Job Posting: <CustomInput type="text" name="job_posting" value={content?.job_posting} />
      </div>
      <div>
        Notes: <CustomInput type="text" name="notes" value={content?.notes} />
      </div>
      <button type="button" onClick={handleSubmit}>submit</button>
    </form>
  );

  return edittableForm;
}