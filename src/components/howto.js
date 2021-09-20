import React, { useState } from 'react';
import Data from './apiData';

const Howto= () =>{
    const [boxData] = useState(Data);
    return(
        <>
        <div className="row">
        {boxData.map((curElem) => {
            const{image,title,info} = curElem;
            return(
                <>
                    <div className="howtobox col-12 col-lg-4">
                    <img src={image} alt="howtoimg" />
                    <h4 className="mt-20">{title}</h4>
                    <p className="mt-10">{info}</p>
                    </div>               
                </>
            );
        })}
        </div>
        </>
    );
}
export default Howto;

