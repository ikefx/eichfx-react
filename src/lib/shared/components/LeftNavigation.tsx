import {NavigationProperties} from "../interfaces/interfaces.ts";
export function LeftNavigation({ sections }: { sections: NavigationProperties[] }) {
    return(
        <>
            <div id={'navbarVertical'} className={"d-flex flex-column flex-shrink-0 p-3 mh-100 overflow-y-auto text-white"} style="width: 280px;">
                {sections.map((section, i: number) => {
                    return (
                        <>
                            <a href={section.top.path}
                               className={i
                                   ? "d-flex align-items-center mb-0 me-md-auto text-decoration-none mt-4 navbar-brand"
                                   : "d-flex align-items-center mb-0 me-md-auto text-decoration-none navbar-brand"}>
                                <span className="nav-link fs-5">{section.top.title}</span>
                            </a>
                            <hr className="my-2"/>
                            <ul className="nav nav-pills flex-column">
                                {section.items.map(item => {
                                    return (
                                        <>
                                            <li className="nav-item">
                                                <a href={item.path} className="nav-link navbar-text" aria-current="page">
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
                <div className="dropdown">
                </div>
            </div>
        </>
    )
}