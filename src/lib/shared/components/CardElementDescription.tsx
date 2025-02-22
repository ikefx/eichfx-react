import {DetailCardProperties} from "../interfaces/interfaces.ts";
export function CardElementDescription(properties: DetailCardProperties) {
    return (
        <>
            <div className="row mt-2 justify-content-between">
                <div className="col-12">
                    {properties.title && (<h3>{properties.title}</h3>)}
                </div>
                <div className="col-12 col-xxl-6">
                    <div className="d-flex flex-column">
                        {properties.paragraphs.map(paragraph => {
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
                {properties.imgUri && !properties.linkUri && (
                    <div className="col-12 col-xxl-5 rounded" style={'height: fit-content'}>
                        <img src={properties.imgUri} alt="img" className={'d-flex w-100 rounded shadow'}/>
                    </div>
                )}
                {properties.imgUri && properties.linkUri && (
                    <a href={properties.linkUri || ''} className={'col-12 col-xxl-5'} style={'height: fit-content'}>
                        <div className="rounded shadow" style={'height: fit-content'}>
                            <img src={properties.imgUri} alt="img" className={'d-flex w-100 rounded'}/>
                        </div>
                    </a>
                )}
                {properties.vidUri && !properties.linkUri && (
                    <div className="col-12 col-xxl-5">
                        <div className="shadow">
                            <video controls width="100%">
                                <source src={properties.vidUri}/>
                                Your browser does not support this video
                            </video>
                        </div>
                    </div>
                )}
                <div className={ properties.footerClass ? 'col-12 d-flex my-1 ' + properties.footerClass : 'col-12 d-flex my-1 justify-content-center'}>
                    <span className="small text-secondary">{properties.footer}</span>
                </div>
            </div>
        </>
    )
}