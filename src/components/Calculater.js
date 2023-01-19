import React, { useMemo, useState } from 'react';
const hardCalulate = (number) => {
    console.log('복잡한 계산');
    for(let i=0; i<1000000000; i++){}
    return number + 100000;
}
const easyCalulate = (number) => {
    console.log('단순한 계산');
    return number + 1;
}
const Calculater = () => {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);

    const hardSum = useMemo(()=>{ 
        return hardCalulate(number1)},[number1]) ;
    const easySum = useMemo(()=>{
        return easyCalulate(number2);
    },[number2]) 
    return (
        <div>
            <h3>복잡한계산기</h3>
            <input type="number"
            value={number1}
            onChange={(e)=>setNumber1(Number(e.target.value))} />
            <span> + 100000 = {hardSum}</span>
            <h3>단순한계산기</h3>
            <input type="number"
            value={number2}
            onChange={(e)=>setNumber2(Number(e.target.value))} />
            <span> + 1 = {easySum}</span>
        </div>
    );
};

export default Calculater;
