import React from 'react';
import bg from '../../../assets/Home/backgroundimage.svg';
import ico from '../../../assets/Home/clock.svg';
import Date from './Date';
function CardDetail() {
    return (
        <div className='w-full  px-[22px]'>
            <div className='w-full rounded-t-[8px] bg-white flex justify-center pb-[18px] relative'>
                <button className='left-[18px] top-[11px] font-prox font-extrabold px-[11.69px] bg-button py-[2px] rounded-[3.33px] text-[10px] leading-[15px] absolute '>
                    BÁSICO
                </button>
                <img src={bg} className='w-full rounded-[8px]' alt='' />
            </div>
            <h1 className='text-left  px-[14px] text-N100 bg-white leading-[18px] text-[15px] pb-[15px] font-extrabold'>
                Private Pilot Ground
            </h1>
            <h2 className=' text-left px-[14px] text-N90 bg-white pb-[9px] font-extrabold text-[10px]'>
                Dictado por Kevin Urbina
            </h2>
            <p className='text-left  px-[14px] text-N80 bg-white font-normal text-[12px] pb-[18px] leading-[14.4px]'>
                Desarrolla tu instrucción con contenido riguroso basado en metodologías estructuradas de acuerdo a los
                nuevos requerimientos de aprendizaje...
            </p>
            <div className=' px-[14px] rounded-b-[8px] bg-white w-full flex justify-between pt-[4.36px] pb-[23px]'>
                <div className={`flex 'text-white' text-N90 justify-between items-center text-[12px]`}>
                    <img src={ico} alt='' className={`w-[18px] h-[18px]`} />
                    <h1 className='pl-[8px] font-semibold leading-[14.4px] text-[12px]'>2 Horas</h1>
                </div>
                <div className='   rounded-[3px]'>
                    <button className='bg-button rounded-[5px] text-[14px] text-center leading-[24px] font-semibold text-white px-[11px] py-[4px]'>
                        Ver curso
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;
