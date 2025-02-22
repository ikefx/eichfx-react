import {data} from "../definitions.ts";
import {CardElement} from "../../shared/components/CardElement.tsx";

export function Default() {
    return (
        <>
            <div class="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h3 className="text-dark mb-0">DEMO BREAKDOWN SHEET</h3>
                    <h4 className="lead text-secondary">Click links in the navigation bar or project images to browse extended breakdowns per project.</h4>
                </div>
            </div>
            <div className="mt-5">
                {data.map(card => (<><CardElement {...card}></CardElement><br/></>))}
            </div>
        </>
    )
}