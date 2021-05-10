import React from 'react';
import './CardSkeleton.styles.css';

const CardSkeleton = () => {
    return (
        <div className="skeleton-section">
            <div className="img-container">
            </div>
            <div className="skeleton-container">

                <div className="card-title">
                    <div className="heading-skeleton"></div>
                    <div className="info">
                        <div className="heading-skeleton"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton;