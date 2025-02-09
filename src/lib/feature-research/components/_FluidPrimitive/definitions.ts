import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import disO01 from "../../../../assets/_display_research/_rman/_fluidprimitives/display_fluidprim.mp4";
import disO02 from "../../../../assets/_display_research/_rman/_fluidprimitives/display_flusim01.jpg";
import disO03 from "../../../../assets/_display_research/_rman/_fluidprimitives/display_flusim02.jpg";
import disO04 from "../../../../assets/_display_research/_rman/_fluidprimitives/display_flusim03.jpg";
import disO05 from "../../../../assets/_display_research/_rman/_fluidprimitives/hfx_display1.mp4";
import disO06 from "../../../../assets/_display_research/_rman/_fluidprimitives/display_flusim04.jpg";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'This document demonstrates a workflow that uses the position of points in geometry primitives as source and destination parameters for a flip fluid particle simulation (Figure 01: Click caption).',
            format: ''
        },
        {
            text: 'To summarize: two seperate primitives are dropped to scene. From these primitives, points are isolated, called, and forced from primitive A to the point position\'s of primitive B. This is done using an attractor SOP.',
            format: ''
        },
        {
            text: 'From this source and target simulation bgeo files are baked. These bgeos are then used as source reference in a flip fluid solver. This simple method creates from the point translation animation a fluid substance simulation.',
            format: ''
        },
        {
            text: 'The result provides fluid simulation of primitive A morphing to the position and volume of primitive B.',
            format: ''
        }
    ],
    vidSrc: disO01,
    imgSrc: null,
    imgFooter: 'Figure 01: Fluid Primitive Simulation'
}
const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'An important step after converting the primitive objects into points (via pointsfromvolume node) is to ensure that the primitives have an equal amount of points.',
            format: ''
        },
        {
            text: 'To do this a random node can be used on either primitive to scatter additional points throughout the volume. If primitive A has more points, add points in the amount of the additional amount in A to primitive B with random/scattered placement.',
            format: ''
        },
        {
            text: 'ie: newBpoints = ( Apoints - Bpoints ) + Bpoints',
            format: ''
        },
        {
            text: 'With an equal amount of points in each primitive, a sort node can be used to number (assign name to points) incrementally from an axis. If both primitive point volumes are sorted by the same axis, both clusters should have the point named 1 in the same corner, and the final point (which names should be equal, as names are increments and point increments should be equal because both clusters have equal number of points) in the opposite corner.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO02,
    imgFooter: 'Figure 02: Font Primitives Geometry ( Source and Target )'
}
const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'With the points for each primitive equal and sorted, a popnetwork can be dropped to continue the workflow. The popnetwork used will create a proxy simulation.',
            format: ''
        },
        {
            text: 'Point volume (the primitive A) is imported to the popnetwork. From here simply have birth of particles, and have one particle emit from each point. An attractor SOP is the force that drives the particles. This node simply requires the primitive B point volume as the SOP to attract to. Declare one point per particle.',
            format: ''
        },
        {
            text: 'This will result in the creation of a particle per point in primitive A (and at the same location), and the particle will translate down to the position of it\'s partner point in primitive B.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO03,
    imgFooter: 'Figure 03: Points from Primitive Viewport Image'
}
const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'If sorted properly, for example, point 1 in primitive A is located in the upper left of that primitive. A particle will be born from that spot and float over to the upper left corner of primitive B.',
            format: ''
        },
        {
            text: 'This results mimicks a rough draft of a fluid sim.',
            format: ''
        },
        {
            text: 'The Flip Fluid Solver is located in the Particle Fluids tab shelf button. This Houdini tool will take the popnetwork and create a simulation from it. The result is a dopnetwork and fluid sim node both dropped to the nodeview window.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO04,
    imgFooter: 'Figure 04: The autoDopNetwork Particle Simulation'
}
const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The dopnet contains the parameters of the particles, within force, birth, and death parameters can all be adjusted.',
            format: ''
        },
        {
            text: 'The second node that was dropped is the actual fluid sim desired for render. It contains the surfacing and volume properties of the fluid solver. This network imports the dopnet and behaves accordingly (Figure 05).',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO06,
    imgFooter: 'Figure 05: The FlipFluid Solver\'s Fluid Sim'
}
const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'In the sequence there is excess particles that pass primitive B to collide with a ground plane. Since this write-up explores only primitive point to point simulation it was excluded.',
            format: 'secondary'
        },
        {
            text: 'However briefly: a random group of particles from the simulation can be copied from the dopnet and simmed in a new popnet using gravity as force. From there the process of referencing for a flip fluid is done again.',
            format: 'secondary'
        },
    ],
    vidSrc: disO05,
    imgSrc: null,
    imgFooter: 'Figure 06: The FlipFluid Solver\'s Fluid Sim'
}
export const data: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06
];