import {data} from "./definitions.ts";
import {CardElement} from "../../../shared/components/CardElement.tsx";

export function BreakdownTornado() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Houdini Visual Effects</h4>
                    <h3 className="text-dark font-weight-bolder">Tornado Effect Animation Breakdown</h3>
                </div>
            </div>
            {data.map(card => (<><CardElement {...card}></CardElement></>))}
        </>
    )

}