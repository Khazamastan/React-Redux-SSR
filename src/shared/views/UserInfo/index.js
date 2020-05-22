import React from "react";
import TwoBlockLayout from "../../components/TwoBlockLayout";
import A from "../../components/A";


const Location = () => {
    return (<div className="pr-20">
        <div className="text-bold text-black text-small-title border-bottom-1 pb-20 mb-20">Location</div>
        <p className="text-medium mb-10 text-black">7529 South Hampton St.Austin, TX 72195</p>
        <p className="text-medium mb-10 text-black"><A extraClass="text-medium">Driving Directions</A> / 1.36 KM</p>
        <p className="text-medium mb-10 text-black">(813) 463-1600</p>
    </div>)
}

const Hours = () => {
    return <div className="pl-20">
        <div className="text-bold text-black text-small-title border-bottom-1 pb-20 mb-20">Today's Hours</div>
        <p className="flex justify-between mb-10">
            <span className="text-medium">Pickup</span>
            <span className="text-medium text-black text-bold">10:00 AM - 9:00 PM</span>
        </p>
        <p className="flex justify-between mb-10">
            <span className="text-medium">Delivery</span>
            <span className="text-medium text-black text-bold">11:00 AM - 8:00 PM</span>
        </p>
        <p><A extraClass="text-medium">See Full Schedule</A></p>
    </div>
}
const UserInfo = () => {
  return (
    <div className="user-info">
      <TwoBlockLayout
        leftSize={6}
        rightSize={6}
        leftContent={() => <Location></Location> }
        rightContent={() => <Hours></Hours> }
      >
        >
      </TwoBlockLayout>
    </div>
  );
};

export default UserInfo;
