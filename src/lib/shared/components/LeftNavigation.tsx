import {NavigationProperties} from "../interfaces/interfaces.ts";
import {useLocation} from "preact-iso";
export function LeftNavigation({ sections }: { sections: NavigationProperties[] }) {
    const location = useLocation();
    return(
        <>
            <div id={'navbarVertical'} className={"d-flex flex-column flex-shrink-0 p-3 mh-100 overflow-y-auto"} style="width: 280px;">
                {sections.map((section, i: number) => {
                    return (
                        <>
                            <a href={section.top.path} className={'d-flex align-items-center mb-0 me-md-auto nav-link ' + (i && 'mt-4')}>
                                <li className={'nav-link fs-5 text-white'}>{section.top.title}</li>
                            </a>
                            <hr className="my-2"/>
                            <ul className="navbar-nav flex-column">
                                {section.items.map(item => {
                                    return (
                                        <>
                                            <li className="nav-item text-secondary">
                                                <a href={item.path} className={'nav-link ' + (location.path.startsWith(item.path) && 'text-white')} aria-current="page">
                                                    {item.title}
                                                </a>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </>
                    )
                })}
                <div class="mb-auto"></div>
            </div>
        </>
    )
}