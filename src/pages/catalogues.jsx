import { React, useEffect, useState } from "react";
import AddItemPopup from "../components/additem_func";
import { Box, Text, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { Heading } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import CatalogueCard from "../components/cards/catalogue";
import { CheckCircleIcon } from "@chakra-ui/icons";
import "../style/catalogues.css";
import Slider from "../containers/slider";
import ItemContainer from "../containers/items_container";
import { useLocation } from 'react-router-dom';
import { getItems } from "../api/item";

const CataloguePage = ({name}) => {
  const location = useLocation();
	const {uuid} = location.state;
  const [items, setItems] = useState([])

  console.log(location.state);
  console.log(uuid);
  const components = [
    <CatalogueCard
      name="Kitchen Items"
      iCount="21"
      cCount="6"
      img="/assets/images/kitchen_items.png"
    />,
    <CatalogueCard
      name="Kitchen Items"
      iCount="21"
      cCount="6"
      img="/assets/images/kitchen_items.png"
    />,
    <CatalogueCard
      name="Book Collection"
      iCount="21"
      cCount="6"
      img="/assets/images/book_collection.png"
    />,
    <CatalogueCard
      name="Necessary Tools"
      iCount="21"
      cCount="6"
      img="/assets/images/book_collection.png"
    />,
  ];

  useEffect(() => {
    let result = {};

    async function fetchItems() {
      result = await getItems(uuid);
      setItems(result.Items);
      console.log(result.items)
    }
    fetchItems();
  }, []);
  return (
    <Flex flexDirection="column" position="relative">
      <Flex>
        <Header signed={true}/>
      </Flex>
      <Heading m={5} isTruncated>
        Kitchen Items
      </Heading>
      {/* <Divider /> */}
      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />

      <Text fontSize="22px" as="" ml={20}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Sub Categories
      </Text>

      <Flex width="full" flexDirection="column" p="20px">
        <Slider components={components} cardGap={"350px"}/>
      </Flex>

      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />

      <Text fontSize="22px" as="" ml={20} mb={5}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Items
      </Text>
      <AddItemPopup uuid={uuid}/>

      <ItemContainer/>
      <Flex mt="auto">
        <Footer minHeight="20px" />
      </Flex>
    </Flex>
  );
};

export default CataloguePage;
