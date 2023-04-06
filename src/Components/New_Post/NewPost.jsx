import icon from './assets/icon.svg'
import camera from './assets/camera.png'
import '../New_Post/NewPost.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Filebase64 from 'react-file-base64'


const NewPost = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = await new FormData()
        formData.append("name", name)
        formData.append("location", location)
        formData.append("description", description)
        formData.append("image", image)


        axios.post("http://localhost:3001/newpost", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <div>
                <nav id='nav'>
                    <img id='icon' src={icon} />
                    <span id='heading'>Instaclone</span>
                    <img id='camera' src={camera} />
                </nav>
                <hr />
            </div>

            <div id='form-box'>
                <form action="" id='form' enctype="multipart/form-data">

                    <Filebase64
                        multiple={false}
                        onDone={({ base64 }) => setImage(base64)}
                        type="file" id='file' name='image' placeholder='No file choosen (Choose JPG file only)' />

                    <input onChange={(e) => { setName(e.target.value) }} type="text" id='author' placeholder='Author' />
                    <input onChange={(e) => { setLocation(e.target.value) }} type="text" id='location' placeholder='Location' />
                    <input onChange={(e) => { setDescription(e.target.value) }} type="text" id='desc' placeholder='Description' />

                    <button onClick={handleSubmit} type='submit' id='submit' >
                        <Link to="/PostView">Post</Link>
                    </button>

                </form>
            </div>
        </div>
    )
}

export default NewPost