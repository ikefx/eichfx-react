import {useEffect} from "preact/hooks";
import {useLocation} from "preact-iso";
import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
import {HeaderNestedContent} from "./HeaderNestedContent.tsx";
export function Header({ section, expand }: { section: NavigationProperties, expand: any }) {
    const location = useLocation();
    useEffect(() => {
        const header = document.getElementById('navbar-header');
        header.style.transitionProperty = 'all';
        header.style.transitionDuration = '300ms';
        header.style.transitionTimingFunction = 'cubic-bezier(1,1,1,1)';
        let lastScroll: number = 0;
        const onOutsideClick = (e) => {
            const navbar = document.getElementById('navbarToggleExternalContent');
            if (!navbar) return;
            const toggleButton = document.querySelector('.navbar-toggler');
            if (!toggleButton.contains(e.target)) {
                //@ts-ignore
                const collapseInstance = new bootstrap.Collapse(navbar, {
                    toggle: false,
                });
                collapseInstance.hide();
            }
        };
        const onScroll = (e) => {
            const navbar = document.getElementById('navbarToggleExternalContent');
            const navbarNested = document.getElementById('navbarNestedContent');
            const navBarVertical = document.getElementById('navbarVertical');
            if (navbarNested && e.target === navbar) return;
            if (navBarVertical && e.target === navBarVertical) return;
            let scrollElement = document.querySelector('.overflow-auto');
            if (navbar) {
                //@ts-ignore
                const collapseInstance = new bootstrap.Collapse(navbar, {
                    toggle: false,
                });
                collapseInstance.hide();
            }

            if (scrollElement?.scrollTop > lastScroll) {
                // Scroll down
                header.style.maxHeight = '0';
            } else {
                // Scroll up
                header.style.maxHeight = '48px';
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
            <header id={'navbar-header'} className="d-block bg-scheme overflow-hidden p-0">
                <nav id="navbar-header-nav" className="navbar navbar-expand-md navbar-dark py-1 w-100 overflow-hidden">
                    <div className="container-fluid px-2">
                        <ul className="navbar-nav col justify-content-start">
                            <a className="navbar-brand" href={section.top.path}>{section.top.title}</a>
                            {section.items.map(item => (
                                    <li className="d-md-inline-block d-none nav-item">
                                        <a className={'nav-link ' + (location.path.startsWith(item.path) && 'active')} aria-current="page" href={item.path}>{item.title}</a>
                                    </li>
                                )
                            )}
                        </ul>
                        {(location.path.startsWith('/breakdown') || location.path.startsWith('/research')) && (
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon fs-6"></span>
                            </button>
                        )}
                    </div>
                </nav>
            </header>
            {location.path.startsWith('/breakdown') && <HeaderNestedContent sections={expand['/breakdown']}></HeaderNestedContent>}
            {location.path.startsWith('/research') && <HeaderNestedContent sections={expand['/research']}></HeaderNestedContent>}
        </>
    )
}