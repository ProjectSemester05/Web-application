import { React } from "react";
import { Box, Text, Flex, Image, Stack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import "../../style/animation.css"

const CatalogueCard = ({ name, iCount, cCount, img }) => {
  const history = useHistory();
  return (
    <Flex
      width="full"
      mt={["10px", "0"]}
      backgroundColor="#E1DEF1"
      width={["80%", "350px"]}
      height={["160px", "200px"]}
      color="white"
      mb="0"
      flexDirection="column"
      p={3}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="22px"
      cursor="pointer"
      className = "inflate"
      onClick={() => {
        history.push("/catalogues");
      }}
    >
      <Flex justifyContent="space-around">
        <Box>
          <Text
            fontWeight="bold"
            fontSize={["20px", "25px"]}
            lineHeight="37px"
            color="black"
            mt={3}
          >
            {name}
          </Text>
          <Box height="1.5px" background="black"></Box>
        </Box>
        <Box>
          <Image src={img} height={["75px", "100px"]} w="auto" />
        </Box>
      </Flex>
      <Flex justifyContent="space-around" mt={["5px", "0"]}>
        <Stack isInline>
          <Text fontWeight="bold" color="black">
            {iCount}
          </Text>
          <Text color="#757171">Items</Text>
        </Stack>
        <Stack isInline>
          <Text fontWeight="bold" color="black">
            {cCount}
          </Text>
          <Text color="#757171">Sub Catalogues</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CatalogueCard;
