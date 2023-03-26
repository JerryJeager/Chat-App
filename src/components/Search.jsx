import React from 'react'

const Search = () => {
  return (
    <div>
      <input type="text" className="w-[100%] outline-none p-2 bg-inherit text-white border-b-[.05rem] mb-3" placeholder='Find a user' />
      <div className="flex gap-2 items-center ml-2">
        <img src="https://th.bing.com/th/id/OIP.zL683ca18DQ-S9e372XY5gHaEK?pid=ImgDet&rs=1" alt="" className="h-[30px] w-[30px] rounded-full"/>
        <p>JerryJaeger</p>
      </div>
    </div>
  )
}

export default Search