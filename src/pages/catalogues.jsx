import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { Heading } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/catalogues.css";
import ItemContainer from "../containers/items_container";
import { useLocation } from "react-router-dom";
import ChildrenCatalogueContainer from "../containers/children_catalogue";

const CataloguePage = () => {
  const location = useLocation();
  const { uuid, catalogueName } = location.state;

  return (
    <Flex flexDirection="column" position="relative">
      <Header signed={true} />
      <Flex flexDirection="column" p="5">
        <Heading m={5} isTruncated>
          {catalogueName}
        </Heading>
        <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />
        <ChildrenCatalogueContainer uuid={uuid} />
        <ItemContainer uuid={uuid} />
        <Footer minHeight="20px" />
      </Flex>
    </Flex>
  );
};

export default CataloguePage;
