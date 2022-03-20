import React from 'react'

function Contact() {
  return (
  <div id='contact'>
      <h1>BOOK YOUR TABLE</h1>
      <form>
          <input type="text" placeholder="ENTER YOUR  NAME" />  
          <input type="email" placeholder="ENTER YOUR E-mail" />
          <textarea placeholder="Enter your message"></textarea> 
          <input type="submit" value="book" />

      </form>
  </div>
  )
}

export default Contact