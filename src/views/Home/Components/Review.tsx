import React from 'react';
import person from '../../../assets/Home/imageReview.svg';
function Review() {
    return (
        <div className='bg-N100 pb-[28px]  w-full'>
            <img src={person} alt=' ' className='w-full pb-[24px] ' />
            <p className='pb-[36px] px-[16px] text-left text-CP1 leading-[24px]'>
                “Estoy satisfecha con el nivel de profesionalismo de Brand Inteligente, las clases que tome del curso de
                Brand fueron con ejercicios a un nivel retador y que cambian mucho las perspectivas y refuerzan lo
                aprendido a nivel universidad.”
            </p>
            <canvas className='w-[48px] ml-[16px] h-[2px] bg-button  mb-[18px]' />
            <h1 className='text-left font-semibold px-[16px] text-[20px] leading-[28px] pb-[3px]'>Andres Garza</h1>
            <h3 className='text-left font-normal text-[14px] px-[16px] leading-[16.8px]'>Piloto de Latam</h3>
        </div>
    );
}

export default Review;
