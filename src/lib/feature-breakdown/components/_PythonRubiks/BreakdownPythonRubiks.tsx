import {BreakdownDescription} from "../../../shared/components/BreakdownDescription.tsx";
import {data} from "./definitions.ts";
import {BreakdownGraphic} from "../../../shared/components/BreakdownGraphic.tsx";

export function BreakdownPythonRubiks() {

    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Houdini Visual Effects</h4>
                    <h3 className="text-dark font-weight-bolder">Python Scripting Rubik's Cube HDA</h3>
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
            <BreakdownDescription
                title={data.slotsDescription[2].title}
                imgUri={data.slotsDescription[2].imgUri}
                paragraphs={data.slotsDescription[2].paragraphs}
                footer={data.slotsDescription[2].footer}>
            </BreakdownDescription>
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
        </>
    )

}