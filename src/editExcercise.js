import axios from 'axios'
import { useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'

let EditExcercise = ({
    id,
    isWhat,
    setIsWhat,
    isLoading,
    setIsLoading
}) => {
    let [username, setUsername] = useState()
    let [description, setDescription] = useState()
    let [duration, setDuration] = useState()
    let [date, setDate] = useState()
    const [isDone, setIsDone] = useState(false)
    const [feedBack, setFeedBack] = useState(null)
    
    const getCurrentExcercise = async() => {
        try {
            setIsLoading(true)
            let response = await axios.get(`https://dosal.onrender.com/excercises/${id}`)
            setFeedBack(response.data)
            if (response) setIsLoading(false)
            setUsername(response.data.username)
            setDescription(response.data.description)
            setDuration(response.data.duration)
            setDate(response.data.date) 
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=> {
    getCurrentExcercise()
   
}, [])
const handleEdit = async (e) => {
    // e.preventDefault()
      const excercise = {
        _id: id,
          description: description ? description : feedBack.description,
          duration: duration ? duration : feedBack.duration,
          date

      }
   
      const response = await  axios.put(`https://dosal.onrender.com/excercises/update/${id}`, excercise)
      console.log(response.data)
      setIsDone(true)
      setTimeout(()=> {setIsDone(false)}, 3000)
}
return (
    <div id='edit-exercise'>
        {isLoading ? <h2 className='load-user'>loading data...</h2> : <h2>Edit User</h2>}
        {isDone ? <h2 className='is-done'>User Edited</h2>   : ''}
        <form onSubmit={(e)=> e.preventDefault()} >
            <label>username:</label><br/>
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
            <label>Date:</label>
            <br/>
           <DatePicker
           selected={date}
           onChang={(e)=> setDate(e.target.value)}/>
           <br/>
           {isLoading || <button onClick={handleEdit} className='pop'>Update Info
           </button>}
        </form>
       
    </div> 
) 
}

export default EditExcercise