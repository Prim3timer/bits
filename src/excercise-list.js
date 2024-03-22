import React, {useState} from 'react'
import EditExcercise from './editExcercise'

import Content from './Content'
let Excercises = ({excercises, removeExcercise,
setIsWhat, isWhat,
marker, setMarker, isLoading}) =>{
  
    const [search, setSearch] = useState('')
    const [isEdit,setIsEdit] = useState(false)
    const changeMarker = (id)=> {
        setMarker(id)
    }
  
    let watcher = isEdit ? <EditExcercise id={marker} 
    setIsWhat={setIsWhat}  isWhat={isWhat}/>
    :  <Content 
        excercises={excercises.filter((ex) => ex.username.toLowerCase().includes(search.toLowerCase()))}
        removeExcercise={removeExcercise}
        setIsWhat={setIsWhat}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        changeMarker={changeMarker}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        
    /> 

    return (
        <div>
           
            {watcher}
        </div>
    )
}


export default Excercises