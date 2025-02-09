import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import display01 from "../../../../assets/_display_research/_rman/_magiclights/display_custom_amb_sl.jpg";
import display02 from "../../../../assets/_display_research/_rman/_magiclights/display_pointlight_noise_sl.jpg";
import display03 from "../../../../assets/_display_research/_rman/_magiclights/display_customlight_rib.jpg";
import display04 from "../../../../assets/_display_research/_rman/_magiclights/display_pointlight_sl.jpg";
import display05 from "../../../../assets/_display_research/_rman/_magiclights/light_ambient_occ.mov";
import display07 from "../../../../assets/_display_research/_rman/_magiclights/light_ambient_occ_correct.mov";
import display08 from "../../../../assets/_display_research/_rman/_magiclights/light_point_occ_noise.mov";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'A magic light refers to the process of a light doing more than lighting a scene through a custom light shader. Knowledge of RSL provides the understanding of how a light source actually works.',
            format: ''
        },
        {
            text: 'We know surface shaders operate as subprograms that execute on geometry at render.',
            format: ''
        },
        {
            text: 'Light sources behave the same way.',
            format: ''
        },
        {
            text: 'Lights are shaders containing variables that are called upon by linked surface shaders.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: display01,
    imgFooter: 'Figure 01: Ambient Light Shader with Occlusion'
}
const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'RSL functions that communicate between surface shaders and light shaders are solar(),illuminate(), and illuminance().',
            format: ''
        },
        {
            text: 'These functions create the light-projecting effect we\'ve come accustomed to.',
            format: ''
        },
        {
            text: 'Since lights are shaders, they are capable of the same RSL functions that surface shaders perform.',
            format: ''
        },
        {
            text: 'Occlusion, color bleed, texture mapping, displacements - anything a surface shader can do a light shader can do as well.',
            format: ''
        },
        {
            text: 'Figure 01 is the simplest light shader - the ambient light.',
            format: ''
        },
        {
            text: 'Ambient lights hold no contraints for their lighting functions - meaning an ambient light source illuminates top and bottom - front and back.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: display03,
    imgFooter: 'Figure 02: Light Shader Tag in .rib'
}
const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 01 replaces the illumination function with occlusion.',
            format: ''
        },
        {
            text: 'This turns our light into an ambient occlusion shader that effects all linked geometry.',
            format: ''
        },
        {
            text: 'Figure 02 shows the light shader tag in RiSpec.',
            format: ''
        },
        {
            text: 'By default, the occlusion function in RSL generates the invert of ambient occlusion.',
            format: ''
        },
        {
            text: 'Combine this element with the color parameter and receive a fake color bleed effect - Figure 03.',
            format: ''
        },
    ],
    vidSrc: display05,
    imgSrc: null,
    imgFooter: 'Figure 03: Ambient Light Shader Fake Color Bleed'
}
const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'To produce proper ambient occlusion, invert the occlusion fuction in RSL (subtracting it from 1) and set color to white.',
            format: ''
        },
        {
            text: 'The result is Figure 04 - ambient occlusion.',
            format: ''
        },
    ],
    vidSrc: display07,
    imgSrc: null,
    imgFooter: 'Figure 04: Ambient Light Shader Ambient Occlusion'
}
const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Ambient lights illuminate from all directions.  Point lights illuminate from a X Y Z coordinate.  Spot lights illuminate from a X Y Z coordinate into a specific direction.',
            format: ''
        },
        {
            text: 'Refer to the [from] and [to] parameters in the Figure 05 shader.',
            format: ''
        },
        {
            text: 'Figure 05 is a spot light with occlusion.',
            format: ''
        },
        {
            text: 'For experimental purposes, I attached Rman noise to the light source to see the effect - Figure 06. The resulting sequence seen with Figure 07.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: display04,
    imgFooter: 'Figure 05: Point Light Shader with Occluison'
}
const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'The possibilities with light shaders are limitless. For more zany light shader effects, I recommend Moritz Moeller\'s Going Mad with Magic Lights.',
            format: 'secondary'
        },
        {
            text: 'Siggraph 2006\'s Renderman for Everyone, Course 25 p62.',
            format: 'secondary'
        },
    ],
    vidSrc: null,
    imgSrc: display02,
    imgFooter: 'Figure 06: Point Light Shader Occlusion and Noise SL'
}
const slot07: InformationCardProperties = {
    paragraphs: [],
    vidSrc: display08,
    imgSrc: null,
    imgFooter: 'Figure 07: Point Light Shader Occlusion and Noise Sequence'
}
export const data: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07
];