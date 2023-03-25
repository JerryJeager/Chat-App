import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center" style={{background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://th.bing.com/th/id/OIP.zL683ca18DQ-S9e372XY5gHaEK?pid=ImgDet&rs=1') center/cover no-repeat fixed"}}>
        <div className="rounded-md p-4 w-[300px] md:w-[400px] md:px-8 bg-yellow-800 mx-auto text-white">
            <h1 className="text-center font-bold text-lg">Eldian's Chat</h1>
            <p className="mt-2 text-center">Register</p>
            <form action="">
                <input className="w-[100%] outline-none p-2 mt-2 bg-inherit text-white border-b-[.05rem] mb-4" placeholder="display name" type="text" />
                <input className="w-[100%] outline-none p-2 mt-2 bg-inherit text-white border-b-[.05rem] mb-4" placeholder="email" type="text" />
                <input className="w-[100%] outline-none p-2 mt-2 bg-inherit text-white border-b-[.05rem] mb-4" placeholder="password" type="password" />
                <input type="file" name="avatar" id="file" className="hidden" />
                <label htmlFor="file" className="cursor-pointer">
                    <div className="flex items-center">
                        <i class="fa-solid fa-image"></i>
                        <p className="ml-2">Add an avatar</p>
                    </div>
                </label>
                <button className="bg-white flex items-center justify-center w-[100%] mt-4 py-2 text-yellow-800">Sign up</button>
            </form>
            <p className="text-white text-center mt-2 pb-2">You do have an account? <Link to='/Login' className="font-bold underline">Login</Link></p>
        </div>
    </div>
  )
}

export default Register