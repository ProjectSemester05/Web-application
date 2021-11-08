import React, { useEffect, useState } from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import CatalogueCard from "../components/cards/catalogue";
import { CheckCircleIcon } from "@chakra-ui/icons";
import "../style/catalogues.css";
import Slider from "../components/slider";
import { getChildrenCatalogues } from "../api/catalogue";
import NewCatalogueCard from "../components/cards/new_catalogue";

const ChildrenCatalogueContainer = ({ increment, uuid }) => {
  const [childrenCatalogue, setChildrenCatalogue] = useState([]);
  const addChildrenCatalogue = (catalogue) => {
    setChildrenCatalogue([...childrenCatalogue, catalogue]);
  };

  const deleteCatalogue = (uuid) => {
    let newCatalogues = childrenCatalogue.filter((item) => item.UUID !== uuid);
    setChildrenCatalogue(newCatalogues);
  };

  const updateCatalogue = (data) => {
    let newCatalogues = childrenCatalogue.map((item) => {
      if (item.UUID === data.UUID) {
        item = { ...item, ...data };
      }
      return item;
    });
    setChildrenCatalogue(newCatalogues);
  };

  useEffect(() => {
    let result = {};
    async function fetchChildrenCatalogues() {
      result = await getChildrenCatalogues(uuid);

      if (result.hasOwnProperty("Catalogues")) {
        let newChildren = result.Catalogues;
        setChildrenCatalogue(newChildren);
        increment(1);
      }
    }

    fetchChildrenCatalogues();
  }, [uuid, increment]);

  return (
    <Flex flexDirection="column">
      <Text fontSize="22px" as="" ml={5}>
        <CheckCircleIcon w={5} h={5} mr={5} mb={1} />
        Sub Categories
      </Text>

      <Flex
        width="full"
        flexDirection="column"
        p="20px"
        data-testid="child-cat-cont"
      >
        {childrenCatalogue.length > 0 ? (
          <Slider
            components={[
              <NewCatalogueCard
                empty={false}
                addCatalogue={addChildrenCatalogue}
                pUUID={uuid}
              />,
              ...childrenCatalogue.map((cat) => (
                <CatalogueCard
                  uuid={cat.UUID}
                  name={cat.CatalogueName}
                  iCount="21"
                  cCount="6"
                  img="/assets/images/kitchen_items.png"
                  deleteCatalogue={deleteCatalogue}
                  key={cat.UUID}
                  updateCatalogue={updateCatalogue}
                  pUUID={uuid}
                  increment={increment}
                />
              )),
            ]}
            cardGap={"350px"}
          />
        ) : (
          <NewCatalogueCard
            empty={true}
            addCatalogue={addChildrenCatalogue}
            pUUID={uuid}
          />
        )}
      </Flex>
      <Box backgroundColor="#000000" mb="6" border="1px solid #000000" />
    </Flex>
  );
};

export default ChildrenCatalogueContainer;
