import { React } from "react";
import { Flex } from "@chakra-ui/react";
import CatalogueCard from "../components/cards/catalogue";
import NewCatalogueCard from "../components/cards/new_catalogue";

const CatalogueContainer = () => {
  return (
    <Flex
      justifyContent={["center", "space-between"]}
      flexDirection={["column", "row"]}
    >
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
  );
};

export default CatalogueContainer;
