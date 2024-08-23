import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Counter = () => {
 const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count +1)
  }

  const onClickMinus = () => {
    setCount(count -1)
  }

  return (
    <Box>
        <Flex justify={'center'} h={'90vh'} align={'center'}>
            <Box textAlign={'center'}>
                <Heading fontSize={'100px'} p={5}>{count}</Heading>

                <Flex gap={5} align={'center'}> 
                    <Button onClick={onClickMinus} colorScheme='red'>Minus</Button>
                    <Button onClick={onClickPlus} colorScheme='green'>Plus</Button>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}

export default Counter