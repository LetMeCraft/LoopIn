import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './assets/pages/login'
import Feed from './assets/pages/Feed'
import Messages from './assets/pages/Messages'
import ChatBox from './assets/pages/ChatBox'
import Connections from './assets/pages/Connections'
import Discover from './assets/pages/Discover'
import Profile from './assets/pages/Profile'
import CreatePost from './assets/pages/CreatePost'

const App = () => {
  return (
   <>
   <Routes>
     <Route path='/' element={<Login />}>
     <Route index element={<Feed/>}/>
     <Route path='messages' element={<Messages/>}/>
     <Route path='messages/:userId' element={<ChatBox/>}/>
     <Route path='connections' element={<Connections/>}/>
     <Route path='discover' element={<Discover/>}/>
     <Route path='profile' element={<Profile/>}/>
     <Route path='profile/:profileId' element={<Profile/>}/>
     <Route path='create-post' element={<CreatePost/>}/>
     </Route>
   </Routes>
   </>
  )
}

export default App