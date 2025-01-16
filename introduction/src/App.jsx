import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from '../store/counterSlice'

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(counter)

  return (
    <div className="bg-red-300 w-[80%] h-[20vh] m-auto mt-8 flex items-center justify-center flex-col">
      <h1>counter: {counter}</h1>
      <div className="">
      <button className='border-2 border-blue-500 rounded px-4 mt-5 py-2 mr-2' onClick={() => dispatch(increment())}>Increment</button>
      <button className='border-2 border-blue-500 rounded px-4 mt-5 py-2 mr-2' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='border-2 border-blue-500 rounded px-4 mt-5 py-2 mr-2' onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button className='border-2 border-blue-500 rounded px-4 mt-5 py-2' onClick={() => dispatch(incrementAsync(5))}>Increment Async</button>

      </div>
    </div>
  )
}

export default App
