import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
import {useLocation} from "preact-iso";
export function HeaderNestedContent({ sections }: { sections: NavigationProperties[] }) {
    const location = useLocation();
    return(
        <>
            <div id="navbarToggleExternalContent" className="w-100 collapse navbar-collapse container-fluid p-2 nav-nested-content overflow-y-auto border-top border-bottom border-secondary">
                <div id="navbarNestedContent" className="list-group list-group-flush overflow-y-auto py-2">
                    <div className="text-center text-secondary fs-italic small w-100">
                        Select a item from the list below
                    </div>
                    {sections.map(section => {
                        return (
                            <>
                                <div className=" rounded p-3">
                                    {section.top.title && (<h6 className="mb-1 fw-lighter">{section.top.title}</h6>)}
                                    {section.items.map(item => <a type="button" className={'btn mb-1 w-100 btn-primary ' + (location.path === item.path && 'disabled')} href={item.path}>{item.title}</a>)}
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
