import React, { useState, useMemo } from 'react';
import PostFrom from './components/PostFrom';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';

import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "123"},
    {id: 2, title: "Java", body: "321"},
    {id: 3, title: "PHP", body: "222"},
    {id: 4, title: "KOTIL", body: "312"},
    {id: 5, title: "C#", body: "123"},
])
  const [filter, setFilter] = useState({sort: '', query: ''})

  
  const sortedPosts = useMemo(() => {
    if(filter.sort)
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((p) => {
      return p.title.toLowerCase().includes(filter.query.toLowerCase()) || 
             p.body.toLowerCase().includes(filter.query.toLowerCase())
    })
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => setPosts([...posts, newPost])
  const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))

  return (
    <div className="App">
      <PostFrom create={createPost}/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
    </div>
  );
}

export default App;
