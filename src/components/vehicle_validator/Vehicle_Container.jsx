import React from "react";
import Header from "./Heador";
import ParkingMap from "./ParkingMap";
import SearchBox from "./SearchBox";
import ValidationBox from "./ValidationBox";
import AddressBox from "./AddressBox";
import BottomNav from "./BottomNav";

function Vehicle_Container() {
    return (
        <div className="vehicle-container">
            <Header/>
            <ParkingMap/>
            <SearchBox/>
            <ValidationBox/>
            <AddressBox/>
            <BottomNav/>

        </div>

    )
}

export default Vehicle_Container;