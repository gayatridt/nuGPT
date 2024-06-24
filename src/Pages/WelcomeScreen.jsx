
import React from 'react';
import NeuLogo from '../assets/NeuLogo.jpg';
import WelcomeScreenCard from '../Components/WelcomeScreenCard';

function WelcomeScreen() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',

        }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <img src={NeuLogo} alt="Neu Logo" style={{ width: '40px', height: '35px' }} />
            </div>
            <WelcomeScreenCard />
        </div>
    );
}

export default WelcomeScreen;
