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
            <div id="navbarToggleExternalContent" className="w-100 collapse navbar-collapse container-fluid p-2 nav-nested-content overflow-y-auto">
                <div id="navbarNestedContent" className="list-group list-group-flush overflow-y-auto">
                    {sections.map(section => {
                        return(
                            <>
                                <div className="my-1 rounded p-3">
                                    {section.top.title && (<h6 className="mb-1 fw-lighter">{section.top.title}</h6>)}
                                    {section.items.map(item => <a type="button" className="btn btn-primary mb-1 w-100" href={item.path}>{item.title}</a>)}
                                </div>
                            </>
                        );
                    })}
                    <div class="text-center text-secondary fs-italic small w-100">
                        Select a item from the list above to navigate
                    </div>
                </div>
            </div>
        </>
    );
}
