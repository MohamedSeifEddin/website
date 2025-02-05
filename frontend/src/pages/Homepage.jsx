// src/pages/Homepage.jsx
import { Box, Flex } from '@chakra-ui/react';
import Footer from '../components/footer';
import HomepageContent from '../components/HomePage/HomepageContent';

function Homepage() {
  return (
    <Flex direction="column" minH="100vh" bg="gray.900" className="background">
      {/* Main Content Section */}
      <Box flex="1">
        <HomepageContent />
        
      </Box>

      {/* Footer Section */}
      <Box >
       
        <Footer />
     
      </Box>
    </Flex>
  );
}

export default Homepage;
