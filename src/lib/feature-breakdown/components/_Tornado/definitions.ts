import {
    BreakdownGraphicProperties,
    DetailCardProperties
} from "../../../shared/interfaces/interfaces.ts";
import dis01 from "../../../../assets/_display_breakdown/_tornado/tornado_img001.jpg";
import dis02 from "../../../../assets/_display_breakdown/_tornado/display_tornado.mp4";
import dis03 from "../../../../assets/_display_breakdown/_tornado/tornado_img002.jpg";
import dis04 from "../../../../assets/_display_breakdown/_tornado/tornado_img003.jpg";
import dis05 from "../../../../assets/_display_breakdown/_tornado/tornado_img004.jpg";
import dis06 from "../../../../assets/_display_breakdown/_tornado/tornado_img005.jpg";
import dis07 from "../../../../assets/_display_breakdown/_tornado/tornado_img006.jpg";
import dis08 from "../../../../assets/_display_breakdown/_tornado/tornado_img008.jpg";
import dis09 from "../../../../assets/_display_breakdown/_tornado/tornado_img007.jpg";

const slot01: DetailCardProperties = {
    title: 'Tornado Funnel Effect',
    paragraphs: [
        {
            text: 'FX animation study of a tornado. The effect is rendered atop a camera projection that is concept for scale and orientation.',
            format: ''
        },
        {
            text: 'The combination of a SOP, POP, SHOP, and COP networks all sharing the same velocity parameter create this tornado funnel effect.',
            format: ''
        },
        {
            text: 'The effect originates from a polywire, a grid, and a popnet. Point normals from SOP are brought in as velocity using VOP.',
            format: ''
        },
        {
            text: 'A Popnet scatters points along the center of the funnel using the same velocity to create a debris field. SHOP is used to adjust opacity during particle life.',
            format: ''
        },
    ],
    imgUri: dis01,
    vidUri: '',
    footer: 'Tools Used: SideFX Houdini | HScript | Rendered with Mantra | Adobe Photoshop'
};
const slot02: BreakdownGraphicProperties = {
    imgUri: null,
    vidUri: dis02,
    label: 'Sample Animation'
}
const slot04: DetailCardProperties = {
    title: 'Point Normals as Velocity',
    paragraphs: [
        {
            text: 'The funnel effects motion originates from a SOP wire extruded into a polygon object.',
            format: ''
        },
        {
            text: 'With Houdini, point normals can be added to the points of the polygon object. This is done because normals consist of a (x,y,z) coordinate matrix.',
            format: ''
        },
        {
            text: 'Instead of relying upon GPU costly force-driven velocity from a dynamic simulation, the coordinate system (Point Normals) can be referenced as velocity instead.',
            format: ''
        },
        {
            text: 'This method is easier to manipulate, GPU-friendly, and ideal for the vortex-esque motion in this project',
            format: ''
        },
        {
            text: 'To adjust the new point normals to face in the appropriate direction, the matrix needs simply be directed to the position of the next point normal (they are named in an integer increment convention, allowing the next point call in Hscript to be as easy as $PT + 1).',
            format: ''
        },
        {
            text: 'The picture to the right is a top view of the SOP geometry with point normals viewable. The blue lines are the point normals.',
            format: ''
        },
        {
            text: 'The coordination is perfect for a funnel effect velocity. To alter this velocity, a user needs only alter the SOP geometry, as these point normal positions are dependant on the SOP object.',
            format: ''
        },
        {
            text: 'Easily adjustable, GPU friendly, and ideal for a vortex simulation.',
            format: ''
        },
    ],
    imgUri: dis03,
    vidUri: '',
    footer: 'Funnel Polygon Object with Visible Point Normals Added, Point Operator \'Add Normal\' Hscript Demo'
};
const slot05: BreakdownGraphicProperties = {
    imgUri: dis06,
    vidUri: null,
    label: 'Points Scattered from SOP Grid for Ground Volume'
}
const slot06: BreakdownGraphicProperties = {
    imgUri: dis07,
    vidUri: null,
    label: 'Ground Points with VOP Manipulated Point Normals Converging {x,z} to Origin'
}
const slot07: BreakdownGraphicProperties = {
    imgUri: dis04,
    vidUri: null,
    label: 'Funnel and Ground Points Merged, Normals Persist as Custom Attribute'
}
const slot08: BreakdownGraphicProperties = {
    imgUri: dis05,
    vidUri: null,
    label: 'Dynamic Operator Network | Pyro Solver with Scattered Points as Source'
}
const slot09: BreakdownGraphicProperties = {
    imgUri: dis08,
    vidUri: null,
    label: 'Debris Field Point Operator Network, Funnel Velocity Offsets Noise Velocity'
}
const slot10: BreakdownGraphicProperties = {
    imgUri: dis09,
    vidUri: null,
    label: 'Scene Viewport Pane Screenshot'
}
export const data = {
    top: slot01,
    hero: dis02,
    slotsDescription: [
        slot01,
        slot04,
    ],
    slotsGraphic: [
        slot02,
        slot05,
        slot06,
        slot07,
        slot08,
        slot09,
        slot10
    ]
};