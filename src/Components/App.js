
import LandingPage from "./Landing_Page/LandingPage"
import PostviewPage from "./Postview_Page/PostviewPage";
import NewPost from "./New_Post/NewPost";
import { Routes, Route} from 'react-router-dom'
import '../App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/PostView" element={<PostviewPage/>} />
      <Route path="/NewPost" element={<NewPost/>} />
    </Routes>
  )
}

export default App;
