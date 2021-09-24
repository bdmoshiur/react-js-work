import React from 'react';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import State from './Components/State';
import Data from './data.json'

function App() {

  let items = [];

  for( let x = 0; x < Data.length; x++ ) {
    items.push(<Card titleText={Data[x].title} docText={Data[x].doc} />);
  }
    return (
        <div>
            <h2 className='headingclass'>Hello Test</h2>
              {items}
              <Card2 name="Hello From Card Two"/>
              <State />
        </div>
    );
}

export default App;
