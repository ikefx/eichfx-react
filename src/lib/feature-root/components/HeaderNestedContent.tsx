import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
import {useEffect} from "preact/hooks";
export function HeaderNestedContent({ sections }: { sections: NavigationProperties[] }) {
    useEffect(() => {
        const element = document.getElementById('navbarNestedContent');
        element.addEventListener('swipe', () => {
            //@ts-ignore
            const collapseInstance = new bootstrap.Collapse(document.getElementById('navbarToggleExternalContent'), {
                toggle: false,
            });
            collapseInstance.hide();
        });

    }, []);
    return(
        <>
            <div id="navbarToggleExternalContent" className="w-100 collapse navbar-collapse container-fluid p-0 nav-nested-content overflow-y-auto">
                <div id="navbarNestedContent" className="w-100 p-2">
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
