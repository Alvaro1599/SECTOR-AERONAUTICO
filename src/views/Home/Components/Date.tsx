import React from 'react';
import calendar from '../../../assets/Home/Calendar.svg';
interface props {
    ico?: string;
}
function Date(props: props) {
    return (
        <div
            className={`flex ${props.ico ? 'text-N90' : 'text-white'}text-N90 justify-between items-center text-[12px]`}
        >
            <img src={props.ico ? props.ico : calendar} alt='' className={`w-[18px] h-[18px]`} />
            <h1 className='pl-[8px] font-semibold leading-[14.4px] text-[12px]'>Inicio: 30/09/2021</h1>
        </div>
    );
}

export default Date;
