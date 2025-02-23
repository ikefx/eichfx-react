import {useState} from 'preact/hooks';
import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function Header({ sections }: { sections: NavigationProperties[] }) {
    useState(() => {
        const onOutsideClick = (e) => {
            const navbar = document.getElementById('navbarToggleExternalContent');
            const toggler = document.querySelector('.navbar-toggler');
            if (!navbar.contains(e.target) && !toggler.contains(e.target)) {
                // @ts-ignore
                const collapseInstance = new bootstrap.Collapse(navbar, {
                    toggle: false,
                });
                collapseInstance.hide();
            }
        };
        const onScroll = () => {
            const navbar = document.getElementById('navbarToggleExternalContent');
            // @ts-ignore
            const collapseInstance = new bootstrap.Collapse(navbar, {
                toggle: false,
            });
            collapseInstance.hide();
        };
        document.addEventListener('click', onOutsideClick);
        window.addEventListener('scroll', onScroll, true);
        // Clean up event listeners on unmount
        return () => {
            document.removeEventListener('click', onOutsideClick);
            window.removeEventListener('scroll', onScroll, true);
        };
    });

    return(
        <>
            <header className="d-block bg-dark">
                <nav className="navbar navbar-dark w-100">
                    <div className="container-fluid">
                        {sections.map(_ => {
                            return (
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarToggleExternalContent"
                                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
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