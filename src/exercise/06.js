// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(event) {
    event.preventDefault()
    // console.dir(event.target)
    const value1 = event.target.elements.fullnameInput.value
    const value2 = event.target.elements.usernameInput.value
    onSubmitUsername(value1)
    onSubmitUsername(value2)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fullnameInput'>Full Name:</label>
        <input id="fullnameInput" type="text" />
        <label htmlFor='usernameInput'>Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
