import React from 'react';

const CardContent = ({ title, info, url }) => {
    return (
        <React.Fragment>
            <div className="img-container">
                <img src={url} />
            </div>
            <div className="card-title">
                {title}
                <div className="info">
                    {info}
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardContent;