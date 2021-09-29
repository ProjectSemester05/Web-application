import { React } from "react";
import { Box,Grid } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "../style/slider.css";

const Slider = ({components, cardGap}) => {
  return (
    <Box overflow="hidden">
      <Grid
        w="100%"
        templateColumns={`repeat(auto-fill,${cardGap})`}
        gridAutoColumns={`minmax(${cardGap}, 1fr))`}
        gridAutoFlow="column"
        padding="5px"
        gap={"16px"}
        overflowX="scroll"
        className="no-scrollbar"
      >
          {components.map(component => component)}
      </Grid>
    </Box>
  );
};

export default Slider;
