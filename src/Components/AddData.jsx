import {useState} from 'react'

const AddData = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([])

    const deleteHand = (id) => {
        const newData = [...data]
        const newArr = newData.filter( (value) => {
            if ( value.id !== id ) {
                return value
            }
        } ) 
        setData(newArr)
    }
    return ( 
        <div>
            <div>
                <form action="" onSubmit = { (e) => {
                    e.preventDefault()
                    const obj = { userName, email, id : data.length+1}
                    setData([...data,obj,])
                    setUserName('')
                    setEmail('')
                }}>
                    <input value = {userName} type="text" onChange = { (e) => { setUserName(e.target.value)}} />
                    <br />
                    <input value = {email} className = "in" type="text" onChange = { (e) => {setEmail(e.target.value)}} />
                    <br />
                    <button> Add </button>
                </form>
            </div>
            {data.map( (value) => {
                return (
                    <div style = {{ border : "1px solid #000000", padding : "20px",margin : "10px 0px" }}>
                        <h2>{value.userName}</h2>
                        <h3>{value.email}</h3>
                        <h2>{value.id}</h2>
                        <button onClick = { () => deleteHand(value.id) }>Delete</button>
                    </div>
                )
            })}

        </div>
     );
}
 
export default AddData;