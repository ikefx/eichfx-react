import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";
import {breakdownNav} from "./definitions.ts";
import {BreakdownTerracotta} from "./components/_Terracotta/BreakdownTerracotta.tsx";
import {BreakdownHachiman} from "./components/_Hachiman/BreakdownHachiman.tsx";
import {BreakdownPythonRubiks} from "./components/_PythonRubiks/BreakdownPythonRubiks.tsx";
import {BreakdownTornado} from "./components/_Tornado/BreakdownTornado.tsx";
import {BreakdownPointStars} from "./components/_PointStars/BreakdownPointStars.tsx";
import {Default} from "./components/Default.tsx";
//import {Header} from "../feature-root/components/Header.tsx";
export function Breakdown({ view }: { view: string }) {
    return(
        <>
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