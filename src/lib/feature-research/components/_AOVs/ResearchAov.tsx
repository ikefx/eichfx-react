import {InformationCard} from "../../../shared/components/InformationCard.tsx";
import {aov} from "./definitions.ts";
export function ResearchAov() {

    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Renderman User Documentation</h4>
                    <h3 className="lead">Arbitrary Output Variables</h3>
                </div>
                <div className="mt-2">
                    {aov.map(card => (<InformationCard paragraphs={card.paragraphs} imgSrc={card.imgSrc} imgFooter={card.imgFooter}></InformationCard>))}
                </div>
            </div>
        </>
    )
}