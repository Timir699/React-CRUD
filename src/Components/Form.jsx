import {useState} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';

const Form = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [cng, setCng] = useState(false)
    return ( 
        
        <div>
            <form action="" onSubmit = { (e) => {
                e.preventDefault()
                const obj = { user, pass }
                console.log(obj);
            } }>
                <input type="text" onChange = { (e) => {
                    setUser(e.target.value)
                } } />
                <br />
                <input className = "in" type= {cng ? "text" : "password" }  onChange = { (e) => {
                    setPass(e.target.value)
                }}  />
                
                <VisibilityIcon onClick = { () => {setCng(!cng)} } />
                <br />
                <button>Log in</button>
            </form>
        </div>
        
     );
}
 
export default Form;