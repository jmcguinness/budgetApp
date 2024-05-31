
import { Heading, Card, Text, Box, FormControl, FormLabel, Link, FormHelperText, Input, Textarea, Button, Checkbox, Flex, Image, Spacer, HStack, CardBody, Container,   Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton} from "@chakra-ui/react"
import {Form} from 'react-router-dom'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'

function Login(){

    return(
        <>
            <Box w="100%" h="125px" mb="25px" bgGradient='linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'>
                <Flex Flex w="100%" h="80px" p="20px" color="#FBAB7E">

                    <Card bgColor="purple.600" mt="3px" ml="10px" h="50px">
                        <Heading color="#FBAB7E" as="h1" fontSize="2.75em" fontStyle="raleway">budget app</Heading>  
                        <Text color="#FBAB7E" fontSize=".90em">You have less money than you thought</Text>
                    </Card>
                    
                    <Spacer />

                    <HStack spacing="20px" mt="25px" mr="10px"> 
                        <Button colorScheme="purple">Sign Up</Button>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                            />
                            <MenuList>
                                <MenuItem color="purple">
                                About
                                </MenuItem>
                                <MenuItem color="purple">
                                Contact Us
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>

                </Flex>
            </Box>
            <Container>
                <Box maxW="480px" Flex align="center" mt="40px" boxShadow='lg' p="20px" bgColor="RGBA(255, 255, 255, 0.36)">
                    <Form mt="20px" Flex method="post" action="/create">
                        <FormControl isRequired mb="40px" w="350px">
                        <FormLabel>Username</FormLabel>
                        <Input bgColor="white" type="text" name="title" placeholder="Username"/>
                        </FormControl>

                        <FormControl isRequired mb="40px" w="350px">
                        <FormLabel>Password</FormLabel>
                        <Input bgColor="white" type="text" name="title" placeholder="Password"/>
                        </FormControl>

                        <Button mb="20px" type="submit" colorScheme="purple">Login</Button>

                        <Spacer />
                        
                        <Link color="blue.600">forgot your password?</Link>
                    </Form>
                </Box>
            </Container>

            <Heading mt="50px" color="rgba(34, 138, 230, 0.8)">Try the budget app today!</Heading>
            <Text mt="15px">Allow the new budget app to uncover your current financial situation</Text>

            <Card Flex align="center" p="30px" m="75px" boxShadow='lg' bgColor="RGBA(0, 0, 0, 0.001)">
                <CardBody Flex align="Center" m="25px">
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='images/pat.jpg'
                        fallbackSrc='https://via.placeholder.com/150'
                        alt='Josh'
                    />
                    <Text maxW="500px" m="15px">"Prior to budget app, I was blissfully unaware of my financial situation."</Text>
                    <Text color="rgba(34, 138, 230, 0.8)" fontSize="20px">Josh</Text>
                </CardBody>
                <CardBody Flex align="Center">
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='images/pat.jpg'
                        fallbackSrc='https://via.placeholder.com/150'
                        alt='Josh'
                    />
                    <Text maxW="500px" m="15px">"The more I know about my spending habits, the less I feel like everything is going to be okay"</Text>
                    <Text color="rgba(34, 138, 230, 0.8)" fontSize="20px">Anna</Text>
                </CardBody>
            </Card>

            




        </>
    )
}

export default Login