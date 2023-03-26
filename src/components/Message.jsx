import { useState } from 'react'

const Message = () => {

  const [isOwner, setIsOwner ] = useState(true)

  return (
    <div className={isOwner ? "flex gap-3 items-center mt-2 text-sm flex-row-reverse" : "flex gap-3 items-center mt-2 text-sm"}>
      <div>
        <img src='https://th.bing.com/th/id/OIP.zL683ca18DQ-S9e372XY5gHaEK?pid=ImgDet&rs=1' alt="" className='rounded-full h-[20px] w-[20px]' />
        <p className="opacity-[.4] text-[.6rem]">just now</p>
      </div>
      <div className={isOwner ? "max-w-[70%] flex flex-col gap-2 items-end" : "max-w-[70%]"}>
        <p className={isOwner ? "bg-yellow-700 p-2 rounded-b-lg rounded-tl-lg text-white" : "bg-white p-2 rounded-b-lg rounded-tr-lg"} style={{maxWidth: "max-content"}}>great, how about you?</p>
        <img src='https://th.bing.com/th/id/OIP.zL683ca18DQ-S9e372XY5gHaEK?pid=ImgDet&rs=1' alt=""  />
      </div>
    </div>
  )
}

export default Message