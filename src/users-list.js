// import {users, setUsers} from '../App'

let Users = ({users, handleDelete,
     isLoading, 
    setIsLoading}) => {
        window.addEventListener('load', ()=> {
            setIsLoading(true)
        })
        if (users) setIsLoading(false)
    return (
        <div id="users-list-frame">
            <table id='user-table'>
                <tbody>

            <h2 className="user-list">Users</h2>
       {isLoading ? <h2>Loading...</h2> : users.map((user, index)=> {
           return (
               <tr key={user._id} id="the-row"
              
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