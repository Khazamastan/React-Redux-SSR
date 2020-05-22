import React, { Component } from "react";
import TwoBlockLayout from "../../components/TwoBlockLayout"
import Card from "../../components/Card"
import Radio from "../../components/Radio";

const Map = () => {
    return <h1>Left</h1>
}

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


const ChooseOrderTypeContent = () => {
    return (<div className="mt-40 flex-center flex-column">
                <Radio type={'horizontal'} options={radioOptions}></Radio>
                <p className="mt-20 flex-center">
                    <a className="link-primary">View Menu</a> 
                    <b>or</b> 
                    <a className="link-primary">Buy Gift Card</a>
                </p>
            </div>);
}
const ChooseOrderType = () => {
    return <Card 
        headerClass={`flex-center`} 
        header={() => <p className="flex-center text-medium text-black text-bold">Choose Order Type</p>}
        content={() => {
            return (<ChooseOrderTypeContent/>)
        }}
        />
    
}
const ChooseType = () => {
    return (<div className="choose-type">
        <TwoBlockLayout
            leftSize={6}
            rightSize={6}
            leftContent={() => <ChooseOrderType></ChooseOrderType>}
            rightContent={() => <Map></Map>}>
            >
        </TwoBlockLayout>
    </div>)
}

export default ChooseType;