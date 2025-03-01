import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";
import {breakdownNav} from "./definitions.ts";
import {BreakdownTerracotta} from "./components/_Terracotta/BreakdownTerracotta.tsx";
import {BreakdownHachiman} from "./components/_Hachiman/BreakdownHachiman.tsx";
import {BreakdownPythonRubiks} from "./components/_PythonRubiks/BreakdownPythonRubiks.tsx";
import {BreakdownTornado} from "./components/_Tornado/BreakdownTornado.tsx";
import {BreakdownPointStars} from "./components/_PointStars/BreakdownPointStars.tsx";
import {Default} from "./components/Default.tsx";
export function Breakdown({ view }: { view: string }) {
    return(
        <>
            <div className="w-100 collapse navbar-collapse container-fluid p-0" id="navbarToggleExternalContent">
                <div className="w-100 mh-100 p-2">
                    <h5 className="fw-light">Projects</h5>
                    <div className="list-group list-group-flush">
                        <button type="button" className="list-group-item list-group-item-action">Terracotta</button>
                        <button type="button" className="list-group-item list-group-item-action">Hachiman</button>
                        <button type="button" className="list-group-item list-group-item-action">Python Rubik's Cube</button>
                        <button type="button" className="list-group-item list-group-item-action">Tornado FX</button>
                        <button type="button" className="list-group-item list-group-item-action">Point Cluster Stars</button>
                    </div>
                </div>
            </div>
            <div className="d-flex h-100">
                <div className={'d-none d-md-flex'}>
                    <LeftNavigation sections={breakdownNav}></LeftNavigation>
                </div>
                <div className="w-100 h-100 p-lg-3 p-xxl-5 overflow-auto">
                    <div class="container">
                        {(() => {
                            switch (view) {
                                case 'terracotta':
                                    return BreakdownTerracotta();
                                case 'hachiman':
                                    return BreakdownHachiman();
                                case 'rubiks':
                                    return BreakdownPythonRubiks();
                                case 'tornado':
                                    return BreakdownTornado();
                                case 'pointstars':
                                    return BreakdownPointStars();
                                default:
                                    return Default();
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    )
}