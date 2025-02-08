import {MarqueeCardProperties} from "../interfaces/interfaces.ts";

export function MarqueeCard(properties: MarqueeCardProperties) {
    return (
        <>
            <div class="mb-5">
                <div className="d-flex justify-content-between">
                    <div className="col">
                        <div className="d-flex flex-column">
                            {properties.title && (<h3>{properties.title}</h3>)}
                            <p className="pe-5">{properties.description}</p>
                        </div>
                    </div>
                    {properties.imgUri && (
                        <div className="col rounded shadow" style={'height: fit-content'}>
                            <img src={properties.imgUri} alt="img" className={'d-flex w-100 rounded'}/>
                        </div>
                    )}
                    {properties.vidUri && (
                        <div className="col shadow">
                            <video controls width="100%">
                                <source src={properties.vidUri}/>
                                Your browser does not support this video
                            </video>
                        </div>
                    )}
                </div>
                <div className="m-auto py-2">
                <span className="small text-secondary">{properties.footer}</span>
                </div>
            </div>
        </>
    )
}