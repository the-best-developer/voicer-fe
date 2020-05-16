import React from 'react'

const PostAJob = ({setDropDown}) => {
  return (
    <button
      className="menu-item post-job-text"
      onClick={() => {
        setDropDown(false)
        //set a display to true to show the form
      }}
    >
      Post a job
    </button>
  )
}

export default PostAJob