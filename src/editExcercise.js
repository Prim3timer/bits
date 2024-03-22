import axios from 'axios'
import { useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'

let EditExcercise = ({id,isWhat}) => {
    let [username, setUsername] = useState()
    let [description, setDescription] = useState()
    let [duration, setDuration] = useState()
    let [date, setDate] = useState()

console.log(id)
const getCurrentExcercise = async() => {
       let response = await axios.get(`https://dosal.onrender.com/excercises/${id}`)
       console.log(response.data)
       setUsername(response.data.username)
       setDescription(response.data.description)
       setDuration(response.data.duration)
    setDate(response.data.date)
}
useEffect(()=> {
    getCurrentExcercise()
    console.log(isWhat)
}, [])
const handleEdit = async (e) => {
    // e.preventDefault()
      const excercise = {
        _id: id,
          username,
          description,
          duration,
          date

      }
   
      const response = await  axios.put(`https://dosal.onrender.com/excercises/update/${id}`, excercise)
      console.log(response.data)
      window.location = '/'
    
}
return (
    <div>
        <h2>Edit</h2>
        <form onSubmit={(e)= e.preventDefault()} >
            <label>username:</label>
            <input
            value={username}
            />
             <br/>
             <label>Description:</label>
             <br/>
            <input
            name="description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            />
            <br/>
            <label>Duration:</label>
            <br/>
            <input
            name="duration"
            value={duration}
            onChange={(e)=> setDuration(e.target.value)}
            />
            <br/>
            <label>Date</label>
            <br/>
           <DatePicker
           selected={date}
           onChang={(e)=> setDate(e.target.value)}/>
           <br/>
           <button onClick={handleEdit} className='pop'>Edit Excercise
           </button>
        </form>
    </div> 
) 
}

export default EditExcercise