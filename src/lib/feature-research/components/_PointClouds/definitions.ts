import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'In our AOV write-up we relied on raytracing to generate an occlusion pass.',
            format: ''
        },
        {
            text: 'For a short web video, raytracing may not seem too costly, but in an industry standard animation raytracing can induce severe CPU stress and multiply render times exponentially.',
            format: ''
        },
        {
            text: 'Renderman excels with taking raytraced data and storing it for reuse. Eliminating the need of raytracing after preliminary bake passes.',
            format: ''
        },
    ],
    imgSrc: 'PIC HERE',
    imgFooter: 'Figure 01: Raytraced Occlusion Sequence'
}

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 01 shows a turntable with the most simple surface shaders. We want to add occlusion and depth to this sequence to make it more interesting. However, we want this information to be outputted in seperate sequences - that way we can control the effects of layering the footage in compositing.',
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
    imgSrc: 'PIC HERE',
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
    imgSrc: 'PIC HERE',
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
    imgSrc: 'PIC HERE',
    imgFooter: 'Figure 04: Depth Channel Sequence'
}

const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note: The purpose of this write-up is to explore the development of Display Channels and outputting _AOVs.',
            format: ''
        },
        {
            text: 'When compositing a shot, the depth pass is not usually implemented with a multiply function.',
            format: ''
        },
    ],
    imgSrc: 'PIC HERE',
    imgFooter: 'Figure 05: Occlusion Channel Sequence'
}

const slot06: InformationCardProperties = {
    paragraphs: [],
    imgSrc: 'PIC HERE',
    imgFooter: 'Figure 06: Composited Sequence (surface * occlusion * depth)'
}

export const pointClouds: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
];