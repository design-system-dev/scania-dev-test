// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement as h } from 'react';
import logo from './logo.svg';
import './App.css';
import * as x from 'ui-components-react';

console.log(x);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {/* <TextComponent>World!</TextComponent>
                <DropdownComponent
                    options={[{ label: 'A', value: 'a' }]}
                ></DropdownComponent> */}

                {/* <text-component>Hello World!</text-component>
                <dropdown-component
                    options={[
                        { label: 'A', value: 'a' },
                        { label: 'B', value: 'b' },
                    ]}
                ></dropdown-component> */}
            </header>
        </div>
    );
}

export default App;
