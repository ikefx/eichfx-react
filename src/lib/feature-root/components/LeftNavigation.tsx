import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function LeftNavigation({ sections }: { sections: NavigationProperties[] }) {
    return(
        <>
            <div className={"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100 overflow-y-auto"} style="width: 280px;">
                {sections.map((section, i: number) => {
                    return (
                        <>
                            <a href={section.top.path}
                               className={i
                                   ? "d-flex align-items-center mb-0 me-md-auto text-white text-decoration-none mt-4"
                                   : "d-flex align-items-center mb-0 me-md-auto text-white text-decoration-none"}>
                                <span className="fs-4">{section.top.title}</span>
                            </a>
                            <hr/>
                            <ul className="nav nav-pills flex-column">
                                {section.items.map(item => {
                                    return (
                                        <>
                                            <li className="nav-item">
                                                <a href={item.path} className="nav-link text-white" aria-current="page">
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
                    Nav Footer
                </div>
            </div>
        </>
    )
}