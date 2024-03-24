// import {users, setUsers} from '../App'

let Users = ({users, handleDelete,
     isLoading, 
    setIsLoading}) => {
        window.addEventListener('load', ()=> {
            setIsLoading(true)
        })
        if (users) setIsLoading(false)
    return (
        <div>
            <table >
                <tbody>

            <h2 className="user-list">Users</h2>
       {isLoading ? <h2>Loading...</h2> : users.map((user, index)=> {
           return (
               <tr id={user._id}
              
               >

            <th className="username">{user.username}</th>
            <td className='delete' onClick={()=> handleDelete(user._id)}>delete</td>
                </tr>
    )
})}
</tbody>
</table>
        </div>
    )
}

export default Users