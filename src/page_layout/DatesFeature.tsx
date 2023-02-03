import React, { useState } from 'react';
import "./DatesFeature.css";


const DatesFeature = (props:{
    fromDateSetter:Function,
    toDateSetter:Function,
    multiplierSetter:Function | null,
    addMultiplierFilter:boolean

}) => {
    let yourDate = new Date();
    const date = yourDate.toISOString().split('T')[0];
    const [multiplier,setMultiplier] = useState(2.3263)

    function sendSelfAnalyzeData(): void {
        throw new Error('Function not implemented.');
    }

    return (

        <><label className="" htmlFor='from_date'>From Date</label>
        <input onChange={(e) => props.fromDateSetter(e.target.value)} type="date" id='from_date' name='from_date' />
        <label htmlFor='to_date'>To Date</label>
        <input placeholder='dd-mm-yyyy' onChange={(e) => props.toDateSetter(e.target.value)} type="date" id='to_date' name='to_date' defaultValue={date} />
        {props.addMultiplierFilter && <> <label htmlFor='multiplier'>Multiplier</label><input onChange={(e) => props.multiplierSetter !== null && props.multiplierSetter(Number(e.target.value))} type="number" step="any" id='multiplier' name='multiplier' defaultValue={multiplier} /></>}
        </>
    )
}

export default DatesFeature