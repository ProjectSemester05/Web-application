import { React } from "react";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<FaSearch color="gray.300" />}
      />
      <Input
        backgroundColor="white"
        placeholder="Search"
        w="full"
        background="rgba(255, 253, 253, 0.44)"
        boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="28px"
      />{" "}
    </InputGroup>
  );
};

export default SearchBar;
