import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Job Listing Website</Heading>
        <Text fontSize="xl" textAlign="center">Find your dream job or the perfect candidate here!</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg">Search Jobs</Button>
          <Button leftIcon={<FaBriefcase />} colorScheme="teal" size="lg">Post a Job</Button>
        </HStack>
        <Box width="100%" mt={10}>
          <Heading as="h2" size="lg" mb={4}>Featured Jobs</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Software Engineer</Heading>
              <Text mt={4}>Company: Tech Innovators</Text>
              <Text>Location: Remote</Text>
              <Text>Salary: $100,000 - $120,000</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Product Manager</Heading>
              <Text mt={4}>Company: Creative Solutions</Text>
              <Text>Location: New York, NY</Text>
              <Text>Salary: $90,000 - $110,000</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">UX Designer</Heading>
              <Text mt={4}>Company: Design Hub</Text>
              <Text>Location: San Francisco, CA</Text>
              <Text>Salary: $80,000 - $100,000</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;