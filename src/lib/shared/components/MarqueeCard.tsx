import {MarqueeCardProperties} from "../interfaces/interfaces.ts";

export function MarqueeCard(properties: MarqueeCardProperties) {
    return (
        <>
            <div class="mb-5">
                <div className="d-flex justify-content-between">
                    <div className="col">
                        <div className="d-flex flex-column">
                            <h3>{properties.title}</h3>
                            <p>{properties.description}</p>
                        </div>
                    </div>
                    <div className="col bg-danger">
                        HERE PIC
                    </div>
                </div>
                <div className="m-auto py-2">
                    <span className="small">{properties.footer}</span>
                </div>
            </div>
        </>
    )
}