import React from 'react'
import { FormContext } from './forms-context'
import { IoIosLock,IoIosPerson } from 'react-icons/io'
export default function Login() {
  const {setResetPasswordFormVisible} = React.useContext(FormContext)
  const handleFormSubmit = e =>{
    e.preventDefault()
  }

  return (
   <>
    <form action="" className='login' onClick={handleFormSubmit}>

        <div className="input-group">
           <IoIosPerson className='form-icon' />
           <input type="text" name='username'  placeholder='Username or Email' />
        </div>

        <div className="input-group">
            <IoIosLock className='form-icon'/>
            <input type="password" placeholder='Password'/>
        </div>
        
        <button type="submit">Login</button>
    </form>
    <small onClick={()=>setResetPasswordFormVisible(true)}>Forgotten Password?</small>
   </>
  )
}
