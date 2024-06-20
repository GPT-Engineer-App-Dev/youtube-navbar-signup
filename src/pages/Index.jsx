import { Box, Container, Flex, VStack, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navbar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Image src="/logo.png" alt="Logo" boxSize="40px" />
        </Box>
        <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
          Sign Up
        </Button>
      </Flex>

      <Flex>
        {/* Sidebar */}
        <Box as="aside" w="20%" bg="gray.100" p={4}>
          <VStack align="start" spacing={4}>
            <Text>Home</Text>
            <Text>Trending</Text>
            <Text>Subscriptions</Text>
            <Text>Library</Text>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box as="main" w="80%" p={4}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {/* Video Thumbnails */}
            <GridItem>
              <Box bg="gray.200" p={4} borderRadius="md">
                <Image src="/video-thumbnail1.jpg" alt="Video 1" />
                <Text mt={2}>Video Title 1</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="gray.200" p={4} borderRadius="md">
                <Image src="/video-thumbnail2.jpg" alt="Video 2" />
                <Text mt={2}>Video Title 2</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="gray.200" p={4} borderRadius="md">
                <Image src="/video-thumbnail3.jpg" alt="Video 3" />
                <Text mt={2}>Video Title 3</Text>
              </Box>
            </GridItem>
            {/* Add more GridItems for additional videos */}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;