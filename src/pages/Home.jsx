import Chat from "../components/Chat"
import SideBar from "../components/SideBar"

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-[60%] h-[80%] rounded-md flex overflow-hidden">
        <SideBar />
        <Chat  />
      </div>
    </div>
  )
}

export default Home