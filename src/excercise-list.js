import React, {useState} from 'react'
import EditExcercise from './editExcercise'

import Content from './Content'
let Excercises = ({excercises, removeExcercise,
setIsWhat, isWhat,
marker, setMarker, isLoading,
setIsLoading,
isEdit, setIsEdit}) =>{
  
    const [search, setSearch] = useState('')
    const changeMarker = (id)=> {
        setMarker(id)
    }
  
    let watcher = isEdit ? <EditExcercise id={marker} 
    setIsWhat={setIsWhat}  isWhat={isWhat}
    isLoading={isLoading} setIsLoading={setIsLoading}/>
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
    let exListWidth = isEdit ? '91rem' : '136%'
    return (
        <div id='exercise-list' style={{width: exListWidth}}> 
            {watcher}
        </div>
    )
}


export default Excercises