import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import Availableappoinments from './Availableappoinments';

const Appoinment = () => {
    const [selected, setSelected] =useState(new Date());
    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <Availableappoinments selected={selected} setSelected={setSelected}></Availableappoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;