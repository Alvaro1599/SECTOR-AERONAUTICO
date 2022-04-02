import React from 'react';
interface props {
    ico: string;
    title: string;
    text: string;
    other?: boolean;
}
function DetailsCard(props: props) {
    return (
        <div
            className={`w-full flex font-prox flex-col ${props.other
                ? 'pb-[84px] items-start'
                : 'pb-[60px] items-center'}  `}
        >
            <div className={`${props.other ? '' : 'pb-[32px]'}`}>
                <img src={props.ico} alt='' />
            </div>
            <h1
                className={` leading-[24px]${props.other
                    ? ' text-left text-24px font-extrabold text-transparent bg-clip-text bg-button font-prox pb-[14px]'
                    : ' text-20px text-24px font-prox font-extrabold pb-[11px]'} `}
            >
                {props.title}
            </h1>
            <p className={`${props.other ? 'text-left' : ''} text-[16px] leading-[24px] font-normal `}>{props.text}</p>
        </div>
    );
}

export default DetailsCard;
