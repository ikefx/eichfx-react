import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function LeftNavigation({ sections }: { sections: NavigationProperties[] }) {
    return(
        <>
            <div id={'navbarVertical'} className={"d-flex flex-column flex-shrink-0 p-3 mh-100 overflow-y-auto"} style="width: 280px;">
                {sections.map((section, i: number) => {
                    return (
                        <>
                            <a href={section.top.path}
                               className={i
                                   ? "d-flex align-items-center mb-0 me-md-auto text-decoration-none mt-4"
                                   : "d-flex align-items-center mb-0 me-md-auto text-decoration-none"}>
                                <h5 className="fs-5 fw-light mb-0">{section.top.title}</h5>
                            </a>
                            <hr className="my-2"/>
                            <ul className="nav nav-pills flex-column">
                                {section.items.map(item => {
                                    return (
                                        <>
                                            <li className="nav-item">
                                                <a href={item.path} className="nav-link" aria-current="page">
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
                <hr/>
                <div class="mb-auto"></div>
                <div className="dropdown">
                </div>
            </div>
        </>
    )
}