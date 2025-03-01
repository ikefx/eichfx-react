import {useEffect} from "react";
import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function Footer({ sections }: { sections: NavigationProperties[] }) {
    useEffect(() => {
        const footer = document.getElementById('navbar-footer');
        footer.style.transitionProperty = 'all';
        footer.style.transitionDuration = '300ms';
        footer.style.transitionTimingFunction = 'cubic-bezier(1,1,1,1)';
        let lastScroll: number = 0;
        const onScroll = () => {
            let scrollElement = document.querySelector('.overflow-auto');
            if (scrollElement?.scrollTop > lastScroll) {
                footer.style.maxHeight = '0';
            } else {
                footer.style.maxHeight = '58px';
            }
            lastScroll = scrollElement?.scrollTop || 0;
        };
        window.addEventListener('scroll', onScroll, true);
        return () => {
            window.removeEventListener('scroll', onScroll, true);
        };
    }, []);
    return(
        <>
            <footer id="navbar-footer" className="footer mt-auto bg-scheme sticky-bottom d-block d-md-none">
                <nav className="navbar navbar-dark border-top border-secondary w-100">
                    <div className="container-fluid">
                        <ul className="nav nav-underline w-100">
                            <li className={'nav-item col text-center'}>
                                <a className={'nav-link text-secondary'} href="/reel">Demo Reel</a>
                            </li>
                            <li className={'nav-item col text-center'}>
                                <a className={'nav-link text-secondary'} href="/breakdown">Breakdown</a>
                            </li>
                            <li className={'nav-item col text-center'}>
                                <a className={'nav-link text-secondary'} href="/research">Research</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </>
    )
}