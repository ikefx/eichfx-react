export interface InformationParagraph {
    text: string,
    format: string
}
export interface InformationCardProperties {
    paragraphs: InformationParagraph[],
    imgSrc?: string,
    vidSrc?: string,
    imgFooter: string,
}
export function InformationCard(properties: InformationCardProperties) {
    return (
        <>
            <div className="row d-flex justify-content-between mt-4">
                <div className="col-12 col-xxl-8">
                    {properties.paragraphs.map(paragraph => {
                        return (
                            <>
                                <p className={"pe-5 " + (paragraph.format === "secondary" ? "text-secondary fw-light" : "")}>
                                    {paragraph.text ? paragraph.text : <br/> }
                                </p>
                            </>
                        )
                    })}
                </div>
                <div className="col-12 col-xxl-4 text-center" style={'height: fit-content'}>
                    {properties.imgSrc && (
                        <img src={properties.imgSrc} alt="img" className={'d-flex w-100 rounded shadow-sm'}/>
                    )}
                    {properties.vidSrc && (
                        <div className={'video-wrapper shadow-sm'}>
                            <video width="100%" style={'margin-bottom:-0.375rem'} controls loop autoPlay>
                                <source src={properties.vidSrc} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <span className="small text-secondary">{properties.imgFooter}</span>
                </div>
            </div>
        </>
    )
}