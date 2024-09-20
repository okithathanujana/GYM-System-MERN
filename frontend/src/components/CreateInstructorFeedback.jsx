import { React, useEffect, useState } from 'react'
import { instructors } from '../temp/data'

const CreateInstructorFeedback = (reviewTypes) => {
  
  const [instructor, setInstructor] = useState('')
  const [reviewType, setReviewType] = useState('')

  const instructorList = instructors 

  const ChooseInstructor = (event) => {
    setInstructor(event.target.value)
  }

  const ChooseType = (event) => {
    setReviewType(event.target.value)
  }

  return (
    <div>
      <form action="" method="post">
        <div>
          <input type="text" name="full_name" id="full_name" />
          <label htmlFor="full_name"></label>
        </div>
        <div>
          <input type="text" name="user_email" id="user_email" />
          <label htmlFor="user_email"></label>
        </div>
        <div>
        <label htmlFor="review_instructor">Instructor</label>
          <select name="review_instructor" id="review_instructor" onChange={ChooseInstructor}>
            <option value="">Select Instructor ..</option>
              {
                instructorList.map((content, index) => (
                  <option key={index} value={content}>{content}</option>
                ))
              }
          </select>
        </div>
        <div>
          {/* <label htmlFor=""></label> */}
          <select name="review_type" id="review_type" onChange={ChooseType}>
            <option value="">Choose Feedback Type ..</option>
            {
              reviewTypes.map((content, index) => (
                <option key={index} value={content}>{content}</option>
              ))
            }
          </select>
        </div>
        <div>rates</div>
        <div>
          <textarea name="user_feedback" id="user_feedback"></textarea>
        </div>
        <div>
          <button type="reset">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

}



export default CreateInstructorFeedback