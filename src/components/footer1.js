import React, { useState } from 'react';

var showHeading;

const Foot1= () =>{
    const [boxData] = useState(Foot1Data);
    return(
        <>
       <div class="row">
        {boxData.map((curElem) => {
            const{url,heading,item1,item2,item3,item4,item5} = curElem;
            showHeading = heading;
            return(
            <>
                <div class="col-10 col-lg-3">
                <ul>
            {showHeading ? (<li><h5 class="grey mt-20 mb-10">{heading}</h5></li>) : (<li className="mt-20 mb-10">&nbsp;</li>)}            
              <li><a href={url}>{item1}</a></li>
              <li><a href={url}>{item2}</a></li>
              <li><a href={url}>{item3}</a></li>
              <li><a href={url}>{item4}</a></li>
              <li><a href={url}>{item5}</a></li>
            </ul>
                </div>             
            </>
            );
        })}
        </div>
        </>
    );
}

const Foot1Data = [
    {
        id:1,
        url: "#",
        heading: "WE DELIVER TO",
        item1: "Abohar",
        item2: "Adilabad",
        item3: "Adityapur",
        item4: "Adoni",
        item5: "Agartala",
    },
    {
        id:2,
        url: "#",
        heading: 0,
        item1: "Dausa",
        item2: "Davanagere",
        item3: "Dehradun",
        item4: "Dehri",
        item5: "Delhi",
    },
    {
        id:3,
        url: "#",
        heading: 0,
        item1: "Kishanganj",
        item2: "Kishangarh",
        item3: "Kochi",
        item4: "Kodaikanal",
        item5: "Kohima",
    },
    {
        id:4,
        url: "#",
        heading: 0,
        item1: "Pudukkottai",
        item2: "Pune",
        item3: "Puri",
        item4: "Purnea",
        item5: "Purulia",
    },
]
export default Foot1;