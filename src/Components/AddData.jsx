import {useState} from 'react' 
import shortid from 'shortid';

const AddData = () => {

    // const [user, setUser] = useState('')
    // const [email, setEmail] = useState('')
    const [user, setUser] = useState({
        id: shortid.generate(),
        name: '',
        email: ''

    })
    const [newUser, setNewUser] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [data, setData] = useState([])
    const [editableUser, setEdiatableUSer] = useState(null);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const deleteHand = (id) => {
        const newData = [...data]
        const finalData = newData.filter( (value) => {
            if ( id !== value.id ) {
                return value;
            }
        } )
        setData(finalData)
    }
    const editHand = (value) => {
        setNewUser(value.name)
        setNewEmail(value.email)
        setEdiatableUSer(value)

    } 
    const updateHand = (e) => {
        if(!editableUser) return
        e.preventDefault()
        const updatedUser = data.find( (item) => {
            return item.id === editableUser.id
        } ) 

        updatedUser.name = newUser
        updatedUser.email = newEmail
        setEdiatableUSer(null);
        setNewUser('');
        setNewEmail('') 
    } 

    return ( 
        <div>
            <form action="" onSubmit = { (e) => {
                e.preventDefault()
                
                setData([...data, user])
                setUser({
                    id: shortid.generate(),
                    name: '',
                    email: ''
                })
            }}>
                <input value = {user.name} name = 'name' type="text" onChange = { (e) => handleChange(e)}/>
                <br />
                <input value = {user.email} name = 'email' type="text" onChange = { (e) =>  handleChange(e) }/>
                <br />
                <button>Add data </button>
            </form>

            <h2>UpdateBox</h2>
            <form action="" onSubmit = { (e) => updateHand(e)}>
                <input value = {newUser} type="text" onChange = { (e) => {
                    setNewUser(e.target.value)
                } }/>
                <br />
                <input value = {newEmail} type="text" onChange = { (e) => {
                    setNewEmail(e.target.value)
                } }/>
                <br />
                <button type = 'submit'>Update</button>
            </form>

            
            <div>
                {data.map( (value) => {
                    return (
                        <div>
                            <h2>{ value.name }</h2>
                            <h3>{ value.email }</h3>
                            <h2>{ value.id }</h2>
                            <button onClick = { () => deleteHand(value.id) }>Delete</button>
                            <button onClick = { () => editHand(value) }>Edit</button>
                        </div>
                    )
                } )}
            </div>
        </div>
     );
}
 
export default AddData;