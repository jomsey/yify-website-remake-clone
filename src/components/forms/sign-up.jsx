import React from 'react'
import { IoIosMail, IoIosPerson ,IoIosLock} from 'react-icons/io'

function Register() {
  const handleFormSubmit = e =>{
        e.preventDefault()
  }
  return (
    <form onSubmit={handleFormSubmit}>
        <div className="input-group">
             <IoIosPerson className='form-icon'/>
             <input type="text" name='username'  placeholder='Username or Email' />
        </div>

        <div className="input-group">
            <IoIosMail className='form-icon'/>
            <input type="email" name='email'  placeholder='E-mail (no confirm required)' />
        </div>

        <div className="input-group">
            <IoIosLock className='form-icon'/>
            <input type="password" placeholder='Password'/>
        </div>

        <div className="input-group">
            <IoIosLock className='form-icon'/>
            <input type="password" placeholder='Confirm Password'/>
        </div>

        <small>By clicking Register, you agree to our Terms and Conditions</small>
        
        <button type="submit">Register</button>
    </form>
  )
}

export default Register