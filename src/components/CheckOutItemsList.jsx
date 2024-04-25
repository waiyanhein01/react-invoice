import React from "react";
import { Button, Table } from "flowbite-react";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";
import List from "./List";
const CheckOutItemsList = ({ items, removeItem, updateQuantity }) => {
  const total = items.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className=" text-end">Price</Table.HeadCell>
          <Table.HeadCell className=" text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className=" text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List updateQuantity={updateQuantity} removeItem={removeItem} key={item.id} item={item} />
          ))}

          {items.length === 0 && (
            <Table.Row>
              <Table.Cell
                colSpan={5}
                className="whitespace-nowrap text-center font-medium text-gray-900 dark:text-white"
              >
                There is no record.
              </Table.Cell>
            </Table.Row>
          )}

          <Table.Row>
            <Table.Cell className=" text-center" colSpan={3}>
              Total
            </Table.Cell>
            <Table.Cell className=" text-end">${total.toFixed(2)}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemsList;
