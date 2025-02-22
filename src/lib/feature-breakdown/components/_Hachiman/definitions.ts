import {
    BreakdownGraphicDuoProperties,
    BreakdownGraphicProperties,
    DetailCardProperties,
    Card
} from "../../../shared/interfaces/interfaces.ts";
import dis01 from "../../../../assets/_display_breakdown/_hachiman/hachi_img001.png";
import dis02 from "../../../../assets/_display_breakdown/_hachiman/hachi_img002.png";
import dis03 from "../../../../assets/_display_breakdown/_hachiman/hachi_img010.jpg";
import dis04 from "../../../../assets/_display_breakdown/_hachiman/hachi_img007.jpg";
import dis05 from "../../../../assets/_display_breakdown/_hachiman/hachi_img009.jpg";
import dis06 from "../../../../assets/_display_breakdown/_hachiman/hachi_img008.jpg";
import dis08 from "../../../../assets/_display_breakdown/_hachiman/hachi_display.mp4";
import dis09 from "../../../../assets/_display_breakdown/_hachiman/hachi_img004.png";
import dis10 from "../../../../assets/_display_breakdown/_hachiman/hachi_img013.jpg";
import dis11 from "../../../../assets/_display_breakdown/_hachiman/hachi_passes.jpg";
import dis12 from "../../../../assets/_display_breakdown/_hachiman/hachi_img005.jpg";
import dis13 from "../../../../assets/_display_breakdown/_hachiman/hachi_img003.png";
import dis14 from "../../../../assets/_display_breakdown/_hachiman/hachi_img012.jpg";
import dis15 from "../../../../assets/_display_breakdown/_hachiman/hachi_img011.jpg";
const slot01: DetailCardProperties = {
    title: 'Hachiman',
    paragraphs: [
        {
            text: 'ZBrush workflow to preserve UV information across software allows additional texturing methods.',
            format: ''
        },
        {
            text: 'In addition to photoshop image sources, workflows with ZBrush extract 3D painted textures, projections, and baked material images.',
            format: ''
        },
        {
            text: 'Maya render layers, light linking, and a renderman atmosphere shader create additional AOV outputs that allow adjustment to lighting in the compositing process.',
            format: ''
        },
        {
            text: 'Imagery inspired by Koshun\'s Shinto deity Hachiman - depicted as a buddhist monk.',
            format: ''
        },
        {
            text: 'Direct download here for 720 resolution video.',
            format: ''
        }
    ],
    imgUri: dis01,
    vidUri: '',
    footer: 'Tools Used: Pixologic Z Brush | Autodesk Maya | Pixar Renderman Studios | Adobe Photoshop | Apple Shake',
    footerClass: 'justify-content-start',
    type: 'detail'
};
const slot02: BreakdownGraphicProperties = {
    imgUri: null,
    vidUri: dis08,
    label: 'Animated Sequence',
    type: 'graphic'
}
const slot03: BreakdownGraphicProperties = {
    imgUri: dis09,
    vidUri: null,
    label: 'Master Layer Beauty Pass Render',
    type: 'graphic'
}
const slot04: BreakdownGraphicProperties = {
    imgUri: dis10,
    vidUri: null,
    label: 'Maya Scene Environment: SubD and Polygon Meshes',
    type: 'graphic'
}
const slot05: BreakdownGraphicProperties = {
    imgUri: dis11,
    vidUri: null,
    label: 'Passes Rendered for Compositing',
    type: 'graphic'
}
const slot06: BreakdownGraphicProperties = {
    imgUri: dis12,
    vidUri: null,
    label: 'Silk Screen Texture Source Image: Endo Morito\'s Penance, Yoshitoshi - 1860',
    type: 'graphic'
}
const slot07: BreakdownGraphicProperties = {
    imgUri: dis04,
    vidUri: null,
    label: 'ZBrush \'Image Plane\' Plugin and MatCap Texture Modification',
    type: 'graphic'
}
const slot08: DetailCardProperties = {
    title: 'ZMaterial to Texture',
    paragraphs: [
        {
            text: 'A workflow established to convert ZBrush Materials into image files used as textures.',
            format: ''
        },
        {
            text: 'MatCap materials are not shaders in the traditional sense. They are realtime openGL presets with color and illumination. This makes a conversion to an alternate 3D software difficult.',
            format: ''
        },
        {
            text: 'Using Image Plane plugin allows the ability to drop an unwrapped texture to the ZBrush canvas with appropriate dimensions. The plane is converted to a polymesh surface and the original sculpt\'s displacement is placed atop. The same displacement map is also plugged in as the alpha for the texture.',
            format: ''
        },
        {
            text: 'This setup allows for the addition of a matcap material. Displacement intensity increases texture contrast and detail, matcap modifiers adjust material color and light tolerance.',
            format: ''
        },
        {
            text: 'GrabDoc command grabs the image plane and stores it as a texture - with the displacement as an alpha - the matcap aesthetic is applied. From there it is exported to disk. More on this method here.',
            format: ''
        },
        {
            text: 'Limitations discovered in this process: Constrast may occur at the gaps of UV tiles (note the artifacting on the arm, and inconsistency of light tolerance on the opposite shoulder).',
            format: ''
        },
    ],
    imgUri: dis06,
    vidUri: '',
    footer: 'ZBrush MatCap to Maya: Texture * Occlusion * Incandescence',
    type: 'detail'
};
const slot09: BreakdownGraphicProperties = {
    imgUri: dis03,
    vidUri: null,
    label: 'RMS Render with ZBrush MatCap Red Wax as Texture',
    type: 'graphic'
}
const slot10: BreakdownGraphicDuoProperties = {
    imgUri1: dis13,
    imgUri2: dis02,
    label: 'WiP Sculpt & Shader Renders',
    type: 'graphic_duo'
}
const slot11: DetailCardProperties = {
    title: 'Renderman Atmosphere',
    paragraphs: [
        {
            text: 'A workflow implementing a Renderman atmosphere component.',
            format: ''
        },
        {
            text: 'Smoke.sl is implemented into the project\'s 3D environment. Look here for atmosphere shader documentation and the volume RSL.sl file.',
            format: ''
        },
        {
            text: 'An alternative Maya render layer replaces traditional light setup for a high contrast keylight with diffused fill lights. Only the key light projects the atmosphere. Distance is measured from camera to illuminated objects to determine appropriate values for shader parameters.',
            format: ''
        },
        {
            text: 'This setup allows for a variation in render settings in comparison to the beauty pass. Higher shading rates on surface shaders, but a lower shading rate for volumes. An explicit shadow pass for the key light allows for a high resolution shadow map exclusive to that light.',
            format: ''
        },
        {
            text: 'Parameters for the smoke.sl are adjusted to create a smoke aesthetic and are combined with a float pattern light color to further increase variation and adjustability.',
            format: ''
        },
        {
            text: 'Expensive render calculations are a limitation of this atmosphere. Smoke.sl\'s raymarching component requires a taxing raytrace calculation.',
            format: ''
        },
    ],
    imgUri: dis14,
    vidUri: '',
    footer: 'Renderman Smoke Atmosphere Shader Render',
    type: 'detail'
};
const slot12: BreakdownGraphicProperties = {
    imgUri: dis15,
    vidUri: null,
    label: 'WiP Atmosphere Shader with Noise - Beauty Pass Render',
    type: 'graphic'
}
const slot13: BreakdownGraphicProperties = {
    imgUri: dis05,
    vidUri: null,
    label: 'Maya Environment: Distance Measurements from Camera',
    type: 'graphic'
}
export const data: Card[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07,
    slot08,
    slot09,
    slot10,
    slot11,
    slot12,
    slot13,
];