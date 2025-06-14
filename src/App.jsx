import {createElement, Fragment, useState} from 'react' // ✅ React needed for createElement
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const year = new Date().getFullYear()

    // Декларативный стиль — всё JSX описывает UI как результат состояния
    /*
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          // Императивно используется счетчик, но и то, декларативно вызывается setCount
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <footer className="footer">
          {year}
        </footer>
      </>
    )
    */

    // Эквивалентный код на чистом createElement
    return createElement(
            Fragment,
            null,
            createElement(
                    'div',
                    null,
                    createElement(
                            'a',
                            {href: 'https://vite.dev', target: '_blank'},
                            createElement('img', {
                                src: viteLogo,
                                className: 'logo',
                                alt: 'Vite logo',
                            })
                    ),
                    createElement(
                            'a',
                            {href: 'https://react.dev', target: '_blank'},
                            createElement('img', {
                                src: reactLogo,
                                className: 'logo react',
                                alt: 'React logo',
                            })
                    )
            ),
            createElement('h1', null, 'Vite + React'),
            createElement(
                    'div',
                    {className: 'card'},
                    createElement(
                            'button',
                            {onClick: () => setCount((count) => count + 1)},
                            `count is ${count}`
                    ),
                    createElement(
                            'p',
                            null,
                            'Edit ',
                            createElement('code', null, 'src/App.jsx'),
                            ' and save to test HMR'
                    )
            ),
            createElement(
                    'p',
                    {className: 'read-the-docs'},
                    'Click on the Vite and React logos to learn more'
            ),
            createElement('footer', {className: 'footer'}, year)
    )
}

// Декларативный подход - что я хочу
// Императивный подход - как я хочу

export default App