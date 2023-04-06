
import icon from './assets/icon.svg'
import camera from './assets/camera.png'
import more from './assets/more.svg'
import like from './assets/heart.png'
import share from './assets/share.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Component, useState } from 'react'
import { useEffect } from 'react'
import { Buffer } from 'buffer'
import './PostviewPage.css'

const PostviewPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            axios.get ('http://localhost:3001/viewposts')
            .then(res => {
                setPosts(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (loading) {
        return (
            <h1 id='Loading'>Loading...</h1>
        )
    }

    let today = new Date()
    let date = today.toISOString().slice(0, 10)

    return (

        <div>
            <nav id='nav'>
                <img id='icon' src={icon} />
                <span id='heading'>Instaclone</span>
                <Link to="/NewPost">
                    <img id='camera' src={camera} />
                </Link>
            </nav>
            <hr />

            <div id='master-box'>
                {posts.map((item) => {

                    let dataUri = `data:image/jpg;base64,${Buffer.from(item.image.data).toString('base64')}`
                    dataUri = dataUri.replace("dataimage/jpegbase64", "")

                    console.log(dataUri)

                    return (
                        <div>
                            <div id='outer-box'>
                                <ul>
                                    <li id='name'>{item.name}</li>
                                    <img id='more' src={more} />
                                    <li id='locationViewpost'>{item.location}</li>
                                    <img id='img' src={dataUri}/>
                                    <img id='like' src={like} />
                                    <img id='share' src={share} />
                                    <span id='like-count'>{item.likes}</span>
                                    <span id='word-like'>likes</span>
                                    <li id='description'>{item.description}</li>
                                    <li id='date'>{date}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostviewPage