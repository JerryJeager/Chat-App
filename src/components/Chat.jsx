import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className="w-[60%]">
      <div className="bg-yellow-700 h-[50px] px-2 py-4 flex justify-between items-center text-white">
        <div>JerryJaeger</div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-user-plus"></i>
          <p className="text-lg font-bold">...</p>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat