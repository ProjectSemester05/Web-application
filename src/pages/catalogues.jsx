import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { Heading } from "@chakra-ui/react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../style/catalogues.css";
import ItemContainer from "../containers/items_container";
import { useLocation, useHistory } from "react-router-dom";
import ChildrenCatalogueContainer from "../containers/children_catalogue";
import Loader from "../components/loader";

const CataloguePage = () => {
  const location = useLocation();
  const { uuid, catalogueName } = location.state;
  console.log(uuid);
  console.log(catalogueName);
  const [loadingCounter1, setLoadingCounter1] = useState(0);
  const [loadingCounter2, setLoadingCounter2] = useState(0);
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      if (history.action === "POP") {
        setLoadingCounter1(0);
        setLoadingCounter2(0);
      }
    });
  }, [history]);
  return (
    <Flex
      flexDirection="column"
      position="relative"
      overflow={loadingCounter1 + loadingCounter2 >= 2 ? "auto" : "hidden"}
      maxH={loadingCounter1 + loadingCounter2 >= 2 ? "auto" : "100vh"}
    >
      {loadingCounter1 + loadingCounter2 < 2 && <Loader />}

      <Header signed={true} />
      <Flex flexDirection="column" p="5">
        <Heading m={5} isTruncated>
          {catalogueName}
        </Heading>
        <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />
        <ChildrenCatalogueContainer
          uuid={uuid}
          increment={setLoadingCounter1}
        />
        <ItemContainer uuid={uuid} increment={setLoadingCounter2} />
        <Footer minHeight="20px" />
      </Flex>
    </Flex>
  );
};

export default CataloguePage;
