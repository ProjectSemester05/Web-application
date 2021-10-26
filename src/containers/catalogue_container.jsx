import  React, {useEffect, useState}  from "react";
import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import CatalogueCard from "../components/cards/catalogue";
import NewCatalogueCard from "../components/cards/new_catalogue";
import { getCatalogues } from "../api/catalogue";

const CatalogueContainer = () => {

  const [catalogues, setCatalogues] = useState([
    { CatalogueName: "Gate", ImageUrl: "", UUID: 1 },
  ]);
  const addCatalogue = (catalogue) => {
    setCatalogues([...catalogues, catalogue]);
  };
  const deleteCatalogue = (uuid) => {
    let newCatalogues = catalogues.filter((item) => item.UUID !== uuid);
    setCatalogues(newCatalogues);
  };
  
  const updateCatalogue = (data) => {
    let newCatalogues = catalogues.map((item) => {
      if(item.UUID === data.UUID){
        item = {...item, ...data}
      }
      return item  
    });
    setCatalogues(newCatalogues);
  };



  useEffect(() => {
    let result = {};

    async function fetchCatalogues() {
      result = await getCatalogues();
      // console.log(JSON.stringify(result));
      if (result.success) {
        setCatalogues(result.Catalogues);
      }
     
    }
    fetchCatalogues();
  }, []);

  return (
    <Flex width="full" flexDirection="column" p="20px" pb="-20px">
        <Text fontSize="22px" mb="2">
          My Catalogues
        </Text>
        <Box backgroundColor="#E0E0E0" mb="6" border="2px solid #E0E0E0" />
        <Grid templateColumns={["repeat(1, 350px)","repeat(4, 350px)"]} gap={4} data-testid="cat-cards">
          <GridItem>
            <NewCatalogueCard addCatalogue={addCatalogue}/>
          </GridItem>
          {catalogues.map((catalogue) => (
            <GridItem key={catalogue.UUID}>
            <CatalogueCard
              name={catalogue.CatalogueName}
              iCount="21"
              cCount="6"
              img={catalogue.ImageUrl}
              uuid={catalogue.UUID}
              deleteCatalogue ={deleteCatalogue}
              updateCatalogue ={updateCatalogue}
            />
            </GridItem>
          ))}
        </Grid>
      </Flex>
  );
};

export default CatalogueContainer;
