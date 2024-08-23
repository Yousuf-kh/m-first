import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Okno = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Flex flexDir={"column"} h={"100vh"} justify={"center"} align={"center"}>
      <Button onClick={() => setOpen(true)}>open</Button>
      {open &&(
        <Box p={2} backgroundColor={'green.500'} borderRadius={'30px'} m={5} textAlign={'end'}>
        <Button onClick={() => setOpen(false)} m={2} p={1}>X</Button>
        <Image borderRadius={'30px'} src="https://cdn-images-1.medium.com/fit/t/1600/480/1*AmI9wRbXrfIWGESx6eEiTw.gif" />
      </Box>
      )
      }

      
    </Flex>
  );
};

export default Okno;
