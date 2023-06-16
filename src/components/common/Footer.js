import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" py={4} textAlign="center">
      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} Pill Reminder. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
