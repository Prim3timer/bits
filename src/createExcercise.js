
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.module.css"

let CreateExcercise = ({users, 
    handleSubmit, 
    username,
setUsername,
description,
setDescription,
duration,
setDuration,
date,
setDate,
excercises,
 setExcercises,
 headsUp
}) => {
    return (
        <div className='create-exercise'>
            <h2>Create Excercise Log</h2>
            <form onSubmit={handleSubmit} >
            <h5 style={{margin: '1rem 0', color: 'red'}}>{headsUp}</h5>
                <label>username:</label><br/>
                <select
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                >
                    {users.map((user)=> {
                        return <option key={user._id}                                                                  
                        className='aha'
                        value={user.username}
                        >
                            {user.username}
                        </option>
                    })}
                </select>
                 <br/>
                 <label>description:</label>
                 <br/>
                <input
                name="description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                <br/>
                <label>duration:</label>
                <br/>
                <input
                name="duration"
                value={duration}
                onChange={(e)=> setDuration(e.target.value)}
                />
                <br/>
                <label>date:</label>
                <br/>
               <DatePicker
               selected={date}
               onChang={(e)=> setDate(e.target.value)}/>
               <br/>
               <button type="submit" className='pop' onClick={setExcercises(excercises)} >Add Log</button>
                  
            </form>
        </div>  
    )
}

export default CreateExcercise