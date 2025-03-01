import {useEffect} from "react";
import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function Header({ sections }: { sections: NavigationProperties[] }) {
    useEffect(() => {
        const header = document.getElementById('navbar-header');
        header.style.transitionProperty = 'all';
        header.style.transitionDuration = '300ms';
        header.style.transitionTimingFunction = 'cubic-bezier(1,1,1,1)';
        let lastScroll: number = 0;

        const onOutsideClick = (e) => {
            const navbar = document.getElementById('navbarToggleContent');
            const toggleButton = document.querySelector('.navbar-toggler');
            if (!navbar.contains(e.target) && !toggleButton.contains(e.target)) {
                //@ts-ignore
                const collapseInstance = new bootstrap.Collapse(navbar, {
                    toggle: false,
                });
                collapseInstance.hide();
            }
        };
        const onScroll = () => {
            const navbar = document.getElementById('navbarToggleContent');
            let scrollElement = document.querySelector('.overflow-auto');
            //@ts-ignore
            const collapseInstance = new bootstrap.Collapse(navbar, {
                toggle: false,
            });
            collapseInstance.hide();
            if (scrollElement?.scrollTop > lastScroll) {
                header.style.maxHeight = '0';
            } else {
                header.style.maxHeight = '100%';
            }
            lastScroll = scrollElement?.scrollTop || 0;
        };
        document.addEventListener('click', onOutsideClick);
        window.addEventListener('scroll', onScroll, true);
        return () => {
            document.removeEventListener('click', onOutsideClick);
            window.removeEventListener('scroll', onScroll, true);
        };
    }, []);

    return(
        <>
            <header id={'navbar-header'} className="d-block bg-scheme overflow-hidden">
                <nav className="navbar navbar-expand-md navbar-dark py-1 w-100">
                    <div className="container-fluid px-2">
                        {sections.map(section => {
                            return (
                                <>
                                    <ul className="nav col justify-content-start">
                                        <a className="navbar-brand" href={section.top.path}>{section.top.title}</a>
                                        {section.items.map(item => (
                                            <li className="d-md-inline-block d-none nav-item">
                                                <a className="nav-link" aria-current="page" href={item.path}>{item.title}</a>
                                            </li>
                                            )
                                        )}
                                    </ul>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarToggleContent"
                                        aria-controls="navbarToggleContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon fs-6"></span>
                                    </button>
                                </>
                            );
                        })}
                    </div>
                </nav>
                <div className="w-100 collapse navbar-collapse container-fluid" id="navbarToggleContent">
                    {sections.map(section => {
                        return(
                            <>
                                <ul className="nav nav-underline justify-content-center">
                                    {section.items.map(item => {
                                        return (
                                            <>
                                                <li className={'nav-item col text-center'}>
                                                    <a className={'nav-link'} href={item.path}>{item.title}</a>
                                                </li>
                                            </>
                                        );
                                    })}
                                </ul>
                            </>
                        )
                    })}
                </div>
            </header>
        </>
    )
}