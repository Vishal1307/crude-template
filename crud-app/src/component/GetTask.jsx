import { Stack,Box } from '@chakra-ui/react'
import React from 'react'

const GetTask = ({title,description,task_state,tags,SubTasks}) => {
  return (
    <Box>
        <Stack>
            <Box>{title}</Box>
        </Stack>
    </Box>
  )
}

export default GetTask