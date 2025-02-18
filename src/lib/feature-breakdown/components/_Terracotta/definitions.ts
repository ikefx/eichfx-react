import {
    BreakdownGraphicDuoProperties,
    BreakdownGraphicProperties,
    DetailCardProperties,
    Card,
} from "../../../shared/interfaces/interfaces.ts";
import dis01 from "../../../../assets/_display_breakdown/_terracotta/terra_img001.jpg";
import dis02 from "../../../../assets/_display_breakdown/_terracotta/terra_img002.png";
import dis03 from "../../../../assets/_display_breakdown/_terracotta/terra_img010.png";
import dis04 from "../../../../assets/_display_breakdown/_terracotta/terra_img007.png";
import dis05 from "../../../../assets/_display_breakdown/_terracotta/terra_img009.png";
import dis06 from "../../../../assets/_display_breakdown/_terracotta/terra_img008.png";
import dis07 from "../../../../assets/_display_breakdown/_terracotta/terra_img006.png";
import dis08 from "../../../../assets/_display_breakdown/_terracotta/terra_display.mp4";
import dis09 from "../../../../assets/_display_breakdown/_terracotta/terra_img005.png";
import dis10 from "../../../../assets/_display_breakdown/_terracotta/terra_img003.png";

const slot01: DetailCardProperties = {
    title: 'Terracotta',
    paragraphs: [
        {
            text: 'Independent study developing shader components and a pipeline emphasis for render-optimized high resolution imagery.',
            format: ''
        },
        {
            text: 'Z Brush assets consisting of 9 million polygons each are extracted to Renderman for Maya as SubD proxies with 32 bit Displacement maps.',
            format: ''
        },
        {
            text: 'Shaders written in SLIM extract AOVs for post-rendering modification, layer displacement maps with procedural patterns, and direct inferred passes to bake and reuse raytraced, subsurface, and deep shadow information.',
            format: ''
        },
        {
            text: '720p frame render time: Approx 80 seconds. Imagery inspired by the terracotta statues in Xi\'an China.',
            format: ''
        },
    ],
    imgUri: dis01,
    vidUri: '',
    footer: 'Tools Used: Pixologic Z Brush | Autodesk Maya | Pixar Renderman Studios | RSL | Apple Shake',
    type: 'detail'
};
const hero01: BreakdownGraphicProperties = {
    imgUri: null,
    vidUri: dis08,
    label: null,
    type: 'graphic'

};
const slot02: BreakdownGraphicProperties = {
    imgUri: dis02,
    vidUri: null,
    label: 'Sample Composite',
    type: 'graphic'
}
const slot03: BreakdownGraphicProperties = {
    imgUri: dis03,
    vidUri: null,
    label: 'Passes Rendered for Composite',
    type: 'graphic'
}
const slot04: DetailCardProperties = {
    title: 'Renderman Displacement',
    paragraphs: [
        {
            text: 'A workflow maximizing ZBrush\'s 32bit displacement map integration into Maya and the Renderman software.',
            format: ''
        },
        {
            text: 'The primary objective to replicate a ZBrush sculpt\'s detail into Maya comes through creation of a 2024x2024 displacement map in 32bit tif format.',
            format: ''
        },
        {
            text: 'Precise UV coordinates allow for ST filtering to be kept at a mininum. With less filtering, a wider float range per pixel is calculated from the displacement. Limitation of lower filtering comes when antialiasing begins to appear.',
            format: ''
        },
        {
            text: 'Rman\'s Trace Displacement attribute must be implented for raytrace calculations. To offset this taxing attribute, culling and dicing can be implemented. The limitation of cull and dice is dependent on the base mesh\'s polycount.',
            format: ''
        },
        {
            text: 'Since culling is dependent on normal direction, and normal direction is dependent on polyfaces - if too few, the angle of seperation will cause clipping around displacement contour when the camera circles the geometry. Increasing the base mesh\'s poly count can offset this error, at the expense of a slight increase in render time.',
            format: ''
        },
        {
            text: 'For more information on Z Brush displacements in Maya, look here for documentation.',
            format: ''
        },
    ],
    imgUri: dis04,
    vidUri: '',
    footer: 'Z Brush 32bit TIFF Displacement Maps Rendered in RMS',
    type: 'detail'
};
const slot05: BreakdownGraphicProperties = {
    imgUri: dis05,
    vidUri: null,
    label: 'SLIM Ensemble Shader Network for Statue Shading Group - Surface & Displacement',
    type: 'graphic'
}
const slot06: DetailCardProperties = {
    title: 'Color to Displacement',
    paragraphs: [
        {
            text: 'The texture used for the background geometry\'s coloration is converted for use as a layer of displacement for the object\'s displacement node. This is all done with the Renderman Artist Tool\'s SLIM program.',
            format: ''
        },
        {
            text: 'Within SLIM, for the traditional purpose of creating coloration, the photoshop picture\'s image map file node is assigned to AOV output and surface shader for the background\'s shading group.',
            format: ''
        },
        {
            text: 'Using SLIM\'s built-in remapping nodes, the texture is also converted to grey-scale. Gain and bias are adjusted to soften the values of gradiation. This must be done to avoid antialiasing and obscene extremities in displacement.',
            format: ''
        },
        {
            text: 'After adjustment, the float texture is plugged into a SLIM combine node. This node layers the patterns and maps used for a displacement.',
            format: ''
        },
        {
            text: 'The float pattern from texture is layered atop of the Z Brush displacement to create additional detail capable of casting and receiving shadows.',
            format: ''
        },
        {
            text: 'Ultimately, this method provides extra detail and integration for texture maps.',
            format: ''
        },
    ],
    imgUri: dis06,
    vidUri: '',
    footer: 'Color Texture to Grey-Scale for Displacement',
    type: 'detail'
};
const slot07: BreakdownGraphicProperties = {
    imgUri: dis07,
    vidUri: null,
    label: 'WiP Subsurface Diffusion Render',
    type: 'graphic'
}
const slot08: BreakdownGraphicDuoProperties = {
    imgUri1: dis09,
    imgUri2: dis10,
    label: 'WiP Sculpt & Shader Renders',
    type: 'graphic_duo'
}
export const data: Card[] = [
    slot01,
    hero01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07,
    slot08
];