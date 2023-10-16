import React from "react"
import { FormContext } from './forms-context'
import { IoIosMail} from 'react-icons/io'

export default function ResetPassword(){
  const {setResetPasswordFormVisible} = React.useContext(FormContext)
  const handleFormSubmit = e =>{
        e.preventDefault()
  }
  return <>
        <form onSubmit={handleFormSubmit} className="login reset-password">
            <p>If you have Forgotten your password, just type in your E-mail Address and YTS will send you a link to Reset Your Password.</p>
            
            <div className="input-group">
               <IoIosMail className='form-icon'/>
               <input type="email" name='email'  placeholder='E-mail' />
            </div>

            <button type="submit">Reset Password</button>
        </form>
        <small onClick={()=>setResetPasswordFormVisible(false)}>Back to login</small>
  </>
}