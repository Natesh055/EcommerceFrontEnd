import { useState } from 'react'
import UserLogin from './UserFunctionalities/UserLogin'
import UserSignup from './PublicFunctionalities/UserSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserSignup/>
      <UserLogin/>
    </>
  )
}

export default App
