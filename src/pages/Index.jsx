import { Box, Flex, Text, Image, Link, Container, Heading, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaRegHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" p={5}>
        <Heading as="h1" size="2xl" color="brand.800">George H. W. Bush</Heading>
        <Text fontSize="lg" color="brand.700">41st President of the United States</Text>
        <Box as="nav" w="full" p={4} bg="brand.900" color="white">
          <Flex justify="space-around">
            <Link href="#biography">Biography</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#policies">Policies</Link>
            <Link href="#achievements">Achievements</Link>
          </Flex>
        </Box>
        <VStack align="stretch" p={5} spacing={4} id="biography">
          <Heading as="h2" size="xl" color="brand.700">Biography Timeline</Heading>
          <Divider />
          <HStack spacing={3} align="start">
            <Image src="/images/bush-young.jpg" alt="Young George H. W. Bush" boxSize="150px" />
            <Text fontSize="md">1924: Born in Milton, Massachusetts.</Text>
          </HStack>
          <Divider />
          <HStack spacing={3} align="start">
            <Image src="/images/bush-pilot.jpg" alt="Bush as a Navy pilot" boxSize="150px" />
            <Text fontSize="md">1942-1945: Served as a Navy pilot during World War II.</Text>
          </HStack>
          <Divider />
          <HStack spacing={3} align="start">
            <Image src="/images/bush-politics.jpg" alt="Bush in politics" boxSize="150px" />
            <Text fontSize="md">1964-1980: Political career including Congressman, Ambassador, and CIA Director.</Text>
          </HStack>
          <Divider />
          <HStack spacing={3} align="start">
            <Image src="/images/bush-president.jpg" alt="Bush as President" boxSize="150px" />
            <Text fontSize="md">1989-1993: Served as the 41st President of the United States.</Text>
          </HStack>
          <Divider />
          <HStack spacing={3} align="start">
            <Image src="/images/bush-post-presidency.jpg" alt="Bush post-presidency" boxSize="150px" />
            <Text fontSize="md">Post-presidency: Engaged in humanitarian activities and public speaking.</Text>
          </HStack>
        </VStack>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Image src="/images/george-hw-bush.jpg" alt="George H. W. Bush" boxSize="300px" m="auto" />
          <Text mt={2}>
            Welcome to the official page of George H. W. Bush, 41st President of the United States. Explore the life and legacy of a leader dedicated to public service.
          </Text>
        </Box>
        <Box as="footer" p={4} bg="brand.800" color="white" w="full" mt={5}>
          <Text align="center">&copy; {new Date().getFullYear()} George H. W. Bush. All rights reserved.</Text>
          <Text align="center" fontSize="sm">This website is for informational purposes only and is not affiliated with any political entity.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;