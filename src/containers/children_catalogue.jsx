import  React, {useEffect, useState } from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import CatalogueCard from "../components/cards/catalogue";
import { CheckCircleIcon } from "@chakra-ui/icons";
import "../style/catalogues.css";
import Slider from "../components/slider";
import { getChildrenCatalogues } from "../api/catalogue";
import NewCatalogueCard from "../components/cards/new_catalogue";

const ChildrenCatalogueContainer = ({ uuid }) => {
  const [childrenCatalogue, setChildrenCatalogue] = useState([]);

  const addChildrenCatalogue = (catalogue) => {
    setChildrenCatalogue([
      ...childrenCatalogue,
      <CatalogueCard
        name={catalogue.CatalogueName}
        iCount="21"
        cCount="6"
        img="/assets/images/kitchen_items.png"
      />,
    ]);
  };

  useEffect(() => {
    let result = {};

    async function fetchChildrenCatalogues() {
      result = await getChildrenCatalogues(uuid);
      console.log(result);
      if (result.hasOwnProperty("Items")) {
        let newChildren = result.Items.map((cat) => (
          <CatalogueCard
            name={cat.CatalogueName}
            iCount="21"
            cCount="6"
            img="/assets/images/kitchen_items.png"
          />
        ));
        setChildrenCatalogue([newChildren]);
      }
    }
    fetchChildrenCatalogues();
  }, []);

  return (
    <Flex flexDirection="column">
      <Text fontSize="22px" as="" ml={20}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Sub Categories
      </Text>

      <Flex width="full" flexDirection="column" p="20px" data-testid="child-cat-cont">
        <Slider
          components={[
            <NewCatalogueCard
              addCatalogue={addChildrenCatalogue}
              pUUID={uuid}
            />,
            ...childrenCatalogue,
          ]}
          cardGap={"350px"}
        />
      </Flex>
      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />
    </Flex>
  );
};

export default ChildrenCatalogueContainer;
