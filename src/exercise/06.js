// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error,setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    // console.dir(event.target)
    const value1 = event.target.elements.fullnameInput.value
    onSubmitUsername(value1)
  }

function handleChange(event){
  const {value} = event.target
  const isLowerCase = value === value.toLowerCase()
  setError(isLowerCase ? null : "can't start with capitalize")
}
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fullnameInput'>Full Name:</label>
        <input id="fullnameInput" type="text" onChange={handleChange} />
      </div>
      <div style={{color:'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
