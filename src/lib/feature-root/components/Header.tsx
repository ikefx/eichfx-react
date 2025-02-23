import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function Header({ sections }: { sections: NavigationProperties[] }) {

    console.dir(sections);
    return(
        <>
            <header className="d-block bg-dark">
                <nav className="navbar navbar-dark w-100">
                    <div className="container-fluid">
                        {sections.map(nav => {
                            return (
                                <button className="navbar-toggler col p-2" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarToggleExternalContent"
                                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    {nav.top.title}
                                </button>
                            );
                        })}
                    </div>
                </nav>
                <div className="w-100 collapse" id="navbarToggleExternalContent">
                    <ul className="nav nav-underline justify-content-center">
                        {sections[0].items.map(item => {
                            return (
                                <>
                                    <li className={'nav-item col text-center'}>
                                        <a className={'nav-link'} href={item.path}>{item.title}</a>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </header>
        </>
    )
}