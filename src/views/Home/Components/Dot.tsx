import React, { SyntheticEvent, useEffect, useState } from 'react';
interface props {
    state: number;
    item: number;
}
function Dot({ state, item }: props) {
    return (
        <canvas
            id={item.toString()}
            className={`rounded-full  w-[8px] h-[8px] ${item == state ? 'bg-button' : 'bg-N70'}`}
        />
    );
}

export default Dot;
