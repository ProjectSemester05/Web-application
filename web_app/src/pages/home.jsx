import { React } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import Footer from "../components/footer";
import Header from "../components/header";
import RecentItem from "../components/cards/recent";
import CatalogueCard from "../components/cards/catalogue";
import UserProfile from "../components/cards/profile";
import SearchBar from "../components/forms/search";
import NewCatalogueCard from "../components/cards/new_catalogue";

const HomePage = () => {
  return (
    <Flex flexDirection="column" position="relative">
      <Flex>
        <Header />
      </Flex>
      <Flex width="full" py={5}>
        <Flex width="full" px="3">
          <UserProfile flex="1" ml="20px" />
          <Box flex="2" mx="2" ml="100px" px="2">
            <Box>
              <SearchBar w="full" />
            </Box>
            <Text fontSize="24px" mt="4" mb="20px">
              Recent Deadlines
            </Text>
            <Flex justifyContent="space-between">
              <RecentItem
                name="Paint Bucket"
                catalogue="Garage Items"
                date="Sept 18"
                img="/assets/images/paint.png"
              />
              <RecentItem
                name="Motor oil"
                catalogue="Garage Items"
                date="Sept 23"
                img="/assets/images/motor_oil.jpg"
              />
              <RecentItem
                name="Battery"
                catalogue="Garage Items"
                date="Nov 18"
                img="/assets/images/battery.png"
              />
              <RecentItem
                name="CS Assignment"
                catalogue="Assignment"
                date="Oct 21"
                img="/assets/images/cs_assignment.png"
              />
              <RecentItem
                name="Da Vincis Daemons"
                catalogue="Books"
                date="June 06"
                img="/assets/images/book.jpg"
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex width="full" flexDirection="column" p="20px">
        <Text fontSize="22px" mb="2">
          My Catalogues
        </Text>
        <Box backgroundColor="#E0E0E0" mb="6" border="2px solid #E0E0E0" />

        <Flex justifyContent="space-between">
          <NewCatalogueCard />
          <CatalogueCard
            name="Kitchen Items"
            iCount="21"
            cCount="6"
            img="/assets/images/kitchen_items.png"
          />
          <CatalogueCard
            name="Book Collection"
            iCount="21"
            cCount="6"
            img="/assets/images/book_collection.png"
          />
        </Flex>
      </Flex>
      <Flex>
        <Footer minHeight="20px" position="absolute" bottom="0" />
      </Flex>
    </Flex>
  );
};

export default HomePage;