import React from 'react'
import { useSelector } from 'react-redux'
import Post from './post/post'
import UseStyles from './styles.js'


export default function posts() {
  const post = useSelector((state)=>{ state.posts

  })
const classes = UseStyles()

  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  )
}
