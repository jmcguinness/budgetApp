import { Heading, Card, Text, Box, FormControl, FormLabel, FormHelperText, Input, Textarea, Button, Checkbox, Flex, Image, Spacer, HStack, CardBody, Container, Avatar, AvatarBadge, AvatarGroup,   Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup} from "@chakra-ui/react"
import {Form} from 'react-router-dom'

function Home(){

    return(
        <>
            <Box w="100%" h="100px" mb="25px" bgGradient='linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'>
                <Flex Flex w="100%" h="80px" p="20px" color="#FBAB7E">

                    <Card bgColor="purple.600" mt="3px" h="50px">
                        <Heading color="#FBAB7E" as="h1" fontSize="2.5em" m="5px" fontStyle="raleway">budget app</Heading>  
                    </Card>
                    
                    <Spacer />

                    <HStack spacing="20px"> 
                        <Button colorScheme="purple">Log Out</Button>
                    </HStack>

                    <Avatar size="3xs" ml="10px"></Avatar>

                </Flex>
            </Box>
            <Heading color="rgba(34, 138, 230, 0.8)">Monthly Data</Heading>
            <Container boxShadow="lg" p="40px" w="1000px">

                <Flex w="100%">

                    <Stat p="10px" maxW="300px" m="15px">
                        <StatLabel>Collected Fees</StatLabel>
                        <StatNumber>£0.00</StatNumber>
                        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                    </Stat>

                    <Stat mt="35px" p="10px" maxW="200px" m="15px">
                        <StatLabel>Collected Fees</StatLabel>
                        <StatNumber>£0.00</StatNumber>
                        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                    </Stat>

                    <Stat mt="35px" p="10px" maxW="200px" m="15px">
                        <StatLabel>Collected Fees</StatLabel>
                        <StatNumber>£0.00</StatNumber>
                        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                    </Stat>

                </Flex>

                <Flex w="100%">

                    <Stat >
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                        <StatArrow type='decrease' />
                        9.05%
                        </StatHelpText>
                    </Stat>

                </Flex>

            </Container>

            <Container Flex align="center">
                <Flex mt="50px" w="1200px" h="1000px">
                    <Card Flex align="center" mt="30px" w="1000px" h="1000px" bgColor="white" boxShadow="lg">

                        <CardBody></CardBody>
                        
                        <Button mb="20px" type="submit" colorScheme="purple">Import</Button>
                    </Card>
                </Flex>
            </Container>

        </>
    )
}

export default Home