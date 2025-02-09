import {data} from "./definitions.ts";
import {InformationCard} from "../../../shared/components/InformationCard.tsx";

export function ResearchMapCapTex() {

    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Z Brush Guides, Methods, and Tricks</h4>
                    <h3 className="text-dark font-weight-bolder">Export MaterialCap to Disk for Texture</h3>
                </div>
                <div className="mt-2">
                    {data.map(card => (<InformationCard paragraphs={card.paragraphs} vidSrc={card.vidSrc} imgSrc={card.imgSrc} imgFooter={card.imgFooter}></InformationCard>))}
                </div>
            </div>
        </>
    )
}