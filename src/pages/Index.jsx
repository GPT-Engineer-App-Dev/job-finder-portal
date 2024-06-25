import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Job Listing Website</Heading>
        <Text fontSize="xl" textAlign="center">Find your dream job or the perfect candidate here!</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg">Search Jobs</Button>
          <Button leftIcon={<FaBriefcase />} colorScheme="teal" size="lg" onClick={() => navigate('/post-job')}>Post a Job</Button>
        </HStack>
        <Box width="100%" mt={10}>
          <Heading as="h2" size="lg" mb={4}>Featured Jobs</Heading>
          <VStack spacing={4} align="stretch">
            {jobs.map((job, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{job.title}</Heading>
                <Text mt={4}>Company: {job.company}</Text>
                <Text>Location: {job.location}</Text>
                <Text>Salary: {job.salary}</Text>
                <Text>{job.description}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;