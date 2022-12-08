import React, { useState } from 'react';
import { useEffect } from 'react';
import YogaCard from './YogaCard';

const Yoga = ({newTime}) => {
    const [yogas, setYogas] = useState(null);

    useEffect(() => {
        fetch('/yogaData.json')
            .then(res => res.json())
            .then(data => setYogas(data))
    }, []);

    return (
        <div className='px-5 py-2'>
            <h3 className='text-2xl font-bold mb-3 capitalize underline'>select yoga</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    yogas?.map(yoga => <YogaCard key={yoga.id} yoga={yoga} newTime={newTime}></YogaCard>)
                }

            </div>


        </div>
    );
}

export default Yoga;