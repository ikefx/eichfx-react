import {data} from "./definitions.ts";
import {InformationCard} from "../../../shared/components/InformationCard.tsx";

export function ResearchMagicLights() {

    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Renderman User Documentation</h4>
                    <h3 className="text-dark font-weight-bolder">Introduction to Light Shaders: The Occlusion Light Shader</h3>
                </div>
                <div className="mt-2">
                    {data.map(card => (<InformationCard paragraphs={card.paragraphs} vidSrc={card.vidSrc} imgSrc={card.imgSrc} imgFooter={card.imgFooter}></InformationCard>))}
                </div>
            </div>
        </>
    )

}