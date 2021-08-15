import React, { useState, useEffect } from 'react'
import PostService from './API/PostService'
import {usePosts} from './hooks/usePosts'
import PostFrom from './components/PostFrom'
import PostList from './components/PostList'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/Modal/MyModal'
import MyButton from './components/UI/Button/MyButton'


import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts =  usePosts(posts, filter.sort, filter.query)

  const fetchPost = async () => {
    const post = await PostService.getAll()
    setPosts(post)
  }
  

  const createPost = (newPost) =>  {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))
  
  useEffect(() => fetchPost(), [])

  return (
    <div className="App">
      <MyButton style={{marginTop: 20}} onClick={e=> setModal(true)}>Создать Пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostFrom create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
    </div>
  );
}

export default App;

