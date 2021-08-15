import { useMemo } from 'react'

const sortPost = (arr, sort) => {
  arr.sort((a,b) => {
  if(typeof a[sort] === 'number')
    return a[sort] - b[sort]
  return a[sort].localeCompare(b[sort])
  })
  
  return arr
}

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if(sort){  
      return sortPost([...posts], sort)
    }
        
    return posts
  }, [sort, posts])

  return sortedPosts
} 

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((p) => {
      return p.title.toLowerCase().includes(query.toLowerCase()) || 
             p.body.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, sortedPosts])


  return sortedAndSearchedPosts
}