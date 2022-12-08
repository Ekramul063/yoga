import React from 'react';

const Blogs = () => {
    return (
        <div className='px-5 my-14 '>
            <h3 className='text-3xl  text-center font-bold mb-10 capitalize '>Blogs </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="p2 border border-spacing-2 p-4">
                    <h1 className='text-blue-800 mb-2 text-xl font-bold'>How does react work?</h1>
                    <p className='font-semibold'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
                </div>
                <div className="p2 border border-spacing-2 p-4">
                    <h1 className='text-blue-800 mb-2 text-xl font-bold'>what is the difference between react state and props ?</h1>
                    <p className='font-semibold'>props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes.</p>
                </div>
                <div className="p2 border border-spacing-2 p-4">
                    <h1 className='text-blue-800 mb-2 text-xl font-bold'>What is the use of useEffect other than loading data?</h1>
                    <p className='font-semibold'>Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;