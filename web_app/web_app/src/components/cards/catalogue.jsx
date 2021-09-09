import { React } from "react";
import { Box, Text, Flex, Image, Stack } from "@chakra-ui/react";

const CatalogueCard = ({ name, iCount, cCount, img }) => {
  return (
    <Flex
      width="full"
      mt="0"
      backgroundColor="#E1DEF1"
      width="400px"
      height="200px"
      color="white"
      mb="0"
      flexDirection="column"
      p={3}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="22px"
    >
      <Box>
        <Flex justifyContent="space-around">
          <Box>
            <Text
              fontWeight="bold"
              fontSize="25px"
              lineHeight="37px"
              color="black"
              mt={3}
            >
              {name}
            </Text>
            <Box height="1.5px" background="black"></Box>
          </Box>
          <Box>
            <Image
              src={img}
              height="100px"
              w="auto"
            />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent="space-around">
          <Box>
            <Stack isInline>
              <Text fontWeight="bold" color="black">
                {iCount}
              </Text>
              <Text color="#757171">Items</Text>
            </Stack>
          </Box>
          <Box>
            <Stack isInline>
              <Text fontWeight="bold" color="black">
                {cCount}
              </Text>
              <Text color="#757171">Sub Catalogues</Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CatalogueCard;
