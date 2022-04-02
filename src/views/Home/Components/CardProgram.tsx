import React from 'react';
import Date from './Date';
import image from '../../../assets/Home/ImageProgram.svg';
import ico from '../../../assets/Home/iconProgram.svg';
import icon from '../../../assets/Home/calendaroutline.svg';

function CardProgram() {
    return (
        <div className='w-full bg-program text-left font-prox rounded-[8px] flex flex-col items-start px-[14px] '>
            <div className='w-full flex justify-center pb-[18px] relative'>
                <button className='left-0 top-[11px] font-prox font-extrabold px-[11.69px] bg-button py-[2px] rounded-[3.33px] text-[10px] leading-[15px] absolute '>
                    PROGRAMA
                </button>
                <img src={image} className='pt-[64px]' alt='' />
            </div>
            <h1 className='leading-[18px] text-[15px] pb-[15px] font-extrabold'>Private Pilot Ground</h1>
            <h2 className='pb-[9px] font-extrabold text-[10px]'>Dictado por Kevin Urbina</h2>
            <p className='font-normal text-[12px] leading-[14.4px]'>
                Desarrolla tu instrucción con contenido riguroso basado en metodologías estructuradas de acuerdo a los
                nuevos requerimientos de aprendizaje...
            </p>
            <div className='w-full flex justify-between pt-[22.45px]'>
                <img src={ico} alt='' />
                <button className='bg-button-red font-bold text-[8px] py-[1.25px] px-[12.59px] rounded-[5px] text-white '>
                    En vivo
                </button>
            </div>
            <div className='w-full flex justify-between pt-[4.36px] pb-[23px]'>
                <Date ico={icon} />
                <div className='bg-white px-[8px] py-[4px] flex   rounded-[3px]'>
                    <button className='text-center text-[8.88px] bg-white font-extrabold text-transparent bg-clip-text  bg-button'>
                        Matricularme
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProgram;
