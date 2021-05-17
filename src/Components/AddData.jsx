import { Update } from '@material-ui/icons';
import {useState} from 'react' 
import shortid from 'shortid';

const AddData = () => { 
    const [users, setUsers] = useState({
        user : '',
        email : '',
        id : shortid.generate()
    })
    const [datas, setDatas] = useState([])
    const [editmode, setEditmode] = useState(false)
    const [nothing, setNothing] = useState(null)

    const handleChange = (e) => {
        setUsers({
            ...users,
            [e.target.name] : e.target.value
        })
    }
    const Update = (e) => {
        e.preventDefault()
        setDatas([...datas, users])
        setUsers({
            user : '',
            email : '',
            id : shortid.generate()
        })
    }
    const deleteHand = (id) => {
        const deleteData = [...datas]
        const newDatas = deleteData.filter( (value) => {
            if (value.id !== id)
                return value
        } )
        setDatas(newDatas)
    }
    const editHand = (value) => {
        setUsers({
            id: value.id,
            user: value.user,
            email: value.email
        })
        setNothing(value)
        setEditmode(true)
    }
    const upadeted = (e) => {
        e.preventDefault()
        if(!nothing) return
        const updatedData = datas.find( (item) => {
            return nothing.id === item.id
        } )
        updatedData.user = users.user
        updatedData.email = users.email
        setNothing(null)
        setEditmode(false)
        
        setUsers({
            id: shortid.generate(),
            user: '',
            email: '',
        })
    }
    

     return (
        <div>
            <form action="" onSubmit = { editmode ? upadeted : Update  }>
                <input type="text" name = "user" value = {users.user} onChange = { (e) => handleChange(e) } />
                <br />
                <input type="text" name = "email" value = {users.email} onChange = { (e) => handleChange(e) }/>
                <br />
                <button>{editmode ? 'Update Data' : 'Add Data' }</button>
            </form>
            
            {/* <form action="" onSubmit = { (e) => upadeted(e) }>
                <input type="text" value = { newUser } onChange = { (e) => setNewUser(e.target.value) }/>
                <br />
                <input type="text" value = { newEmail } onChange = { (e) => setNewEmail(e.target.value) }/>
                <br />
                <button>Add data</button>
            </form> */}
            <div>
                {datas.map( (value) => {
                    return (
                        <div>
                            <h1>{value.id}</h1>
                            <h2>{value.user}</h2>
                            <h4>{value.email}</h4>
                            <button onClick = { () => deleteHand(value.id) }>Delete</button>
                            <button onClick = { () => editHand(value) }>Edit</button>
                        </div>
                    )
                } )}
            </div>

        </div>
        
    )
}

export default AddData;