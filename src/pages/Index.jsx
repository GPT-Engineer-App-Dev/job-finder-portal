import { Container, VStack, Heading, Text, Box, Button, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantResume, setApplicantResume] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    const newApplication = { name: applicantName, email: applicantEmail, resume: applicantResume, jobId: selectedJob };
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push(newApplication);
    localStorage.setItem("applications", JSON.stringify(applications));
    onClose();
    alert("Application submitted successfully!");
  };

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
                <Button mt={4} colorScheme="teal" onClick={() => { setSelectedJob(job.title); onOpen(); }}>Apply</Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply for {selectedJob}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleApplicationSubmit}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
              </FormControl>
              <FormControl id="resume" isRequired>
                <FormLabel>Resume</FormLabel>
                <Input type="file" onChange={(e) => setApplicantResume(e.target.files[0])} />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">Submit</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;