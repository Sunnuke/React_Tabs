import React, { useState } from 'react';
import './App.css';

import Tabs from './components/Tabs';


function App() {
    const [ state, setState ] = useState({
      items: [
        {label: "Tab 1", content: "Tab 1 content is showing here.", css: "tab1"},
        {label: "Tab 2", content: "Tab 2 content is showing here.", css: "tab2"},
        {label: "Tab 3", content: "Tab 3 content is showing here.", css: "tab3"}]
    });
  return (
    <div className="App">
      <Tabs items={state} />
    </div>
  );
}

export default App;
