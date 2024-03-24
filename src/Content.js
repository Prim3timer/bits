
import SearchItem from './SearchItem'
import { useState } from "react"

let Content = ({excercises, setExcercises, 
  removeExcercise,
// setMarker,
// marker,
setIsWhat,
isWhat,
isEdit,
setIsEdit,
changeMarker,
search,
setSearch,
isLoading
})=> {
 
 const [rowColor, setRowColor] = useState('yellow')

const goToEdit = (id )=> {
  setIsEdit(true)
    changeMarker(id)
    console.log(isWhat)
}   
    return (
      
        <>
        <article>

         <SearchItem search={search} setSearch={setSearch}/>
        </article>
          <h2>Logged Excercises</h2>
        <table id='exercise-table' >
        <tbody>
            
            <tr>
                <th>username</th>
                <th>description</th>
                <th>duration</th>
                <th>date</th>
                <th colSpan={2} className='actions'>actions</th>
            </tr>
          {isLoading ? <h2>Loading...</h2> : excercises.length ? excercises.map((excercise,index) => {
          
            return (
                <tr id={excercise._id} style={{backgroundColor: index % 2 === 0 ?
                'burlywood' : 'darkseagreen'}}>
                    <td className='username'>{excercise.username}</td>
                <td className='description'>{excercise.description}</td>
                <td className='duration'>{excercise.duration}</td>
                <td className='date'>{excercise.date.substring(0, 10)}</td>
                {/* <td>{excercise.date}</td> */}
                <td  className='remove' style={{color: 'dodgerblue'}} onClick={() => removeExcercise(excercise._id)}>Remove</td>
                <td className='edit' type='submit' onClick={()=> goToEdit(excercise._id)} 
                >Edit</td>
                </tr>
        
            )
        }) :  <p style={{marinTop: '2rem'}}>Your table is Empty</p>}
             </tbody>
</table>
          </>
    )
  }

export default Content