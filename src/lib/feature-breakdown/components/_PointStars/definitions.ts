import {
    BreakdownGraphicProperties,
    DetailCardProperties
} from "../../../shared/interfaces/interfaces.ts";
import dis01 from "../../../../assets/_display_breakdown/_pointstars/vortex_img001.jpg";
import dis02 from "../../../../assets/_display_breakdown/_pointstars/display_vortex.mp4";
import dis03 from "../../../../assets/_display_breakdown/_pointstars/vortex_img002.jpg";
import dis04 from "../../../../assets/_display_breakdown/_pointstars/vortex_img003.jpg";
import dis05 from "../../../../assets/_display_breakdown/_pointstars/vortex_img004.jpg";
import dis06 from "../../../../assets/_display_breakdown/_pointstars/vortex_img005.jpg";
import dis07 from "../../../../assets/_display_breakdown/_pointstars/vortex_img006.jpg";
import dis08 from "../../../../assets/_display_breakdown/_pointstars/vortex_img007.jpg";
import dis09 from "../../../../assets/_display_breakdown/_pointstars/display_vortex2.mp4";

const slot01: DetailCardProperties = {
    title: 'Point Star Cluster',
    paragraphs: [
        {
            text: 'A study with the objective to create outer space imagery using only Houdini procedural networks. No photography or textures are used in this particle-based star system render.',
            format: ''
        },
        {
            text: 'VOP networks illuminate points and contrast PSCALE with noise to add variety and depth. The central star cluster uses tangent operations to create a spiral animation.',
            format: ''
        },
        {
            text: 'This point system is also used in a volume-from-points network to create a volumetric gas simulation.',
            format: ''
        },
        {
            text: 'These elements are brought into a Composite Operator Network. Here they are layered, colorized, and manipulated to create the final render.',
            format: ''
        },
    ],
    imgUri: dis01,
    vidUri: '',
    footer: 'Tools Used: SideFX Houdini | HScript | Rendered with Mantra'
};
const slot02: BreakdownGraphicProperties = {
    imgUri: null,
    vidUri: dis02,
    label: 'Sample Animation'
}
const slot03: BreakdownGraphicProperties = {
    imgUri: dis04,
    vidUri: null,
    label: 'Houdini Scene View Pane Screenshot of Point Star Project'
}
const slot04: DetailCardProperties = {
    title: 'Points as Stars with VOP',
    paragraphs: [
        {
            text: 'The objective of this project is to create outer space imagery using only procedural approaches with Houdini. Since textures are not an acceptable method for this workflow - rendering points as stars is the ideal alternative.',
            format: ''
        },
        {
            text: 'Points are scattered across SOP geometry. These points, for openGL viewing purposes, are given the addition of a particle system.',
            format: ''
        },
        {
            text: 'The points are fed into a VOP network. Inside VOP their position and scale are altered with noise. This output is grouped into two categories based upon their scale.',
            format: ''
        },
        {
            text: 'Each group is fed into their own VOP network at this point. Their position, color, and orientation are all manipulated to create the outer space aesthetic. Since the points are placed in seperate groups, contrasting color and orientation can be applied within VOP.',
            format: ''
        },
        {
            text: 'There are two source SOP nodes from which the points are scattering from. For the background stars, a sphere is scattered, the scene is rendered from within this spherical scattering of points.',
            format: ''
        },
        {
            text: 'The foreground stars scatter from a circle. These points are fed into a Popnetwork where VOP is used to give them an orbital velocity (This creates their spiral orientation).',
            format: ''
        },
    ],
    imgUri: dis03,
    vidUri: '',
    footer: 'Scattered Points from Sphere with Position Altered Via VOP'
};
const slot05: BreakdownGraphicProperties = {
    imgUri: dis05,
    vidUri: null,
    label: 'Scattered Points from Sphere II'
}
const slot06: DetailCardProperties = {
    title: 'Vortex Points and Volume',
    paragraphs: [
        {
            text: 'The foreground element of this project consists first of a scattered group of points that are modified via VOP in a method similiar to that of the background stars.',
            format: ''
        },
        {
            text: 'The second piece of the foreground element is a network that reads in the first piece, and converts it to a fluid source. This fluid is taken into a DOP network and fed to a pyrosolver.',
            format: ''
        },
        {
            text: 'The result is a gaseous volumetric animation imitating the spiral movement of it\'s point source. When an ideal frame of the simulation is recognized, it is locked at that frame.',
            format: ''
        },
        {
            text: 'With both foreground elements and the background stars in position, they can be rendered separately and brought into a Composite Operator Network for compositing.',
            format: ''
        },
        {
            text: 'The CompNet provides all the resources respective of compositing software. Compositing in Houdini provides instantaneous adjustments between 3D and 2D processes of production: a real time-saver in the look-development process.',
            format: ''
        },
        {
            text: 'This Composite Network layers the footage, colorizes, and filters to create 2D volumetric appearances like depth of field, bokeh, and lens burn. While some process in 3D may be more robust, for the purposes of this project, these 2D workflows provided satisfactory results.',
            format: ''
        },
    ],
    imgUri: dis06,
    vidUri: '',
    footer: 'Center Points with Orbital Velocity for Foreground Stars'
};
const slot07: BreakdownGraphicProperties = {
    imgUri: dis07,
    vidUri: null,
    label: 'Foreground Volume from Center Points (Orbital Velocity Persist)'
}
const slot08: BreakdownGraphicProperties = {
    imgUri: dis08,
    vidUri: null,
    label: 'Composite Network Pane Example Screenshot'
}
const slot09: BreakdownGraphicProperties = {
    imgUri: null,
    vidUri: dis09,
    label: 'Orbital Velocity Demonstration with Foreground Stars'
}
export const data = {
    top: slot01,
    hero: dis02,
    slotsDescription: [
        slot01,
        slot04,
        slot06,
    ],
    slotsGraphic: [
        slot02,
        slot03,
        slot05,
        slot07,
        slot08,
        slot09,
    ]
};