import React, { useState } from 'react';
var showHeading = 1;

const Foot= () =>{
    const [boxData] = useState(FootData);
    return(
        <>
       <div class="row">
        {boxData.map((curElem) => {
            const{url,heading,item1,item2,item3,item4,item5,item6,item7,item8} = curElem;
            showHeading = heading;
            return(
            <>
                <div class="col-10 col-lg-3">
                <ul>
            {showHeading? <li><h5 class="grey mt-20 mb-10">{heading}</h5></li> : <li>&nbsp;</li>}            
              <li><a href={url}>{item1}</a></li>
              <li><a href={url}>{item2}</a></li>
              <li><a href={url}>{item3}</a></li>
              <li><a href={url}>{item4}</a></li>
              <li><a href={url}>{item5}</a></li>
              <li><a href={url}>{item6}</a></li>
              <li><a href={url}>{item7}</a></li>
              <li><a href={url}>{item8}</a></li>
            </ul>
                </div>             
            </>
            );
        })}
        <div className="col-12 col-lg-3">
            <ul>
            <li><a href="google#"><img class="buttimg mt-40 appbutton" src="./images/play.png" alt="playstore" /></a></li>
            <li><a href="apple#"><img class="buttimg mt-10 appbutton" src="./images/appstore.png" alt="applestore" /></a></li>
            </ul>
        </div>
        </div>
        </>
    );
}

const FootData = [
    {
        id:1,
        url: "#",
        heading: "COMPANY",
        item1: "About Us",
        item2: "Team",
        item3: "Careers",
        item4: "Swiggy Blog",
        item5: "Bug Bounty",
        item6: "Swiggy Super",
        item7: "Swiggy Corporate",
        item8: "Swiggy Instamart",
    },
    {
        id:2,
        url: "#",
        heading: "CONTACT",
        item1: "Help & Support",
        item2: "Partner with us",
        item3: "Ride with us",
        item4: "",
        item5: "",
        item6: "",
        item7: "",
        item8: "",
    },
    {
        id:3,
        url: "#",
        heading: "LEGAL",
        item1: "Terms & Conditions",
        item2: "Refund & Cancellation",
        item3: "Privacy Policy",
        item4: "Cookie Policy",
        item5: "Offer Terms",
        item6: "Phishing & Fraud",
        item7: "",
        item8: "",
    },
]
export default Foot;