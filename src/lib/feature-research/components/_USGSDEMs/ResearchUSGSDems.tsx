import {data} from "./definitions.ts";
import {InformationCard} from "../../../shared/components/InformationCard.tsx";
import hero01 from "../../../../assets/_display_research/_rman/_usgsdems/display_usgs17.jpg"
import hero02 from "../../../../assets/_display_research/_rman/_usgsdems/display_usgs16.jpg"
export function ResearchUSGSDems() {

    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">e-on Vue User Documentation</h4>
                    <h3 className="text-dark font-weight-bolder">USGS Raw Elevation Maps to Vue Software</h3>
                </div>
                <div className="mt-2 mb-5">
                    <img src={hero01} alt="img" className={'d-flex w-100 rounded shadow-sm'}/>
                </div>
                <div className="mt-2">
                    {data.map(card => (<InformationCard paragraphs={card.paragraphs} vidSrc={card.vidSrc} imgSrc={card.imgSrc} imgFooter={card.imgFooter}></InformationCard>))}
                </div>
                <div className="mt-2 mb-5">
                    <img src={hero02} alt="img" className={'d-flex w-100 rounded shadow-sm'}/>
                </div>
            </div>
        </>
    )
}