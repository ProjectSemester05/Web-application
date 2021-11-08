import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import SearchBar from "../components/forms/search";
import Slider from "../components/slider";
import RecentItem from "../components/cards/recent";
import { getReminders } from "../api/reminders";
import { formatDate } from "../utils/helper";

const RecentDeadlines = ({ increment }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    let result = {};
    async function fetchReminders() {
      result = await getReminders();

      if (result.Reminders) {
        let components = result.Reminders.map((item) => (
          <RecentItem
            name={item.ItemName}
            date={formatDate(item.Date)}
            img={item.ImageUrl}
          />
        ));

        setReminders(components);
        increment(1);

      }
    }
    setTimeout(() => {
      fetchReminders();
    }, 3000);
  }, [increment]);
  return (
    <Flex width="full" py={5}>
      <Flex width="full" px="3">
        <Box flex="2" mx="2" overflowX="hidden" px="2">
          <Box display="none">
            <SearchBar w="full" />
          </Box>
          <Text fontSize="24px" mt="4" mb="20px">
            Recent Deadlines
          </Text>
          <Box backgroundColor="#E0E0E0" mb="6" border="2px solid #E0E0E0" />

          {reminders.length > 0 ? (
            <Slider components={reminders} cardGap={"200px"} />
          ) : (
            <Flex
              bg="#eeeeee"
              flexDir="column"
              justifyContent="center"
              position="relative"
            >
              <Image src={"/assets/images/reminder.svg"} mx="auto" />
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default RecentDeadlines;
