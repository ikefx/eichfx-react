import {MarqueeCardProperties} from "../interfaces/interfaces.ts";
export function CardElementMarquee(properties: MarqueeCardProperties) {
    return (
        <>
            <div className="row mt-2 justify-content-start">
                <div className="col-12">
                    {properties.title && (<h3>{properties.title}</h3>)}
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-12 col-xxl-6">
                    <div className="d-flex flex-column">
                        {properties.description.map(paragraph => {
                            return (
                                <>
                                    <p className={"pe-5 " + (paragraph.format === "secondary" ? "text-secondary fw-light" : "")}>
                                        {paragraph.text ? paragraph.text : <br/>}
                                    </p>
                                </>
                            )
                        })}
                    </div>
                </div>
                {properties.imgUri && (
                    <a href={properties.linkUri || ''} className={'col-12 col-xxl-5'}>
                        <div className="rounded shadow" style={'height: fit-content'}>
                            <img src={properties.imgUri} alt="img" loading="lazy" className={'d-flex w-100 rounded'}/>
                        </div>
                    </a>
                )}
                {properties.vidUri && (
                    <a href={properties.linkUri || ''} className={'col-12 col-xxl-5'}>
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