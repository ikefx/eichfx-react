import {data} from "./definitions.ts";
import {CardElement} from "../../../shared/components/CardElement.tsx";
export function BreakdownTerracotta() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center my-2 mt-xxl-5">
                    <h4 className="text-dark mb-0">Terracotta Renderman Artist Tools Breakdown</h4>
                    <span className="fw-light text-secondary">Renderman Artist Tools Breakdown</span>
                </div>
            </div>
            <div className="mt-5">
                {data.map(card => (<><CardElement {...card}></CardElement></>))}
            </div>
        </>
    )
}