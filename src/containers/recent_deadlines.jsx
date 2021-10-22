import React, { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import SearchBar from "../components/forms/search";
import Slider from "../components/slider";
import RecentItem from "../components/cards/recent";
import { getReminders } from "../api/reminders";


const RecentDeadlines = () => {
  const [reminders, setReminders] = useState([]);
  const components = [
    <RecentItem
      name="Paint Bucket"
      catalogue="Garage Items"
      date="Sept 18"
      img="/assets/images/paint.png"
    />,

    <RecentItem
      name="Motor oil"
      catalogue="Garage Items"
      date="Sept 23"
      img="/assets/images/motor_oil.jpg"
    />,

    <RecentItem
      name="Battery"
      catalogue="Garage Items"
      date="Nov 18"
      img="/assets/images/battery.png"
    />,
    <RecentItem
      name="CS Assignment"
      catalogue="Assignment"
      date="Oct 21"
      img="/assets/images/cs_assignment.png"
    />,
    <RecentItem
      name="Da Vincis Daemons"
      catalogue="Books"
      date="June 06"
      img="/assets/images/book.jpg"
    />,
    <RecentItem
      name="Paint Bucket"
      catalogue="Garage Items"
      date="Sept 18"
      img="/assets/images/paint.png"
    />,
    <RecentItem
      name="Paint Bucket"
      catalogue="Garage Items"
      date="Sept 18"
      img="/assets/images/paint.png"
    />,
  ];

  useEffect(() => {
    let result = {};
    async function fetchReminders() {
      result = await getReminders();
      console.log(result);
      if (result.Reminders) {
        let components = result.Reminders.map((item) => (
          <RecentItem
            name="Paint Bucket"
            catalogue="Garage Items"
            date="Sept 18"
            img="/assets/images/paint.png"
          />
        ));
        setReminders(components);
      }
    }
    fetchReminders();
  }, []);
  return (
    <Flex width="full" py={5}>
      <Flex width="full" px="3">
        <Box flex="2" mx="2" overflowX="hidden" px="2">
          <Box>
            <SearchBar w="full" />
          </Box>
          <Text fontSize="24px" mt="4" mb="20px">
            Recent Deadlines
          </Text>
          <Slider components={components} cardGap={"200px"} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default RecentDeadlines;
