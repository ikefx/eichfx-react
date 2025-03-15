import {BreakdownGraphicProperties} from "../interfaces/interfaces.ts";
export function CardElementGraphic(properties: BreakdownGraphicProperties) {
    return (
        <>
            <div className="row mt-4">
                {properties.imgUri && (
                    <div className={'col-12'} style={'height: fit-content'}>
                        <img loading="lazy" src={properties.imgUri} alt="img" className={'d-flex w-100 rounded shadow'}/>
                    </div>
                )}
                {properties.vidUri && (
                    <div className={'col-12'}>
                        <div className="video-wrapper shadow">
                            <video width="100%" style={'margin-bottom:-0.375rem'} controls loop autoPlay>
                                <source src={properties.vidUri} type="video/mp4"/>
                                Your browser does not support this video
                            </video>
                        </div>
                    </div>
                )}
                {properties.label && (
                    <div className="col-12 my-1 text-center">
                        <span className="small text-secondary">{properties.label}</span>
                    </div>
                )}
            </div>
        </>
    )
}