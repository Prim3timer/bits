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
            <h2 className="user-list">Users</h2>
            <table id='user-table'>
                <tbody>

       {isLoading ? <h2>Loading...</h2> : users.map((user, index)=> {
           return (
               <tr key={user._id} id="the-row"
              
               >

            <th className="user-name">{user.username}</th>
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