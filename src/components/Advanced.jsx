import React, { useState } from 'react'
import axios from 'axios'
import SingleLink from './SingleLink'

const Advanced = () => {
  // initializing a state for localStorage variable
    const [links, setLinks] = useState(()=>{
      // checks if there exist a localStorage variable with that name
      const existingLinks = localStorage.getItem("NewLinks")
      // if it exist, we initialize the state with the variable
      if(existingLinks){
        return (JSON.parse(existingLinks))
      }
      else{
        // else we initailize with an empty arraygit clone 
        const init = [];
        return (localStorage.setItem("NewLinks", JSON.stringify(init)))
      }
    })
  const [url, setUrl] = useState({
    userPrompt:""
  })
  const [error, setError] = useState({
    userPrompt: ""
  })
  const handleChange = (e)=>{
    const{name, value} = e.target
    setUrl({...url, [name]:value})
    setError({...error, [name]:""})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    let newError = {
        userPrompt:""
    }
    let hasError = false
    if(!url.userPrompt){
      hasError = true
      newError.userPrompt = "provide a valid link/url or add a link"
    }
    if(hasError){
      setError(newError)
    }else{
      try {
        const response = await axios.get(
          `https://tinyurl.com/api-create.php?url=${url.userPrompt}`
        )
        if(response.status === 200){
          const oldLinks = JSON.parse(localStorage.getItem("NewLinks"))
          const freshObject = {
            oldUrl: url.userPrompt,
            newUrl : response.data
          }
          oldLinks.push(freshObject)
          localStorage.setItem("NewLinks", JSON.stringify(oldLinks))
          setLinks(JSON.parse(localStorage.getItem("NewLinks")))
          setUrl({
            userPrompt:""
          })
        }
      } catch (error) {
        console.log(error)
        alert(error.message)
      }
    }
  } 
  return (
      <div className='flex flex-col w-[100%] md:w-[85vw] lg:w-[80vw] mx-auto container'>
        <div>
          <div id='shortener' className='w-[100%] bg-[hsl(257,27%,26%)] rounded-lg px-2 py-6 md:py-12'>
           <form onSubmit={handleSubmit} className='flex justify-center flex-col md:flex-row gap-2 md:gap-3'>
             <div className='md:w-[60%]'>
              <input style={{
              border:error.userPrompt?"2px solid red":"2px solid gray"
             }} className='p-2 md:py-4 w-[100%] bg-white rounded-md ' type="text" placeholder='Shorten a link here...' name='userPrompt' id='userPrompt' value={url.userPrompt} onChange={handleChange}/>
             {error && <p className='text-red-600 text-sm font-normal'>{error.userPrompt}</p>}
             </div>
            <button type='submit' className='text-white rounded-lg bg-[hsl(180,66%,49%)] py-2 md:py-4 md:w-[18%] hover:bg-[hsla(180,66%,49%,0.5)] md:h-[55px]'>Shorten it!</button>
           </form>
         </div>
        <div className='flex flex-col md:w-[100%] container mx-auto pt-3 gap-2'>
            {
                links.slice(-3).map((item, index)=>
                    <SingleLink key={index} {...item}/>
                )
            }
          </div>
        </div>
      </div>
  )
}

export default Advanced