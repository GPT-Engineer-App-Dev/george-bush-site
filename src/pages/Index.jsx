import { Box, Flex, Text, Image, Link, Container, Heading } from "@chakra-ui/react";
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