import React from 'react'
import { Box } from "@mui/material";
import Post1 from './Post/Post1'
import Post2 from './Post/Post2'
import Post3 from './Post/Post3'
import Post4 from './Post/Post4'
import Post5 from './Post/Post5'


const Feed = () => {

  return (
    <Box flex={4} p={2}>
        <Post1 />
        <Post2/>
        <Post3 />
        <Post4 />
        <Post5/>
    </Box>
  )
}

export default Feed
