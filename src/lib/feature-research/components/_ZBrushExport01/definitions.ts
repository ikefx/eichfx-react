import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import displ01 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb01.jpg";
import displ02 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb02.jpg";
import displ03 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb03.jpg";
import displ04 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb04.jpg";
import displ05 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb05.jpg";
import displ06 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb06.jpg";
import displ07 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_zb07.jpg";
import displ08 from "../../../../assets/_display_research/_rman/_zbrushexport01/display_ztool01.mp4";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Pixologic Z Brush is a powerful 3D sculpting tool used to create organic imagery. ZBrush and similiar sculpting packages are used in game and FX studios to create incredible 3D assets.',
            format: ''
        },
        {
            text: 'However, no matter the quality of sculpted assets, their quality drastically dilutes if not exported from the sculpting package and imported into 3D environments properly.',
            format: ''
        },
        {
            text: 'The following documents preferred methods for the sculpting package to renderer workflow.',
            format: ''
        },
        {
            text: 'Figure 01 shows the .ztl file desired for rendering in RfM. This tool consist of over 9 million polygons and will easily stress the hardware.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: displ01,
    imgFooter: 'Figure 01: .ztl in ZBrush Environment'
}

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'This is not acceptable for the 3D environment. A displacement map must be written to hold the fine detail, and the lowest subdivision level will act as the geo primitive.',
            format: ''
        },
        {
            text: 'First, if the tool does not include a UV map, one can be written in Z Brush\'s UV Map parameter. Tool > UV Map (Figure 02).',
            format: ''
        },
        {
            text: 'From my trial and error, Adaptive UV Tiles produce the greatest amount of accuracy converting .ztl to displacement map.',
            format: ''
        },
        {
            text: 'UV Map Size defines the size of the map, ultimately defining resolution of all displacement and texture maps generated.',
            format: ''
        },
    ],
    imgSrc: displ02,
    vidSrc: null,
    imgFooter: 'Figure 02: UV Map Tool Paremeters'
}

const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'With a UV Map in existance, displacement maps can be written.',
            format: ''
        },
        {
            text: 'To achieve a seamless displacement map for renderers, activate Adaptive, SmoothUV, and 32Bit parameters.',
            format: ''
        },
        {
            text: 'Renderman can read 32bit Tiff files, so take advantage of the additional float range with this file type.',
            format: ''
        },
        {
            text: 'The Create And Export Map button will generate the desired displacement map. Best to store the output in the Maya project\'s working directory. As we will look for it later.',
            format: ''
        },
    ],
    imgSrc: displ03,
    imgFooter: 'Figure 03: Displacement Paramenters in Tool Palette'
}

const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Next, the base subdivision level is exported to serve as the primitive within the 3D environment. The button for this can be found at the top of the Tool palette.',
            format: ''
        },
        {
            text: 'The .obj extension is the acceptable file format for the outputted mesh.',
            format: ''
        },
        {
            text: 'For the Mental Ray method, export as the maya ascii format (figure 04). This will export a 16bit tiff for displacement. With ZBrush 3.5r3 and up, the export .ma method is effective for Mental Ray rendering .',
            format: ''
        },
        {
            text: 'A displacement map and mesh output complete the work with ZBrush. Next launch the Maya scene.',
            format: ''
        },
    ],
    imgSrc: displ04,
    vidSrc: null,
    imgFooter: 'Figure 04: Mesh Export Maya Ascii Format'
}

const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Within the 3D environment, import the base mesh. The .obj format will import the primitive, and is acceptable for the Renderman work flow.',
            format: ''
        },
        {
            text: 'For MR method, the .ma format imports the mesh, and attaches a default shader network to it as well. Ideal for Mental Ray method.',
            format: ''
        },
        {
            text: 'This shader network consist of a Maya Blinn surface shader for surface qualities and a functioning Maya displacement node for the displacement.',
            format: ''
        },
        {
            text: 'The black to white ratio - alpha gain and alpha offset - within the Maya displacement node is predetermined by the software (Figure 05), and is ready to render.',
            format: ''
        },
    ],
    imgSrc: displ05,
    vidSrc: null,
    imgFooter: 'Figure 05: Maya Displacement Node Parameters'
}

const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'That\'s it for the Mental Ray method, simple and easy! Renderman method requires a few more steps. Absolutely worth the work though, as Renderman can take advantage of the 32bit displacement, while other renderers are limited to 16bit.',
            format: ''
        },
        {
            text: 'Instead of using a .ma format mesh\'s default shading network, a Renderman shading network has to be written.',
            format: ''
        },
        {
            text: 'SLIM is used for node based shader creation instead of Maya\'s Hypershade workspace. Add a RM Shader to the hypershade library (Figure 06).',
            format: ''
        },
        {
            text: 'A .tex format of the map can be plugged into the string parameter of the displacement node.',
            format: ''
        }
    ],
    imgSrc: displ06,
    vidSrc: null,
    imgFooter: 'Figure 06: Renderman Shader Nodes within Hypershade'
}

const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 07 shows a SLIM combine node. The displacement map is fed into this node as the base layer.',
            format: ''
        },
        {
            text: 'The Combine node\'s Kb and Base parameters are effectively the equivelent of a maya node\'s gain and offset.',
            format: '',
        },
        {
            text: 'With the maya displacement node, alpha gain(x) and alpha offset(y) had a ratio established as y = - 0.5x',
            format: ''
        },
        {
            text: 'The same formula works for the RMAN displacement node, and from trials and testing: x = 1 always.',
            format: ''
        },
        {
            text: 'Add this displacement node to the Maya scene and attach it to the mesh primitive.',
            format: ''
        },
    ],
    imgSrc: displ07,
    vidSrc: null,
    imgFooter: 'Figure 07: Smoke.sl with Volume Noise Light Color'
}

const slot08: InformationCardProperties = {
    paragraphs: [
        {
            text: 'With the displacement node in place the asset is ready for render (Figure: 08).',
            format: ''
        },
        {
            text: 'In the displacement\'s image file node within SLIM , S and T filtering default at 1.0. These variables safeguard from antialiasing. However, the default 1 is rather overprotective. If fine detail of the sculpt seems lost in the displacement, bring the filtering to lower values, until such time that antialiasing appears.',
            format: '',
        },
        {
            text: '',
            format: '',
        },
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'To achieve results with additional resemblance to the ztool within the ZBrush environment, render global and camera settings such as Global Illumination lighting and focal length must be implemented and adjusted.',
            format: 'secondary'
        },
    ],
    imgSrc: null,
    vidSrc: displ08,
    imgFooter: 'Figure 08: ZBrush Mesh & Displacement Rendered with RfM'
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