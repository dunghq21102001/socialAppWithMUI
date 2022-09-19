import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import { listImg } from '../listImg'

function Feed() {
  return (
    <Box justifyContent='center' flex={4} p={2}>
      {listImg.map(img => (
        <Post key={img.id} src={img.src} />
      ))}

    </Box>
  )
}

export default Feed