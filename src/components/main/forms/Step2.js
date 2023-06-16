import React from 'react';
import { VStack, FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';

const Step2 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAddMedication = () => {
    // Logic to add medication to the form data or perform other actions
    console.log(formData); // Example: Logging the form data
  };

  return (
    <VStack spacing={4}>
      <FormControl id="medicationName">
        <FormLabel>Medication Name</FormLabel>
        <Input type="text" id="medicationName" value={formData?.medicationName} onChange={handleChange} />
      </FormControl>
      <FormControl id="medicationType">
        <FormLabel>Medication Type</FormLabel>
        <Select id="medicationType" value={formData?.medicationType} onChange={handleChange}>
          <option value="pill">Pill</option>
          <option value="injection">Injection</option>
          <option value="drops">Drops</option>
          <option value="powder">Powder</option>
          <option value="inhaler">Inhaler</option>
          <option value="solutions">Solutions (Liquid)</option>
        </Select>
      </FormControl>
      <FormControl id="purpose">
        <FormLabel>Purpose/Condition</FormLabel>
        <Input type="text" id="purpose" value={formData?.purpose} onChange={handleChange} />
      </FormControl>
      <FormControl id="dosageAmount">
        <FormLabel>Dosage Amount</FormLabel>
        <Input type="text" id="dosageAmount" value={formData?.dosageAmount} onChange={handleChange} />
      </FormControl>
      <FormControl id="dosageFrequency">
        <FormLabel>Dosage Frequency</FormLabel>
        <Input type="text" id="dosageFrequency" value={formData?.dosageFrequency} onChange={handleChange} />
      </FormControl>
      <FormControl id="dosageFrequencyType">
        <FormLabel>Dosage Frequency Type</FormLabel>
        <Select id="dosageFrequencyType" value={formData?.dosageFrequencyType} onChange={handleChange}>
          <option value="daily">Daily</option>
          <option value="everyOtherDay">Every Other Day</option>
          <option value="specificDays">Specific Days</option>
          <option value="recurringCycle">Recurring Cycle</option>
        </Select>
      </FormControl>
      <Button colorScheme="teal" onClick={handleAddMedication}>Add Medication</Button>
    </VStack>
  );
};

export default Step2;
