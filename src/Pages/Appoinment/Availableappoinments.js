import { format } from 'date-fns/esm';
import React from 'react';

const Availableappoinments = ({selected, setSelected}) => {
    return (
        <div>
              <h4 className='text-center text-secondary text-xl'>AvailableAppoinment On {format(selected, 'PP')}</h4>
        </div>
    );
};

export default Availableappoinments;