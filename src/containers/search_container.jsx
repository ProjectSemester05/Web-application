import { React } from "react";
import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import CatalogueCard from "../components/cards/catalogue";
import ItemContainer from "./items_container";
const SearchResult = () => {
  return (
    <Flex flexDir="column">
      <Box>
        <Box>
          <Text>Search Result</Text>
          <Divider />
          
        </Box>
      </Box>
      <Box>
        <Text>Catalogues</Text>
        <Divider />
        <Flex
            justifyContent={["center", "space-between"]}
            flexDirection={["column", "row"]}
            mx="20px"
          >
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
            <CatalogueCard
              name="Book Collection"
              iCount="21"
              cCount="6"
              img="/assets/images/book_collection.png"
            />
          </Flex>
      </Box>
      <Box>
        <Text>Items</Text>
        <Divider />
        <ItemContainer/>
      </Box>
    </Flex>
  );
};

export default SearchResult;
