import { Box, Text, Button, Flex } from '@chakra-ui/react';

function Footer() {
  const handleContactClick = () => {
    window.location.href = 
    'mailto:mohamedseifeddin2003@gmail.com?subject=Contactaanvraag&body=Hallo, ik wil graag contact opnemen.';
  };

  return (
    <Box bg="#0d1117" color="white" py={10} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">
        Get in Touch
      </Text>
      <Text mt={2} fontSize="md">
        Moesten er vrae
      </Text>

      <Flex justify="center" mt={4}>
        <Button
          colorScheme="blue"
          size="lg"
          borderRadius="md"
          shadow="md"
          _hover={{ bg: 'blue.600' }}
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </Flex>

      <Box mt={6} borderTop="1px solid gray" pt={4}>
        <Text fontSize="xs">© 2025 Mohamed, All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
