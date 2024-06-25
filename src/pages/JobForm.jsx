import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, company, location, salary, description };
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate("/");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md" mt={10}>
        <Heading as="h1" size="xl">Post a Job</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="company" isRequired>
          <FormLabel>Company</FormLabel>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel>Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="salary" isRequired>
          <FormLabel>Salary</FormLabel>
          <Input value={salary} onChange={(e) => setSalary(e.target.value)} />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Job Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default JobForm;