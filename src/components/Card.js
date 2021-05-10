import React, { useState, useEffect } from 'react';
import './Card.styles.css';
import CardContent from './CardContent';
import CardSkeleton from './CardSkeleton';
const Card = ({ title, info, delayFactor, delayTime, url, benefits }) => {
    const [toggle, setToggle] = useState(false);
    const [cardData, setCardData] = useState(<CardSkeleton />)
    const toggleCard = () => {
        setToggle(!toggle);
    }
    useEffect(() => {
        setTimeout(() => {
            setCardData(<CardContent
                title={title}
                info={info}
                url={url}
            />)
        }, parseInt(delayTime));
    }, [])

    return (
        <div className="card fadeUp" style={{ "animationDelay": delayFactor }} onClick={toggleCard}>
            <div className="card-content">
                {cardData}
            </div>
            <div className={`accordion-content ${toggle ? 'showCard' : 'hideCard'}`}>
                {benefits}
            </div>
        </div>
    )
}
export default Card;