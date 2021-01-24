import React, { Fragment, useEffect, useState, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectPosts } from './postsSlice'

const PostList: VFC = () => {
  const [visibility, setVisibility] = useState(false)
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchPosts())
      setVisibility(true)
    })()
  }, [dispatch])

  if (!visibility) return null

  return (
    <div>
      <h1>Post List</h1>
      <div>
        {posts.map(post => (
          <Fragment key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default PostList
