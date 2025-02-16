import {MarqueeCardProperties} from "../interfaces/interfaces.ts";

export function MarqueeCard(properties: MarqueeCardProperties) {
    return (
        <>
            <div className="row d-flex justify-content-between">
                <div className="col-12 col-xxl-7 px-0">
                    <div className="d-flex flex-column">
                        {properties.title && (<h3>{properties.title}</h3>)}
                        <p className="pe-5">{properties.description}</p>
                    </div>
                </div>
                {properties.imgUri && (
                    <a href={properties.linkUri || ''} className={'col-12 col-xxl-5 px-0'}>
                        <div className="rounded shadow" style={'height: fit-content'}>
                            <img src={properties.imgUri} alt="img" className={'d-flex w-100 rounded'}/>
                        </div>
                    </a>
                )}
                {properties.vidUri && (
                    <a href={properties.linkUri || ''} className={'col-12 col-xxl-5 px-0'}>
                        <div className="rounded shadow" style={'height: fit-content'}>
                            <video controls width="100%">
                                <source src={properties.vidUri}/>
                                Your browser does not support this video
                            </video>
                        </div>
                    </a>
                )}
            </div>
            <div className="row py-2">
                <span className="small text-secondary px-0">{properties.footer}</span>
            </div>
        </>
    )
}