import React from "react";
import { Box, Text } from "@chakra-ui/react";

const UserManualPage = () => {
  return (
    <Box p="4">
      <Box p="4">
        <Text fontSize="2xl">1. Launch the skill</Text>
        <p>open virtual archive</p>
        <p>ask virtual archive to open</p>
        <p>
          -------------------------------------------------------------------------------------------------------------------------
        </p>
        <p>
          **If the skill is launched and you are going to execute a command, you
          don't need to use 'ask virtual archive to' Textse. You can just say
          the command after that.{" "}
        </p>
        <p></p>
        <p>
          -------------------------------------------------------------------------------------------------------------------------
        </p>
        <p>
          -------------------------------------------------------------------------------------------------------------------------
        </p>
        <p>
          You can refer the following commands and get some further
          understanding about the way skill operates.
        </p>
        <hr />
        <p>
          Let's say you are an enthusiastic reader who usess the public library
          a lot. So you need to add the books you borrowed from the library, in
          case you forget about them. Then you want to add reminders to each
          book you borrow to remember the return dates.
        </p>
        <p>
          Therefore, we are going to create a catalogue by the name of 'library'
          and add 'harry potter', 'lord of the rings' items to the catalogue.
          Then we are going to add a reminder to 'harry potter' item in
          'library' catalogue on '19th November'. You can add description for
          the reminder as 'return date'.
        </p>
        <p>
          -------------------------------------------------------------------------------------------------------------------------
        </p>
        <p>
          -------------------------------------------------------------------------------------------------------------------------
        </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">2. Create a catalogue</Text>
        <p>
          {" "}
          ask virtual archive to create catalogue by name library (recommended)
        </p>
        <p> ask virtual archive to create new catalog by the name of books</p>
        <p> ask virtual archive to create necessary tools</p>
        <p> ask virtual archive to create catalogue by name thesis</p>
        <p>** You can't create more than one catalogue with the same name</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">3. View All Catalogues Request</Text>
        <p> ask virtual archive to view all the catalogs (recommended)</p>
        <p> ask virtual archive to show all the catalogues</p>
        <p> ask virtual archive to list all the catalogues</p>
        <p> ask virtual archive to tell me the catalogues I have</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">4. View Catalogue of Item Request</Text>
        <p>
          ask virtual archive to tell me the catalogue of harry potter
          (recommended)
        </p>
        <p> ask virtual archive to view the catalogue name of harry potter</p>
        <p> ask virtual archive to tell the catalogue of harry potter</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">
          5. Delete a catalogue - (When it is a delete request, you have to say
          yes to confirm the execution)
        </Text>
        <p> ask virtual archive to delete catalog books (recommended)</p>
        <p>
          {" "}
          ask virtual archive to delete catalog by the name of necessary tools
        </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">6. Add Item Request</Text>
        <p>
          ask virtual archive to add harry potter to library saying adventure
          novel (recommended)
        </p>
        <p> ask virtual archive to add item</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">7. View Items of Catalogue Request</Text>
        <p> ask virtual archive to view items in library</p>
        <p> ask virtual archive to show items in library</p>
        <p> ask virtual archive to list the items in library</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">8. View Description of Item Request</Text>
        <p>
          ask virtual archive to tell the description of harry potter in library
          (recommended)
        </p>
        <p> ask virtual archive to tell the description of harry potter </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">9. Update Item Request</Text>
        <p>
          ask virtual archive to update description of harry potter in library
          into fantasy genre
        </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">
          10. Delete Item Request (When it is a delete request, you have to say
          yes to confirm the execution)
        </Text>
        <p>
          ask virtual archive to delete item lord of the rings from library
          (recommended)
        </p>
        <p> ask virtual archive to delete lord of the rings from library</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">11. Add Reminder Request</Text>
        <p>
          User: ask virtual archive to add reminder to harry potter in library
          saying return date
        </p>
        <p> Alexa: when is the date of the reminder for harry potter?</p>
        <p> User: tuesday / tomorrow / 19th of november / next monday </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">12. View Reminder of Item Request</Text>
        <p>
          ask virtual archive to show the reminder of harry potter in library{" "}
        </p>
        <p>
          ask virtual archive to view the reminder of harry potter in library
        </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">13. View Reminders for Today Request</Text>
        <p> ask virtual archive to list the reminders set for today</p>
        <p> ask virtual archive to view reminders for today</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">14. View Reminders for Next Few Days Request</Text>
        <p> ask virtual archive to view recent reminders</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">15. View Every Reminder Request</Text>
        <p> ask virtual archive to view every reminder</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">6. Update Reminder Request</Text>
        <p>
          User: ask virtual archive to update reminder of harry potter in
          library
        </p>
        <p> Alexa: what is the new reminder description for harry potter?</p>
      </Box>
      <Box p="4">
        <p>
          User: return date (description - if you don't want to change the
          description, you can say 'do not change the description')
        </p>
        <p> User: 10th of november /next monday (reminder date)</p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">
          17. Delete Reminder Request (When it is a delete request, you have to
          say yes to confirm the execution)
        </Text>
        <p>
          {" "}
          ask virtual archive to delete reminder of harry potter in library
        </p>
      </Box>
      <Box p="4">
        <Text fontSize="2xl">8. Help Intent Request</Text>
        <p> ask virtual archive to help</p>
      </Box>
    </Box>
  );
};

export default UserManualPage;
