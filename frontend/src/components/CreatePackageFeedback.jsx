import { React, useEffect, useState } from 'react'
import { User } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const CreatePackageFeedback = (reviewTypes) => {
  
    const packagesTypes = ['silver','gold','platinum']
  
    return (
      <div>
        <form className='' action="" method="post">
          <div className=''>
            <input className='' type="text" name="full_name" id="full_name" />
            <label htmlFor="full_name">
              <User className='' />
            </label>
          </div>
          <div className=''>
            <input className='' type="text" name="user_email" id="user_email" />
            <label htmlFor="user_email">
              <FontAwesomeIcon className='' icon={faAt} />
            </label>
          </div>
          <div className=''>
            <label className='' htmlFor="review_package">Package</label>
            <select className='' name="review_package" id="review_package" onChange={''}>
              <option value="">Select Package ..</option>
              {
                packagesTypes.map((content, index) => (
                  <option key={index} value={content}>{content}</option>
                ))
              }
            </select>
          </div>
          <div className=''>
            {/* <label htmlFor=""></label> */}
            <select className='' name="review_type" id="review_type">
              <option value="">Choose Feedback Type ..</option>
                {
                  reviewTypes.map((content, index) => (
                    <option key={index} value={content}>{content}</option>
                  ))
                }
            </select>
          </div>
          <div className=''>rates</div>
          <div>
            <textarea className='' name="user_feedback" id="user_feedback"></textarea>
          </div>
          <div className='flex items-center '>
            <button className='' type="reset">Cancel</button>
            <button className='' type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
    
}
  

export default CreatePackageFeedback
