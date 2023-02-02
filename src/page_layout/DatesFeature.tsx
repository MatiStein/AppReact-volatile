import React, { useState } from 'react'

const DatesFeature = (props:any) => {
    let yourDate = new Date();
    const date = yourDate.toISOString().split('T')[0];
    const [fromDate,setFromDate] = useState("")
    const [toDate,setToDate] = useState("")
    return (
    <div>
        <label htmlFor='from_date'>From Date</label>
        <input onChange={(e) => setFromDate(e.target.value)} type="date" id='from_date' name='from_date' />
        <label htmlFor='to_date'>To Date</label>
        <input placeholder='dd-mm-yyyy' onChange={(e) => setToDate(e.target.value)} type="date" id='to_date' name='to_date' defaultValue={date} />
        </div>
    )
}

export default DatesFeature