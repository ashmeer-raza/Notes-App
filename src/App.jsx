import React, { useState } from 'react'
import { motion } from "framer-motion";



const App = () => {

  const [tittle, setTittle] = useState("")
  const [comment, setComment] = useState("")
  const [task, setTask] = useState([])

  function handleSubmit(e) {
    e.preventDefault();


    const copyTask = [...task]
    copyTask.push({ tittle, comment })
    setTask(copyTask)


    setTittle("")
    setComment("")
  }

  function handledelete(idx) {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='w-full h-screen flex justify-evenly items-center bg-neutral-950 '>
      <form onSubmit={(e) =>
        handleSubmit(e)
      }
        className='w-100 h-110  flex items-center bg-neutral-900 rounded-2xl flex-col p-8 border border-amber-50  gap-10 '>
        <h1 className='text-2xl text-amber-400 '>Add Your Notes</h1>

        <input type="text"
          placeholder='Title'
          className='h-10 w-full outline-none border text-sm border-amber-100 rounded-lg p-3 bg-neutral-950 text-white '
          value={tittle}
          onChange={(e) =>
            setTittle(e.target.value)
          }
        />

        <textarea placeholder='Take a note...'
          className='h-30 w-full outline-none border rounded-lg text-sm border-amber-100 p-3 text-white bg-neutral-950 ' maxLength={150}
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
        />

        <button type='submit'
          className='border border-neutral-950 active:scale-95 hover:opacity-80 cursor-pointer outline-none rounded-lg w-full bg-amber-400 text-black text-lg font-semibold p-3'
          onClick={() =>
            document.getElementById("notes").classList.remove("hidden")
          }
        >Add</button>

      </form>

      <div className='flex flex-col items-center relative gap-10 w-2/4 h-110 hidden p-5 overflow-y-scroll border border-amber-500 bg-neutral-900 rounded-2xl' id='notes'>
        <h1 className='text-4xl font-semibold text-amber-400 fixed top-8 '>Your Notes</h1>
        <div className='flex flex-wrap px-15 gap-10 '  >

          {task.map(function (elem, idx) {
            return <motion.div drag key={idx}

              className=" rounded-2xl w-60 relative bg-neutral-950 text-amber-300 p-5 border cursor-grab active:cursor-grabbing  bg-[url('https://images.unsplash.com/photo-1519681393784-d12026793bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')]  " >

              <div className='h-70 w-50 flex flex-col hover:opacity-80 content-around font-semibold'>
                <h3 className='text-2xl leading-tight '>{elem.tittle}</h3>
                <p className='leading-tight text-neutral-200 mt-4 break-words '>{elem.comment}</p>
              </div>

              <button onClick={() =>
                handledelete(idx)
              }
                className='bg-amber-500 active:scale-95 absolute hover:opacity-80 bottom-5 cursor-pointer right-5 font-semibold text-black w-fit p-2 rounded-xl' >Delete
              </button>

            </motion.div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App