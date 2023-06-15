import React from 'react';
import { Box } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box minH="calc(100vh - 120px)">
      {children}
    </Box>
  );
};

export default Main;
