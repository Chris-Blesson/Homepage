import React from 'react';
import './ContentSection.styles.css';
const ContentSection = () => {
    return (
        <div className="content-section grid md:grid-cols-2 grid-cols-1 p-10">
            <div className="md:p-10">
                <h1 className="m-2 text-4xl font-bold">The Complete ZEN</h1>
                <div className="content info text-gray-500 mt-7 leading-relaxed">
                    <p>Self-care encourages you to maintain a healthy relationship with yourself so that you can transmit the good feelings to others.</p>
                    <p>You cannot give to others what you don't have yourself.</p>
                    <p>While some may misconstrue self-care as selfish, it's far from that.</p>
                    <p>When you pay adequate attention to your well-being, you're not considering your needs alone.</p>
                    <p>You're reinvigorating yourself so that you can be the best version of yourself for the people around you. Everyone around you also benefits from the renewed energy and joy you exhibit.</p>
                </div>
            </div>
            <div className="mt-10">
                <img className="w-full mx-auto max-w-sm" src="https://raw.githubusercontent.com/akshaykhale1992/tailwind-experiment/main/images/undraw_coding_6mjf.svg" />
            </div>
        </div>

    )
}

export default ContentSection;