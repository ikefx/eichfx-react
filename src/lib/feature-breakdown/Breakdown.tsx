import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";
import {breakdownNav} from "./definitions.ts";
import {BreakdownTerracotta} from "./components/_Terracotta/BreakdownTerracotta.tsx";
import {BreakdownHachiman} from "./components/_Hachiman/BreakdownHachiman.tsx";
import {BreakdownPythonRubiks} from "./components/_PythonRubiks/BreakdownPythonRubiks.tsx";
import {BreakdownTornado} from "./components/_Tornado/BreakdownTornado.tsx";
import {BreakdownPointStars} from "./components/BreakdownPointStars.tsx";
import {Default} from "./components/Default.tsx";
export function Breakdown({ view }: { view: string }) {

    return(
        <>
            <div className="d-flex h-100">
                <LeftNavigation sections={breakdownNav}></LeftNavigation>
                <div className="container h-100 p-5 overflow-auto">
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
        </>
    )
}