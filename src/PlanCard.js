import React from 'react';
import checkmark from "./images/checkmark-sqaure.png";

function PlanCard({
    planName = "",
    planImage,
    planDesc = "",
    planPrice = "",
    planDuration = "",
    isCrrentPrice = true,
    planBenefits = []

}) {
    return (
        <div className='card_1'>
            <div className="top-conatiner">
                <img src={planImage} className='img-container' alt="failed to load" />
                <div className='text-container'>
                    <h1>{planName}</h1>
                    <p>{planDesc}</p>
                </div>
            </div>
            <div className='firstline'></div>
            <div className='second_box'>
                <div className='price_list'>
                    <h1>{planPrice}</h1>
                    <p>{planDuration}</p>
                </div>
                <button className={isCrrentPrice ? 'btn-current' : 'btn-upgrade'}>{isCrrentPrice ? 'Current' : 'Upgrade'}</button>
            </div>
            <div className='firstline'></div>
            <div className='list-container'>
                <ul className='ul_list'>
                    {planBenefits.map((point, index) => {
                        return <li key={index}>
                            <img src={checkmark} alt="checkmark" />
                            {point}
                        </li>
                    })}
                </ul>
                <div className='card_gradient'></div>
            </div>

        </div>
    )
}

export default PlanCard;