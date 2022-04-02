import React, { SyntheticEvent, useState } from 'react';
import Dot from './Dot';
import arrow from '../../../assets/Home/arrow.svg';
import arrowPainted from '../../../assets/Home/arrowPainted.svg';
function NavigationCardCourse() {
    const [ state, setState ] = useState<number>(0);
    function handleColorArrow(evt: SyntheticEvent<HTMLImageElement>) {
        if (evt.currentTarget.id == 'left') {
            if (state === 0) {
                return;
            } else {
                setState(state - 1);
            }
        } else {
            if (state == 2) {
                return;
            } else {
                setState(state + 1);
            }
        }
    }
    return (
        <div className='w-full flex items-center justify-between'>
            <img
                id='left'
                src={`${state === 0 ? arrow : arrowPainted}`}
                alt=''
                className={`${state === 0 ? '' : 'rotate-180'}`}
                onClick={handleColorArrow}
            />
            {/* al mapear con la api indicar el indice en el parametro de item de cada Dot */}
            <div className='flex gap-[18.62px]'>
                <Dot state={state} item={0} />
                <Dot state={state} item={1} />
                <Dot state={state} item={2} />
            </div>
            {/* //en ves del número 2 irá la cantidad de cards que se manda del api */}
            <img
                id='right'
                src={`${state === 2 ? arrow : arrowPainted}`}
                alt=''
                className={` ${state === 2 ? 'rotate-180' : ''}`}
                onClick={handleColorArrow}
            />
        </div>
    );
}

export default NavigationCardCourse;
