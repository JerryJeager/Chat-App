import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className="bg-yellow-100 p-2 overflow-y-scroll" style={{height: "calc(100% - 100px)"}}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages