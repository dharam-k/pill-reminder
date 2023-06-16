import React from 'react';
import { VStack, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Step1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <VStack spacing={4}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" id="name" value={formData?.name} onChange={handleChange} />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" id="email" value={formData?.email} onChange={handleChange} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" id="password" value={formData?.password} onChange={handleChange} />
      </FormControl>
      <FormControl id="confirmPassword">
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" id="confirmPassword" value={formData?.confirmPassword} onChange={handleChange} />
      </FormControl>
    </VStack>
  );
};

export default Step1;
