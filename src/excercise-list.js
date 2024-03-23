import React, {useState} from 'react'
import EditExcercise from './editExcercise'

import Content from './Content'
let Excercises = ({excercises, removeExcercise,
setIsWhat, isWhat,
marker, setMarker, isLoading,
isEdit, setIsEdit}) =>{
  
    const [search, setSearch] = useState('')
    const changeMarker = (id)=> {
        setMarker(id)
    }
  
    let watcher = isEdit ? <EditExcercise id={marker} 
    setIsWhat={setIsWhat}  isWhat={isWhat}/>
    :  <Content 
        excercises={excercises.filter((ex) => ex.username.toLowerCase().includes(search.toLowerCase()))}
        removeExcercise={removeExcercise}
        setIsWhat={setIsWhat}
        isWhat={isWhat}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        changeMarker={changeMarker}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}  
    /> 

    return (
        <div id='exercise-list'> 
            {watcher}
        </div>
    )
}


export default Excercises