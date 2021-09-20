import React from 'react';
import Card from './Components/Card';

function App() {
    return (
        <div>
            <h2 className='headingclass'>Hello Test</h2>
              <Card titleText='One Title' docText='This is a One Card' />
              <Card titleText='Two Title' docText='This is a Two Card'/>
              <Card titleText='Three Title' docText='This is a Three Card'/>
              <Card titleText='Four Title' docText='This is a Four Card'/>
        </div>
    );
}

export default App;
