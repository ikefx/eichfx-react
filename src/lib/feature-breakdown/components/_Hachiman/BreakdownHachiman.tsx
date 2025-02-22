import {data} from "./definitions.ts";
import {CardElement} from "../../../shared/components/CardElement.tsx";
export function BreakdownHachiman() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h3 className="text-dark mb-0">Hachiman Sculpt with Maya and Renderman</h3>
                    <h4 className="lead text-secondary">Renderman Artist Tools Breakdown</h4>
                </div>
            </div>
            <div className="mt-5">
                {data.map(card => (<><CardElement {...card}></CardElement></>))}
            </div>
        </>
    )
}