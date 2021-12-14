import React from 'react'
import { ParkItem } from './ParkItem'

export const ListView = (props) => {
  const {loading, posts} = props
  return (
    <>
      {
      loading
      ?
      (<p>Loading</p>)
      :
      (<div>
        {/* should be alphabetically */}
        {posts.sort((a , b) => b.updated_at - a.updated_at).map(post => (<ParkItem key={posts.id} post={post} />))}
      </div>)
      }
    </>
  )
}
