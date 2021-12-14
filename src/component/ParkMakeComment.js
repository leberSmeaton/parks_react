import React from 'react'

export default function ParkMakeComment() {
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>Comment:
          <textarea>Write Comment Here...</textarea>
        </label>
        <br />
        <label>Upload images:
          <input type="file"></input>
        </label>
        <br />
        <button type="submit" className="primary">
          Sign In
        </button>
      </form>
    </>
  )
}
