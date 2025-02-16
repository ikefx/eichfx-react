import {BreakdownDescription} from "../../../shared/components/BreakdownDescription.tsx";
import {BreakdownGraphic} from "../../../shared/components/BreakdownGraphic.tsx";
import {data} from "./definitions.ts";

export function BreakdownTornado() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Houdini Visual Effects</h4>
                    <h3 className="text-dark font-weight-bolder">Tornado Effect Animation Breakdown</h3>
                </div>
            </div>
            <BreakdownDescription
                title={data.top.title}
                imgUri={data.top.imgUri}
                paragraphs={data.top.paragraphs}
                footer={data.top.footer}>
            </BreakdownDescription>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[0].imgUri}
                vidUri={data.slotsGraphic[0].vidUri}
                label={data.slotsGraphic[0].label}
            ></BreakdownGraphic>
            <BreakdownDescription
                title={data.slotsDescription[1].title}
                imgUri={data.slotsDescription[1].imgUri}
                paragraphs={data.slotsDescription[1].paragraphs}
                footer={data.slotsDescription[1].footer}>
            </BreakdownDescription>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[1].imgUri}
                vidUri={data.slotsGraphic[1].vidUri}
                label={data.slotsGraphic[1].label}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[2].imgUri}
                vidUri={data.slotsGraphic[2].vidUri}
                label={data.slotsGraphic[2].label}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[3].imgUri}
                vidUri={data.slotsGraphic[3].vidUri}
                label={data.slotsGraphic[3].label}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[4].imgUri}
                vidUri={data.slotsGraphic[4].vidUri}
                label={data.slotsGraphic[4].label}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[5].imgUri}
                vidUri={data.slotsGraphic[5].vidUri}
                label={data.slotsGraphic[5].label}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[6].imgUri}
                vidUri={data.slotsGraphic[6].vidUri}
                label={data.slotsGraphic[6].label}
            ></BreakdownGraphic>
        </>
    )

}