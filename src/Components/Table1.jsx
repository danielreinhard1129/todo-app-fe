import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
} from '@chakra-ui/react';


function Table1(props) {

    const btnDelete = (idx) => {
        let temp = [...props.data];
        temp.splice(idx, 1);
        props.setData(temp);
    }

    const printRow = () => {
        return props.data.map((value, index) => {
            return (
                <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{value.date} </Td>
                    <Td>{value.todo} </Td>
                    <Td>{value.location}</Td>
                    <Td>{value.note} </Td>
                    <Td>{value.status} </Td>
                    <Td>
                        <Button mr="1" color="white" bg="red" onClick={() => btnDelete(index)}>Delete</Button>
                        <Button bg="yellow.400" isDisabled='true'>Edit</Button>
                    </Td>
                </Tr>
            )
        })
    }



    return (
        <TableContainer mt="5">
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>DATE</Th>
                        <Th>TO DO</Th>
                        <Th>LOCATION</Th>
                        <Th>NOTE</Th>
                        <Th>STATUS</Th>
                        <Th>ACTION</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {printRow()}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default Table1;