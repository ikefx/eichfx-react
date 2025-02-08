import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import beauty from "../../../../assets/_display_research/_rman/_aovs/01_beauty.mp4";
import zDepth from "../../../../assets/_display_research/_rman/_aovs/01_zdep.mp4";
import compos from "../../../../assets/_display_research/_rman/_aovs/01_composite.mp4";
import occlus from "../../../../assets/_display_research/_rman/_aovs/01_occl.mp4";
import displ1 from "../../../../assets/_display_research/_rman/_aovs/display01.jpg";
import displ2 from "../../../../assets/_display_research/_rman/_aovs/display02.jpg";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Animation and Visual Effect pipelines commonly use renderpasses to output elements of imagery in separate files. This allows post-render modification (compositing).',
            format: ''
        },
        {
            text: 'Where Renderman stands out is with AOVs. Renderman allows the user to declare specific data output (AOV) in shader language. Knowledge of RSL and RiSpec can see this done.',
            format: ''
        },
        {
            text: 'To output an AOV, two things must be done.  1. The .rib file must declare the new channel. This tells Renderman to create a new output.  2. The new channel must be declared in RSL in the shader. This tells Renderman what information to put in that channel.',
            format: ''
        },
    ],
    vidSrc: beauty,
    imgFooter: 'Figure 01: Default Pass'
}

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 01 shows a turntable with the most simple surface shaders. We want to add occlusion and depth to this sequence to make it more interesting. However, we want this information to be outputted in separate sequences - that way we can control the effects of layering the footage in compositing.',
            format: ''
        },
        {
            text: 'Let\'s start with depth. Figure 02 shows a simple depth shader. Zdepth is defined from the inverse of the Renderman depth function [1 - depth(P)].',
            format: ''
        },
        {
            text: 'Depth outputs as a float. We have successfully declared our channel surface shader. Next, we need to declare the channel with RiSpec in .rib.',
            format: ''
        },
    ],
    imgSrc: displ1,
    vidSrc: null,
    imgFooter: 'Figure 02: Surface Shader zdepth Channel Declared'
}

const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 03 shows the header of our .rib file. The red text activates our depth channels.',
            format: ''
        },
        {
            text: '[DisplayChannel "float zdepth"] holds parameter information for our new depth channel.',
            format: ''
        },
        {
            text: 'The following two lines of RiSpec declare the channels for the renderer. The rgba line is our default beauty pass, while zdepth line is our new depth AOV.',
            format: ''
        },
        {
            text: 'Note: The pound key is not part of syntax.',
            format: ''
        },
    ],
    imgSrc: displ2,
    imgFooter: 'Figure 03: .rib Header Declaring new Channel'
}

const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'With Depth declared in our surface shader, and a depth channel declared in the .rib, we generate a rendered sequence outside of the beauty pass - the depth pass, Figure 04.',
            format: ''
        },
        {
            text: 'The same method used for occlusion. Occlusion is greyscale, so can be outputted as a float as well.',
            format: ''
        },
        {
            text: 'Figure 05 shows the occlusion sequence. Be sure to have raytracing activated in the .rib or else not achieve results.',
            format: ''
        },
        {
            text: 'Figure 06 shows the final composite.',
            format: ''
        },
    ],
    imgSrc: '',
    vidSrc: zDepth,
    imgFooter: 'Figure 04: Depth Channel Sequence'
}

const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: ''
        },
        {
            text: 'The purpose of this write-up is to explore the development of Display Channels and outputting _AOVs.',
            format: ''
        },
        {
            text: 'When compositing a shot, the depth pass is not usually implemented with a multiply function.',
            format: ''
        },
    ],
    imgSrc: '',
    vidSrc: occlus,
    imgFooter: 'Figure 05: Occlusion Channel Sequence'
}

const slot06: InformationCardProperties = {
    paragraphs: [],
    imgSrc: '',
    vidSrc: compos,
    imgFooter: 'Figure 06: Composited Sequence (surface * occlusion * depth)'
}

export const aov: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
];