import {data} from "./definitions.ts";
import {CardElement} from "../../../shared/components/CardElement.tsx";
export function BreakdownTornado() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center my-2 mt-xxl-5">
                    <h4 className="text-dark mb-0">Tornado Effect Animation Breakdown</h4>
                    <span className="fw-light text-secondary">Houdini Software Visual Effects</span>
                </div>
            </div>
            <div className="mt-5">
                {data.map(card => (<><CardElement {...card}></CardElement></>))}
            </div>
        </>
    )
}