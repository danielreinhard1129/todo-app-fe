import React from 'react';
import Table1 from '../Components/Table1';

function Landing({ data, setData }) {
    return (
        <div>
            <Table1 data={data} setData={setData} />
        </div>
    );
}

export default Landing;