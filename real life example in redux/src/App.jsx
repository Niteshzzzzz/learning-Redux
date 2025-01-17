import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from './store/reducers/userReducer'

function App() {
  const users = useSelector(state => state.userReducer.users)  
  console.log(users)
  const dispatch = useDispatch()

  const deleteHandler = (index) => {
    dispatch(deleteUser(index))
  }

  return (
    <div className='bg-red-100 w-1/2 m-auto p-4'>
      <h1 className='text-red-700 text-4xl mb-4 font-bold'>Users:</h1>
      <ul>
        {
          users.map((user, index) => {
            return <li key={user.id} className='text-xl'>{user.name}<span className='text-red-500 font-bold ml-2 cursor-pointer' onClick={() => deleteHandler(index)}>X</span></li>
          })
        }
      </ul>
    </div>
  )
}

export default App