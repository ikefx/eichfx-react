export interface InformationParagraph {
    text: string,
    format: string
}

export interface InformationCardProperties {
    paragraphs: InformationParagraph[],
    imgSrc: string,
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
                    <div className="col text-center bg-info">
                        <div className="d-block bg-danger">
                            {properties.imgSrc}
                        </div>
                        <span className="small text-secondary">{properties.imgFooter}</span>
                    </div>
                </div>
            </div>
        </>
    )
}