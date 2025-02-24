import {data} from "../definitions.ts";
import {CardElement} from "../../shared/components/CardElement.tsx";

export function Default() {
    return (
        <>
            <div class="d-flex flex-column">
                <div className="text-center my-2 mt-xxl-5">
                    <h4 className="text-dark mb-0">Demo Breakdown Sheet</h4>
                    <span className="fw-light text-secondary">Explore by using links in the navigation bar or click project images.</span>
                </div>
            </div>
            <div className="mt-5">
                {data.map(card => (<><CardElement {...card}></CardElement><br/></>))}
            </div>
        </>
    )
}