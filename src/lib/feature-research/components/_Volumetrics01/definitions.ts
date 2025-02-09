import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import displ01 from "../../../../assets/_display_research/_rman/_vol01/display_fog_naked.jpg";
import displ02 from "../../../../assets/_display_research/_rman/_vol01/display_intermed_fog_sl.jpg";
import displ03 from "../../../../assets/_display_research/_rman/_vol01/display_simplefog_sl.jpg";
import displ04 from "../../../../assets/_display_research/_rman/_vol01/display_volume_call.jpg";
import displ05 from "../../../../assets/_display_research/_rman/_vol01/atmos_intermediate_fog01.mp4";
import displ06 from "../../../../assets/_display_research/_rman/_vol01/atmos_intermediate_fog_light_occ01.mp4";
import displ07 from "../../../../assets/_display_research/_rman/_vol01/atmos_vol_fog_light_occ_sphere.mp4";
import displ08 from "../../../../assets/_display_research/_rman/_vol01/atmos_simple_fog.mp4";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'One of the more complex visual phenomena eluding computer graphics is atmospheric perspective.',
            format: ''
        },
        {
            text: 'Rendering packages at default render with pin-hole cameras that do not generate atmospheric effects.',
            format: ''
        },
        {
            text: 'Renderman volume shaders and an understanding of RSL allows users to create shading effects influencing an entire scene.',
            format: ''
        },
        {
            text: 'The following documentation illustrates the potential of Renderman\'s fog volume shader in creating such an effect.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: displ01,
    imgFooter: 'Figure 01: Render without Volume Shader'
}

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 01 is a resulting render of a written .rib file with geometry extending into the background.',
            format: ''
        },
        {
            text: 'The addition of a volume shader can influence the resulting imagery.\n',
            format: ''
        },
        {
            text: 'A robust volume shader provides various parameters for modification, but even the most simple volume shader - the fog shader - can strongly affect the scene.',
            format: ''
        },
        {
            text: 'Figure 02 is the same scene rendered with an attached fog shader.',
            format: ''
        },
    ],
    imgSrc: null,
    vidSrc: displ08,
    imgFooter: 'Figure 02: Render with Simple Fog Shader'
}

const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 03 is the volume shader placed in the above sequence.',
            format: ''
        },
        {
            text: 'This shader incorporates only two parameters, and it\'s output influences both color and opacity.',
            format: ''
        },
        {
            text: 'The opacity output is significant for compositing purposes, while color influence creates the fog aesthetic.',
            format: ''
        },
        {
            text: 'Parameter color declares the color of the fog effect. In this case - a grey.',
            format: ''
        },
        {
            text: 'The distance parameter controls the level of influence on the scene.',
            format: ''
        },
    ],
    imgSrc: displ03,
    imgFooter: 'Figure 03: Simple Fog SL Shader'
}

const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'To apply a volume shader to a scene, using RiSpec, a call must be assigned following the WorldBegin tag within the .rib file - Figure 04.',
            format: ''
        },
        {
            text: 'To test the capabilities of the fog shader, the distance parameter is keyframed over the course of the sequence.',
            format: ''
        },
        {
            text: 'This results in the fading in and out of the fog shader\'s influence in Figure 02.',
            format: ''
        },
        {
            text: 'The result displays how even the simple volume shader can have a strong influence on the scene.',
            format: ''
        },
    ],
    imgSrc: displ04,
    vidSrc: null,
    imgFooter: 'Figure 04: RiSpec Volume Shader Call in .rib'
}

const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'A more robust fog shader provides additional parameters for fine tuning.',
            format: ''
        },
        {
            text: 'Figure 05 illustrates an advanced fog shader with these additional parameters.',
            format: ''
        },
        {
            text: 'This shader substitutes distance for max and min variables (compare: spline / ramp).',
            format: ''
        },
        {
            text: 'Once again, this shader influences both color and opacity.',
            format: ''
        },
    ],
    imgSrc: displ02,
    vidSrc: null,
    imgFooter: 'Figure 05: Fog Shader with Extended Controls'
}

const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 06: Fog shader keyframed with polarized parameters.',
            format: ''
        },
        {
            text: 'Figure 07: Fog shader with refined keyframes.',
            format: ''
        },
        {
            text: 'Figure 08 applies the fog shader to animated geometry to visualize the effect of an object entering and exiting the fog shader\'s influence.',
            format: ''
        },
    ],
    imgSrc: '',
    vidSrc: displ05,
    imgFooter: 'Figure 06: Advanced Fog Shader Sequence 01'
}

const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'Sequences involve high noise and jittering.',
            format: 'secondary'
        },
        {
            text: 'This is due to low sampling of the occlusion function. These effects can be remedied with a higher samples value for occlusion.',
            format: 'secondary'
        },
    ],
    imgSrc: '',
    vidSrc: displ06,
    imgFooter: 'Figure 07: Advanced Fog Shader Sequence 02'
}

const slot08: InformationCardProperties = {
    paragraphs: [],
    imgSrc: '',
    vidSrc: displ07,
    imgFooter: 'Figure 08: Animated Geometry with Fog Shader'
}

export const data: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07,
    slot08
];