import React from 'react';
import background from '../../../assets/Home/CardCourse-sm.svg';
import calendar from '../../../assets/Home/Calendar.svg';
import Date from './Date';
function CardCourse() {
    return (
        <div className='w-full rounded-[8px] rounded-t-[18px] bg-white pb-[16.03px]'>
            <div className='w-full relative'>
                <button className='left-[14px] top-[11px] font-prox font-extrabold px-[12px] bg-button py-[2px] rounded-[3.33px] text-[10px] leading-[15px] absolute'>
                    A TIEMPO REAL
                </button>
                <img src={background} className='w-full' alt='' />
            </div>
            <div className='w-full font-prox  text-left  text-N100 px-[14px] flex flex-col items-start'>
                <h1 className='w-full pt-[11px] font-extrabold pb-[24px] text-[14px] leading-[18px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <div className='w-full flex text-[9px] pb-[11px] text-N90 leading-[12px] justify-between font-extrabold'>
                    <h2>Dictado por Kevin Urbina</h2>
                    <h2>9 Cupos disponibles</h2>
                </div>
                <p className='w-full text-N80 text-[12px] pb-[10px] leading-[14.4px] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ut duis urna feugiat pellentesque.
                    Lorem ipsum dolor sit amet.
                </p>
                <div className='w-full font-prox flex justify-end '>
                    <button className='bg-button-red font-bold text-[7px] py-[1.25px] px-[12.59px] rounded-[5px] text-white '>
                        En vivo
                    </button>
                </div>
                <div className='w-full font-prox flex justify-between pt-[4.36px]'>
                    <Date />
                    <button className='bg-button rounded-[5px] text-[14px] text-center leading-[24px] font-semibold text-white px-[14.4px] py-[3.33px]'>
                        Inscribirme
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardCourse;
