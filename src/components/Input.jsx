import React from 'react'

const Input = () => {
  return (
    <div className="h-[50px] px-2 py-4 bg-white flex justify-between items-center">
      <input type="text" placeholder='Type something...' className="outline-none border-0 w-[80%]"/>
      <div className="flex gap-2 items-center">
        <input type="file" name="file" id="file" className="hidden" />
        <input type="file" name="image" id="image" className="hidden" />
        <label htmlFor="file" className="cursor-pointer opacity-[.4]">
          <i class="fa-solid fa-paperclip"></i>
        </label>
        <label htmlFor="image" className="cursor-pointer opacity-[.4]">
          <i class="fa-solid fa-image"></i>
        </label>
        <button className="p-2 text-sm text-white bg-yellow-700">Send</button>
      </div>
    </div>
  )
}



export default Input