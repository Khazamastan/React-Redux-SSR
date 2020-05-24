import React, { Component } from "react";
import { Link } from "react-router-dom";
import TwoBlockLayout from "../../components/TwoBlockLayout";
import Card from "../../components/Card";
import Radio from "../../components/Radio";
import Map from "../../components/Map";
import A from "../../components/A";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import getTimeIntervals from "../../../utils/getTimeIntervals";
const radioOptions = [
  {
    label: "Pick-up",
    value: "pickup",
  },
  {
    label: "Delivery",
    value: "delivery",
  },
];

const getMinutesTody = () => {
  const d = new Date();
  const minutes = d.getMinutes();
  const hours = d.getHours();
  return hours * 60 + minutes;
};
const ChooseOrderTypeContent = () => {
  let timeIntervals = getTimeIntervals(30, getMinutesTody());
  const goToListPage = () => {};
  return (
    <div className="mt-40 flex-center flex-column">
      <Radio type={"horizontal"} options={radioOptions}></Radio>
      <div className="mt-20 flex-center">
        <div className="mr-20">
          <Dropdown list={timeIntervals} />
          {/* <Button type="bordred">1:06 PM (ASAP)</Button> */}
        </div>

        <Link to="/menu">
          <Button>Start Order</Button>
        </Link>
      </div>
      <p className="mt-20 flex-center">
        <A type={"primary"} extraClass={"pr-10"}>
          View Menu
        </A>
        <b>or</b>
        <A type={"primary"} extraClass={"pl-10"}>
          Buy Gift Card
        </A>
      </p>
    </div>
  );
};

const ChooseOrderType = () => {
  return (
    <Card
      headerClass={`flex-center`}
      header={() => (
        <p className="flex-center text-medium text-black text-bold">
          Choose Order Type
        </p>
      )}
      content={() => {
        return <ChooseOrderTypeContent />;
      }}
    />
  );
};
const ChooseType = () => {
  return (
    <div className="choose-type">
      <TwoBlockLayout
        leftSize={6}
        rightSize={6}
        leftContent={() => <ChooseOrderType></ChooseOrderType>}
        rightContent={() => <Map></Map>}
      >
        >
      </TwoBlockLayout>
    </div>
  );
};

export default ChooseType;
