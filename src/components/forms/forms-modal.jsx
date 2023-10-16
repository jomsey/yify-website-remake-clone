import "./auth-forms.css"
import Login from './login'
import Register from './sign-up'
import {IoMdClose} from 'react-icons/io'
import { FormContext } from './forms-context'
import ResetPassword from './reset-password'
import  { useContext, useState} from 'react'
import { YifyAppContext } from '../../context'

function FormsModal({visible,activeForm}) {
  const [resetPasswordFormVisible,setResetPasswordFormVisible] = useState(false)
  const {setFormsModalVisible,setActiveForm} = useContext(YifyAppContext)

  
  return (
    <FormContext.Provider value={{resetPasswordFormVisible,setResetPasswordFormVisible}}>
        <div className={`forms ${visible && "forms-modal-visible"}`}>

            <div className="forms-container" >
                <IoMdClose className='close-btn' onClick={()=>setFormsModalVisible(false)}/>
                <div className="forms-header">
                    <div className={`head-toggler ${activeForm == "login" && "active-head" }`} onClick={()=>setActiveForm("login")}>Login</div>
                    <div className={`head-toggler ${activeForm == "register" && "active-head" }`} onClick={()=>setActiveForm("register")}>Register</div>
                </div>
            
                <div className="forms-display">
                    {activeForm==="login"?
                    (!resetPasswordFormVisible?<Login/>:<ResetPassword/>):
                    <Register/>
                    }
                </div>
            </div>
        </div>
    </FormContext.Provider>
  )
}

export default FormsModal