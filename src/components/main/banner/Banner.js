import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import backgroundImage from '../../../assets/images/banner.jpg';
import RegistrationModal from '../modal/RegistrationModal';

const Banner = () => {
    return (
      <Box
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        minHeight="600px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        px={8}
        pl={16}
      >
        <Box textAlign="left" maxWidth="600px">
          <Heading as="h1" size="2xl" color="black" fontWeight="600" fontFamily="Cedarville Cursive, cursive" mb={4}>
            Welcome to Pill Reminder App
          </Heading>
          <Text fontSize="lg" color="white">
            Never miss a dose with our intuitive pill reminder app. Stay on top of your medications
            and improve your health.
          </Text>
          <Text fontSize="lg" color="white" mt={4}>
            Download now and take control of your health!
          </Text>
          
          <RegistrationModal />
         
          <Button
            colorScheme="teal"
            size="lg"
            ml={8}
            mt={8}
            onClick={() => {
                // Handle button click
            }}
            >
            Download App
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default Banner;
