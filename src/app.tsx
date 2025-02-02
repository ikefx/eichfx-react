import './index.css';

export function Header() {
    return(
        <>
            <header className="p-3 bg-dark text-white">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-start">
                        <li>
                            <a href="" className="nav-link px-2 text-secondary">Neil Eichelberger</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export function VertNavRoot() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style="width: 280px;">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Navigation</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            Demo Reel
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            Breakdown
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            Research
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                       id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                             className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function RootNavigation() {
    return (
        <>
            <div className="d-flex h-100">
                <VertNavRoot></VertNavRoot>
                <div class="col h-100 bg-white">

                    {/*CONTENT*/}

                </div>
            </div>
        </>
    )
}

export default function App() {
    return (
        <>
            <div className="d-flex flex-column root-pane">
                <div className="sticky-top">
                    <Header></Header>
                </div>
                <div className="h-100">
                    <RootNavigation></RootNavigation>
                </div>
            </div>
        </>
    )
}

/*export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}*/
