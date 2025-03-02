import {NavigationProperties} from "../../shared/interfaces/interfaces.ts";
import {useEffect} from "preact/hooks";
export function HeaderNestedContent({ sections }: { sections: NavigationProperties[] }) {
    let bottom: boolean = false;
    function onExpand() {
        bottom = false;
    }
    function onScroll(e: Event) {
        const target: HTMLElement = e.target as HTMLElement;
        if (Math.abs(target.scrollHeight - target.clientHeight - target.scrollTop) < 1) {
            bottom = true;
        }

        if (bottom) {
            console.dir("DO SOMETHING DIFFERENT");
        }
    }
    useEffect(() => {
        const externalCollapse = document.getElementById('navbarToggleExternalContent')
        externalCollapse.addEventListener('show.bs.collapse', onExpand);
        externalCollapse.addEventListener('scroll', onScroll);
        return () => {
            externalCollapse.removeEventListener('show.bs.collapse', onExpand);
            externalCollapse.removeEventListener('scroll', onScroll);
        };
    }, []);
    return(
        <>
            <div id="navbarToggleExternalContent" className="w-100 collapse navbar-collapse container-fluid p-0 nav-nested-content overflow-y-auto">
                <div className="w-100 p-2">
                    <div id="navbarNestedContent" className="list-group list-group-flush overflow-y-auto">
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
