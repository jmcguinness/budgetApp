import { Heading, Box, Button, Flex,  Spacer, HStack } from "@chakra-ui/react"

function NavBar() {

    return(
        <Box w="100%" h="100px" bgGradient='linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'>
            <Flex Flex w="100%" h="80px" p="20px" color="white"  >
                <Heading as="h1" fontSize="2em">budget app</Heading>  
                
                <Spacer />

                <HStack spacing="20px"> 
                    <Button colorScheme="purple">Sign Up</Button>
                </HStack>
            </Flex>
        </Box>
    )
}

export default NavBar