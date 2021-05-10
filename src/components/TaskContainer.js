import React from 'react';
import Card from './Card';
import './TaskContainer.styles.css'
const TaskContainer = () => {
    const cardDataStore = [
        {
            id: '1',
            title: 'Reading',
            info: "Enhance your reading ability",
            url: 'https://img.icons8.com/color/96/000000/open-book--v2.png',
            benefits: 'Reading is important because it develops our thoughts, gives us endless knowledge and lessons while keeping our minds active. Books can hold and keep all kinds of information, stories, thoughts and feelings unlike anything else in this world. The importance of a book to help us learn and understand things cannot be underestimated'
        },
        {
            id: '2',
            title: 'Exercise',
            info: "Enhance your Physical ability",
            url: 'https://img.icons8.com/bubbles/100/000000/dumbbell.png',
            benefits: 'Work your way up to 150 minutes a week of moderate-intensity aerobic activity (for example, 30 minutes a day, 5 days a week). Strong scientific evidence shows that physical activity can help you maintain your weight over time. However, the exact amount of physical activity needed to do this is not clear since it varies greatly from person to person. It’s possible that you may need to do more than 150 minutes of moderate-intensity activity a week to maintain your weight.'
        },
        {
            id: '3',
            title: 'Sleeping',
            info: "Eight hours sleep is mandatory",
            url: 'https://img.icons8.com/office/80/000000/sleeping-in-bed.png',
            benefits: 'Adequate sleep is an essential part of a healthy lifestyle and can have a positive impact on the lungs, kidneys, metabolism and weight control. If you’re chronically sleep-deprived, it can also affect your immune function, disease resistance, sensitivity to pain, mood and brain function. Recent studies have revealed that too much as well as too little sleep increases the risk of premature death. Low levels of immunity triggered by lack of sleep slow down the body’s natural defenses against microorganisms, thus increasing the risk of contracting various infections.'
        }
    ];
    let renderData = cardDataStore.map((item) => {
        return <Card
            key={item.id}
            title={item.title}
            delayFactor={`${item.id * 0.25}s`}
            delayTime={`${(item.id * 500) + 1000}`}
            info={item.info}
            url={item.url}
            benefits={item.benefits}
        />
    })
    return (
        <React.Fragment>
            <h1 className="m-2 text-4xl task-heading font-bold" id="task-section">My Tasks</h1>
            <div className="card-container">
                {renderData}
            </div>
        </React.Fragment>

    )
}

export default TaskContainer;