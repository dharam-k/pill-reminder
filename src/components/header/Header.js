import React from 'react';
import { Box, Flex, Heading, Link, Button } from '@chakra-ui/react';
import { DownloadIcon, EmailIcon } from '@chakra-ui/icons';

const Header = ({ isLoggedIn }) => {
  return (
    <Box bg="teal" py={4}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Heading as="h1" color="white" fontSize="xl">
          Logo
        </Heading>
        <Flex align="center">
          {isLoggedIn && (
            <Box mr={4}>
              <Link href="/profile" color="white" mr={2}>
                Profile
              </Link>
              <EmailIcon color="white" boxSize={5} />
            </Box>
          )}
          <Button leftIcon={<DownloadIcon />} colorScheme="white" variant="outline">
            Download App
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
