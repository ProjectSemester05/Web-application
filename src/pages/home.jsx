import { React } from "react";
import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import "@fontsource/montserrat";
import Footer from "../components/footer";
import Header from "../components/header";
import RecentItem from "../components/cards/recent";
import CatalogueCard from "../components/cards/catalogue";
import UserProfile from "../components/cards/profile";
import SearchBar from "../components/forms/search";
import NewCatalogueCard from "../components/cards/new_catalogue";
import "../style/slider.css";

const HomePage = () => {
  return (
    <Flex flexDirection="column">
      <Header />
      <Flex width="full" py={5}>
        <Flex width="full" px="3">
          <UserProfile flex="1" />
          <Box flex="2" mx="2" overflowX="hidden" ml={["0", "100px"]} px="2">
            <Box>
              <SearchBar  w="full"/>
            </Box>
            <Text fontSize="24px" mt="4" mb="20px">
              Recent Deadlines
            </Text>
            <Box overflow="hidden">
              <Grid
                w="100%"
                templateColumns="repeat(auto-fill,200px)"
                gridAutoColumns="minmax(200px, 1fr))"
                gridAutoFlow="column"
                padding="5px"
                gap={"16px"}
                overflowX="scroll"
                className="no-scrollbar"
              >
                <RecentItem
                  name="Paint Bucket"
                  catalogue="Garage Items"
                  date="Sept 18"
                  img="/assets/images/paint.png"
                />
                <RecentItem
                  name="Paint Bucket"
                  catalogue="Garage Items"
                  date="Sept 18"
                  img="/assets/images/paint.png"
                />
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
              </Grid>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex width="full" flexDirection="column" p="20px" pb="-20px">
        <Text fontSize="22px" mb="2">
          My Catalogues
        </Text>
        <Box backgroundColor="#E0E0E0" mb="6" border="2px solid #E0E0E0" />

        <Flex justifyContent={["center","space-between"]} flexDirection={["column", "row"]}>
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
          <CatalogueCard
            name="Book Collection"
            iCount="21"
            cCount="6"
            img="/assets/images/book_collection.png"
          />
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default HomePage;
