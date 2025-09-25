
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';



function App() {
  const [tabContent,setTabContent] = useState()

  function handleSelect(selectedButton){
    // string 
    console.log(selectedButton)
    setTabContent(selectedButton)
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[4]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!tabContent ? 'Please Select a tab!' : null}
          {
            tabContent ?
            <div id='tab-content'>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>
                  {EXAMPLES[tabContent].code}
                </code>
              </pre>
            </div> : null
          }
          
        </section>
      </main>
    </div>
  );
}

export default App;
