import {DetailCardProperties} from "../interfaces/interfaces.ts";

export function BreakdownDescription(properties: DetailCardProperties) {
    return (
        <>
            <div className="mt-2">
                <div className="row d-flex justify-content-between">
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
                    {properties.imgUri && (
                        <div className="col-12 col-xxl-6 rounded" style={'height: fit-content'}>
                            <img src={properties.imgUri} alt="img" className={'d-flex w-100 rounded shadow'}/>
                        </div>
                    )}
                    {properties.vidUri && (
                        <div className="col-12 col-xxl-6">
                            <div className="shadow">
                                <video controls width="100%">
                                    <source src={properties.vidUri}/>
                                    Your browser does not support this video
                                </video>
                            </div>
                        </div>
                    )}
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 text-left    ">
                        <span className="small text-secondary">{properties.footer}</span>
                    </div>
                </div>
            </div>
        </>
    )
}