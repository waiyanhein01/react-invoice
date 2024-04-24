import React from "react";
import { Button, Table } from "flowbite-react";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";
const CheckOutItemsList = () => {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className=" text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className=" text-end">Price</Table.HeadCell>
          <Table.HeadCell className=" text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell className=" text-end">50</Table.Cell>
            <Table.Cell className=" text-end">
              <div className=" flex justify-end gap-2 items-center">
                <Button size="xs" color="gray">
                  {/* <HiMiniMinus /> */} -
                </Button>
                <span>3</span>
                <Button size="xs" color="gray">
                  {/* <HiMiniPlus /> */} +
                </Button>
              </div>
            </Table.Cell>
            <Table.Cell className=" text-end">$150</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                {/* <HiTrash className=" text-red-600" /> */} Remove
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemsList;