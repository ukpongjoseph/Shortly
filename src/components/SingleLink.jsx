import React, {useState} from 'react'

const SingleLink = ({oldUrl, newUrl}) => {
  const [copied, setCopied] = useState(false)
  const copyLink = async(text)=>{
    setCopied(copied?false:true)
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      alert(error.message)
      return false
    }
  }
  return (
    <div>
        <div className='flex justify-between flex-col flex-wrap md:flex-row bg-white rounded-lg text-[12px] md:text-[12px] lg:text-[14px] p-3 overflow-hidden'>
            <p className='text-purple-950 border border-b-gray-200 md:border-b-0 border-t-0 border-l-0 border-r-0 w-[90%] md:w-[25%] lg:w-[50%]'>{oldUrl}</p>
            <div className='flex justify-between gap-2 flex-col md:flex-row md:items-center items-start'>
                <p className='text-[hsl(180,66%,49%)]'>{newUrl}</p>
                <button onClick={()=>copyLink(`${newUrl}`)} className='text-white bg-[hsl(180,66%,49%)] rounded-sm px-3 py-1 w-[100%] md:w-auto hover:cursor-pointer hover:bg-[hsla(180,66%,49%,0.7)]'>{copied?"Copied":"copy"}</button>
            </div>
        </div>
    </div>
  )
}

export default SingleLink