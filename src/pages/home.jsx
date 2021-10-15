import { React, useState, useEffect } from "react";
import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import RecentItem from "../components/cards/recent";
import CatalogueCard from "../components/cards/catalogue";
import UserProfile from "../components/cards/profile";
import SearchBar from "../components/forms/search";
import NewCatalogueCard from "../components/cards/new_catalogue";
import { getCatalogues } from "../api/catalogue";
import { getReminders } from "../api/reminders";
import Slider from "../containers/slider";
import { getUser } from "../utils/amplifyConf";

const HomePage = () => {
  const [reminders, setReminders] = useState([]);
  const [catalogues, setCatalogues] = useState([]);
  const [user, setUser] = useState({});
  const components = [
    <RecentItem
      name="Paint Bucket"
      catalogue="Garage Items"
      date="Sept 18"
      img="/assets/images/paint.png"
    />,
   
    <RecentItem
      name="Motor oil"
      catalogue="Garage Items"
      date="Sept 23"
      img="/assets/images/motor_oil.jpg"
    />,

    <RecentItem
      name="Battery"
      catalogue="Garage Items"
      date="Nov 18"
      img="/assets/images/battery.png"
    />,
    <RecentItem
      name="CS Assignment"
      catalogue="Assignment"
      date="Oct 21"
      img="/assets/images/cs_assignment.png"
    />,
    <RecentItem
      name="Da Vincis Daemons"
      catalogue="Books"
      date="June 06"
      img="/assets/images/book.jpg"
    />,
     <RecentItem
      name="Paint Bucket"
      catalogue="Garage Items"
      date="Sept 18"
      img="/assets/images/paint.png"
    />,
    <RecentItem
      name="Paint Bucket"
      catalogue="Garage Items"
      date="Sept 18"
      img="/assets/images/paint.png"
    />,
  ];

  const addCatalogue = (catalogue) => {
    setCatalogues([...catalogues,catalogue])
  } 
  const deleteCatalogue = (uuid) => {
    let newCatalogues = catalogues.filter(item => item.UUID !== uuid)
    setCatalogues(newCatalogues)
  }

  useEffect(() => {
    let result = {};

    async function fetchCatalogues() {
      result = await getCatalogues();
      if (result.success) {
        setCatalogues(result.Items);
        console.log(result.Items);
      }
    }
    fetchCatalogues();
  }, []);

  useEffect(() => {
    let result = {};

    async function fetchUser() {
      result = await getUser();
      console.log(result);
      if (result.success && result.result) {
        if (result.result.hasOwnProperty("attributes")) {
          setUser(result.result.attributes);
        }
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    let result = {};

    async function fetchReminders() {
      result = await getReminders();
      console.log(result);
      if(result.Reminders){
      let components = result.Reminders.map(item =>
          <RecentItem
            name="Paint Bucket"
            catalogue="Garage Items"
            date="Sept 18"
            img="/assets/images/paint.png"
          /> 
      )
      setReminders(components);
      }
    }
    fetchReminders();
  }, []);

  return (
    <Flex flexDirection="column">
      <Header signed={true}/>
      <Flex width="full" py={5}>
        <Flex width="full" px="3">
          <UserProfile flex="1" name={user.name} />
          <Box flex="2" mx="2" overflowX="hidden" ml={["0", "100px"]} px="2">
            <Box>
              <SearchBar w="full" />
            </Box>
            <Text fontSize="24px" mt="4" mb="20px">
              Recent Deadlines
            </Text>
            <Slider components={components} cardGap={"200px"} />
          </Box>
        </Flex>
      </Flex>
      <Flex width="full" flexDirection="column" p="20px" pb="-20px">
        <Text fontSize="22px" mb="2">
          My Catalogues
        </Text>
        <Box backgroundColor="#E0E0E0" mb="6" border="2px solid #E0E0E0" />

      
        <Grid templateColumns={["repeat(1, 350px)","repeat(4, 350px)"]} gap={4}>
          <GridItem>
            <NewCatalogueCard addCatalogue={addCatalogue}/>
          </GridItem>
          {catalogues.map((catalogue) => (
            <GridItem>
            <CatalogueCard
              name={catalogue.CatalogueName}
              iCount="21"
              cCount="6"
              img={catalogue.ImageUrl}
              uuid={catalogue.UUID}
              deleteCatalogue ={deleteCatalogue}
            />
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default HomePage;
