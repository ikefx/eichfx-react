import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
export function HeaderNestedContent({ sections }: { sections: NavigationProperties[] }) {
    return(
        <>
            <div id="navbarToggleExternalContent" className="w-100 collapse navbar-collapse container-fluid p-0">
                <div id="navbarNestedContent" className="w-100 p-2 overflow-y-auto nav-nested-content">
                    <div className="list-group list-group-flush overflow-y-auto">
                        {sections.map(section => {
                            return(
                                <>
                                    <div className="mb-3">
                                        <h5 className="mb-1 fw-lighter">{section.top.title}</h5>
                                        {section.items.map(item => <a type="button" className="list-group-item list-group-item-action" href={item.path}>{item.title}</a>)}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
