export interface InformationParagraph {
    text: string,
    format: string
}

export interface InformationCardProperties {
    paragraphs: InformationParagraph[],
    imgSrc?: string,
    vidSrc?: string,
    imgFooter: string
}

export function InformationCard(properties: InformationCardProperties) {
    return (
        <>
            <div class="mb-5">
                <div className="d-flex justify-content-between">
                    <div className="col">
                        {properties.paragraphs.map(paragraph => {
                            return (
                                <><p className="pe-5">{paragraph.text}</p></>
                            )
                        })}
                    </div>
                    <div className="col text-center" style={'height: fit-content'}>
                        {properties.imgSrc && (
                            <img src={properties.imgSrc} alt="img" className={'d-flex w-100 rounded shadow-sm'}/>
                        )}
                        {properties.vidSrc && (
                            <video width="100%" controls loop autoplay>
                                <source src={properties.vidSrc} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <span className="small text-secondary">{properties.imgFooter}</span>
                    </div>
                </div>
            </div>
        </>
    )
}