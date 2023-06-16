import React, { useEffect, useState } from 'react';
import { Box, Flex, Link, Button, Image } from '@chakra-ui/react';
import { DownloadIcon, EmailIcon } from '@chakra-ui/icons';
import logo from "../../assets/images/logo2.jpg"

const Header = ({ isLoggedIn }) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(60);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  useEffect(() => {
    const handleResize = () => {
      setHeaderHeight(isScrolled ? 90 : 70);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isScrolled]);

  return (
    <Box  bg={isScrolled ? '#e0dadc' : '#d2bdbc'}       
          position="sticky"
          top={0}
          zIndex="sticky"
          transition="all 0.3s ease-in-out"
          height={`${headerHeight}px`}
          transformOrigin="top center"  style={{borderBottom: "1px solid #6e6465"}}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Link to="/">
          <Image src={logo} height={65} />
        </Link>
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
