import { Link, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)

// const storage = getStorage();
      const storageRef = ref(storage, `${displayName}.jpg`);

      const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
      // Handle unsuccessful uploads
          setErr(true)
        }, 
        () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      // console.log('File available at', downloadURL);
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
          });
        }
      );
    }catch(err){
      setErr(true)
    }
    // 
  }

    // const auth = getAuth();
   

  return (
    <div className="h-[100vh] flex justify-center items-center" style={{background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://th.bing.com/th/id/OIP.zL683ca18DQ-S9e372XY5gHaEK?pid=ImgDet&rs=1') center/cover no-repeat fixed"}}>
        <div className="rounded-md p-4 w-[300px] md:w-[400px] md:px-8 bg-yellow-800 mx-auto text-white">
            <h1 className="text-center font-bold text-lg">Eldian's Chat</h1>
            <p className="mt-2 text-center">Register</p>
            <form onSubmit={handleSubmit}>
                <input className="w-[100%] outline-none p-2 mt-2 bg-transparent text-white border-b-[.05rem] mb-4" placeholder="display name" type="text" />
                <input className="w-[100%] outline-none p-2 mt-2 bg-transparent text-white border-b-[.05rem] mb-4" placeholder="email" type="text" />
                <input className="w-[100%] outline-none p-2 mt-2 bg-transparent text-white border-b-[.05rem] mb-4" placeholder="password" type="password" />
                <input type="file" name="avatar" id="file" className="hidden" />
                <label htmlFor="file" className="cursor-pointer">
                    <div className="flex items-center">
                        <i class="fa-solid fa-image"></i>
                        <p className="ml-2">Add an avatar</p>
                    </div>
                </label>
                <button className="bg-white flex items-center justify-center w-[100%] mt-4 py-2 text-yellow-800" onClick={() => navigate('/Login')}>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p className="text-white text-center mt-2 pb-2">You do have an account? <Link to='/Login' className="font-bold underline">Login</Link></p>
        </div>
    </div>
  )
}

export default Register
