import {BreakdownDescription} from "../../../shared/components/BreakdownDescription.tsx";
import {BreakdownGraphic} from "../../../shared/components/BreakdownGraphic.tsx";
import { data } from "./definitions.ts";
import dis01 from "../../../../assets/_display_breakdown/_terracotta/terra_img005.png";
import dis02 from "../../../../assets/_display_breakdown/_terracotta/terra_img003.png"

export function BreakdownTerracotta() {

    return (
        <>
            <div className="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h4 className="lead text-secondary mb-0">Renderman Artist Tools Breakdown</h4>
                    <h3 className="text-dark font-weight-bolder">Terracotta Warrior Sculpts</h3>
                </div>
            </div>
            <BreakdownDescription
                title={data.top.title}
                imgUri={data.top.imgUri}
                paragraphs={data.top.paragraphs}
                footer={data.top.footer}>
            </BreakdownDescription>
            <BreakdownGraphic
                imgUri={''}
                vidUri={data.hero}
                label={''}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[0].imgUri}
                vidUri={data.slotsGraphic[0].vidUri}
                label={data.slotsGraphic[0].label}
            ></BreakdownGraphic>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[1].imgUri}
                vidUri={data.slotsGraphic[1].vidUri}
                label={data.slotsGraphic[1].label}
            ></BreakdownGraphic>
            <BreakdownDescription
                title={data.slotsDescription[0].title}
                imgUri={data.slotsDescription[0].imgUri}
                paragraphs={data.slotsDescription[0].paragraphs}
                footer={data.slotsDescription[0].footer}>
            </BreakdownDescription>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[2].imgUri}
                vidUri={data.slotsGraphic[2].vidUri}
                label={data.slotsGraphic[2].label}
            ></BreakdownGraphic>
            <BreakdownDescription
                title={data.slotsDescription[1].title}
                imgUri={data.slotsDescription[1].imgUri}
                paragraphs={data.slotsDescription[1].paragraphs}
                footer={data.slotsDescription[1].footer}>
            </BreakdownDescription>
            <BreakdownGraphic
                imgUri={data.slotsGraphic[3].imgUri}
                vidUri={data.slotsGraphic[3].vidUri}
                label={data.slotsGraphic[3].label}
            ></BreakdownGraphic>
            <div className="mt-4">
                <div className="d-inline-block w-50" style={'height: fit-content'}>
                    <img src={dis01} alt="img" className={'d-flex w-100 rounded-0 rounded-start shadow'}/>
                </div>
                <div className="d-inline-block w-50" style={'height: fit-content'}>
                    <img src={dis02} alt="img" className={'d-flex w-100 rounded-0 rounded-end shadow'}/>
                </div>
                <div class="w-100 text-center">
                    <span class="text-secondary small">WiP Sculpt & Shader Renders</span>
                </div>
            </div>
        </>
    )

}