import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  VStack,
  HStack,
  Steps,
  Step,
} from '@chakra-ui/react';

const RegistrationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    setActiveStep(0);
    onClose();
  };

  const renderStepContent = (step) => {
    // Implement the form content for each step
    // You can render different forms or components based on the active step
    // Example: if (step === 0) { return <Step1Form />; }

    return (
      <Box p={4}>
        <Text>Step {step + 1} Content</Text>
      </Box>
    );
  };

  return (
    <>
      <Button colorScheme="teal" mt={8} size="lg" onClick={onOpen}>
        Get Started
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={4} mb={4}>
              {steps.map((step, index) => (
                <Box key={index} p={2} borderRadius="full" bg={index === activeStep ? 'teal.500' : 'gray.200'}>
                  <Text color={index === activeStep ? 'white' : 'black'} fontWeight="bold">{step}</Text>
                </Box>
              ))}
            </HStack>

            <VStack mt={4} align="stretch">
              {renderStepContent(activeStep)}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={4} onClick={handlePrev} isDisabled={activeStep === 0}>
              Previous
            </Button>
            <Button colorScheme="teal" onClick={handleNext} isDisabled={activeStep === steps.length - 1}>
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegistrationModal;
