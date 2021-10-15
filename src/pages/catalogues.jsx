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
import { getChildrenCatalogues} from "../api/catalogue"
import NewCatalogueCard from "../components/cards/new_catalogue";

const CataloguePage = () => {
  const location = useLocation();
	const {uuid, catalogueName} = location.state;
  const [items, setItems] = useState([])
  const [childrenCatalogue, setChildrenCatalogue] = useState([])
  const addChildrenCatalogue = (catalogue) => {
    setChildrenCatalogue([...childrenCatalogue,
    <CatalogueCard
           name={catalogue.CatalogueName}
          iCount="21"
          cCount="6"
          img="/assets/images/kitchen_items.png"
        />
    ])
  } 
  

  const addItem = (item) => {
    setItems([...items,item])
  } 
  const deleteItem = (uuid) => {
    let newItems = items.filter(item => item.UUID !== uuid)
    setItems(newItems)
  }

  const components = [
  ];

  useEffect(() => {
    let result = {};
    async function fetchItems() {
      result = await getItems(uuid);

      setItems(result.Items);
    }
    fetchItems();
  }, []);

  useEffect(() => {
    let result = {};

    async function fetchChildrenCatalogues() {
      result = await getChildrenCatalogues(uuid);
      console.log(result);
      let newChildren = result.Items.map((cat) => (
        <CatalogueCard
           name={cat.CatalogueName}
          iCount="21"
          cCount="6"
          img="/assets/images/kitchen_items.png"
        />
      ))
      setChildrenCatalogue([newChildren]);
    }
    fetchChildrenCatalogues();
  }, []);

  return (
    <Flex flexDirection="column" position="relative">
      <Flex>
        <Header signed={true}/>
      </Flex>
      <Flex flexDirection="column" p="5">
      <Heading m={5} isTruncated>
        {catalogueName}
      </Heading>
      {/* <Divider /> */}
      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />

      <Text fontSize="22px" as="" ml={20}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Sub Categories
      </Text>

      <Flex width="full" flexDirection="column" p="20px">
            
        <Slider components={[<NewCatalogueCard addCatalogue={addChildrenCatalogue} pUUID={uuid}/>, ...childrenCatalogue]} cardGap={"350px"}/>
      </Flex>

      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />

      <Text fontSize="22px" as="" ml={20} mb={5}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Items
      </Text>
      <AddItemPopup uuid={uuid} func={addItem}/>

      <ItemContainer items={items} func={deleteItem}/>
      <Flex mt="auto">
        <Footer minHeight="20px" />
      </Flex>
      </Flex>
    </Flex>
  );
};

export default CataloguePage;
