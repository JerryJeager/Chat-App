import React from 'react'

const Navbar = () => {
  return (
    <div className=" py-4 px-2 h-[50px] bg-yellow-900 flex justify-between items-center">
      <div className="font-bold">Eldian's Chat</div>
      <div className="flex gap-2 items-center text-sm">
        <img src='https://th.bing.com/th/id/OIP.zL683ca18DQ-S9e372XY5gHaEK?pid=ImgDet&rs=1' alt="" className='rounded-full h-[20px] w-[20px]' />
        <p>JerryJaeger</p>
        <button className="p-2 bg-yellow-600">Signout</button>
      </div>
    </div>
  )
}

export default Navbar