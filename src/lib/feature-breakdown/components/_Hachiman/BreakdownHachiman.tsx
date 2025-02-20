import {data} from "./definitions.ts";
import {CardElement} from "../../../shared/components/CardElement.tsx";
export function BreakdownHachiman() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Renderman Artist Tools Breakdown</h4>
                    <h3 className="text-dark font-weight-bolder">Hachiman Statue Render</h3>
                </div>
            </div>
            {data.map(card => (<><CardElement {...card}></CardElement></>))}
        </>
    )
}