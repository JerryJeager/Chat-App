import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className="w-[40%] bg-yellow-800 text-white">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default SideBar