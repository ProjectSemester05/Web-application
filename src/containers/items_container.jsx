import { React } from "react";
import { Box, Image, useToast } from "@chakra-ui/react";
import MaterialTable from 'material-table'
import tableIcons from "../utils/tableIcons"
import { deleteItem } from "../api/item";


const ItemContainer = ({items, func}) => {
  let toast = useToast();

  const tableColumns = [
    { title: "Image", field: "ImageUrl", type: "file",  width: "5%", render: item => <Image src={item.ImageUrl ? item.ImageUrl: "/assets/images/paint.png"} height="40px" my={2} ml={2}  w="auto" /> },
    { title: "Name", field: "ItemName", width: "10%"}, 
    { title: "Description", field: "Description", width: "80%",}, 
    { title: "Reminder", field: "Reminder", width: "5%", type:"date"}, 
  ];

  const tableOptions = {
  pageSize: 10,
  pageSizeOptions: [10, 30, 50]
}

const deleteFunc = async (UUID) => {
    let result = await deleteItem(UUID) 
    if (result.success) {
      toast({
        title: "Success",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      func(UUID)

    } else {
      toast({
        title: "Error during deletion.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box p={6}>
    <MaterialTable
      title=""
      columns={tableColumns}
      data={items}
      icons={tableIcons}
      options={tableOptions}
      editable={{
      onRowUpdate: (newData, oldData) =>func("1"),
      onRowDelete : (data) => deleteFunc(data.UUID)
      }}
      // actions={props.actions} 
      />
    </Box>
    // <Table
    //   variant="simple"
    //   mt={2}
    //   maxWidth="80vw"
    //   flexDirection="column"
    //   mb="0"
    //   border-radius="24px"
    //   backgroundColor="white"
    //   borderRadius="24px"
    //   border="1px solid #CCC9C9"
    //   boxSizing="border-box"
    // >
    //   <TableCaption></TableCaption>
    //   <Thead>
    //     <Tr>
    //       <Th>Image</Th>
    //       <Th>Item Name</Th>
    //       <Th>Description</Th>
    //       <Th>Reminder</Th>
    //       <Th textAlign="center">Edit/Delete</Th>
    //     </Tr>
    //   </Thead>

    //   <Tbody>
    //     {items.map(({UUID,ItemName, Description, ImageUrl}) => 
    //     <ItemBox
    //       UUID = {UUID}
    //       ItemName= {ItemName}
    //       Description={Description}
    //       img={ImageUrl ? ImageUrl: "/assets/images/paint.png"}
    //       reminder="2021-09-21"
    //       func  = {func}
    //     />
    //     )}
        
       
    //   </Tbody>
    // </Table>
  );
};

export default ItemContainer;
