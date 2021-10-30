import React, {useState} from "react";
import { Box, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { Heading } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/catalogues.css";
import ItemContainer from "../containers/items_container";
import { useLocation } from "react-router-dom";
import ChildrenCatalogueContainer from "../containers/children_catalogue";
import Loader from "../components/loader";

const CataloguePage = () => {
  const location = useLocation();
  const { uuid, catalogueName } = location.state;
  const [loadingCounter1, setLoadingCounter1] = useState(0);
  const [loadingCounter2, setLoadingCounter2] = useState(0);
  const incrementLoading1 = () => {
    let newVal = loadingCounter1 + 1;
    setLoadingCounter1(newVal);
  }
  const incrementLoading2 = () => {
    let newVal = loadingCounter2 + 1;
    setLoadingCounter2(newVal);
  }

  return (
    <Flex flexDirection="column" position="relative"  overflow={loadingCounter1+loadingCounter2 ===2 ? "auto":"hidden"} maxH={loadingCounter1+loadingCounter2 ===2 ? "auto":"100vh"}>
      {loadingCounter1 + loadingCounter2< 2 && <Loader />}
      
      <Header signed={true} />
      <Flex flexDirection="column" p="5">
        <Heading m={5} isTruncated>
          {catalogueName}
        </Heading>
        <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />
        <ChildrenCatalogueContainer uuid={uuid} increment={incrementLoading1}/>
        <ItemContainer uuid={uuid} increment={incrementLoading2}/>
        <Footer minHeight="20px" />
      </Flex>
    </Flex>
  );
};

export default CataloguePage;
