import {data} from "./definitions.ts";
import {CardElement} from "../../../shared/components/CardElement.tsx";
export function BreakdownTerracotta() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h3 className="text-dark mb-0">Terracotta Renderman Artist Tools Breakdown</h3>
                    <h4 className="lead text-secondary">Renderman Artist Tools Breakdown</h4>
                </div>
            </div>
            <div className="mt-5">
                {data.map(card => (<><CardElement {...card}></CardElement></>))}
            </div>
        </>
    )
}