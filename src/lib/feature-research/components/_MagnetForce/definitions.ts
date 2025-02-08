import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'This workflow demonstrates the use of magnet force simulation with Houdini.',
            format: ''
        },
        {
            text: 'The result is a strong and fluid movement of objects to and from origin.',
            format: ''
        },
        {
            text: 'For this example, spheres are pushed and pulled using a magnet force dop network.',
            format: ''
        },
        {
            text: 'Once keyframed, the resulting animation exhibits an ideal example of magnet force behavior.',
            format: ''
        },
        {
            text: 'To enhance visual clarity of object movement, textures in the form of cue balls are added to the geometry.',
            format: ''
        },
        {
            text: 'Click Figure 01\'s caption or this link for full resolution video.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 01: Magnet Force Cue Ball Simulation'
}
const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The Rigid Body Point Object shelf tool is used to scatter geometry across a number of points.',
            format: ''
        },
        {
            text: 'This tool requires first the geometry in which to scatter, and second a volume of points. These points will be where the copied first geometry object instances will be scattered to ( Figure 02 ).',
            format: ''
        },
        {
            text: 'To allow the addition of texture materials to the geometry primitives later on, UVs can be laid out on the geometry object.',
            format: ''
        },
        {
            text: 'RDB Point Object instances the sphere, so it is best for the UVs to be laid now ( those UVs will come in handy later when materials are applied ).',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 02: Primitive to Copy and Target Points for RDB Point Object Tool'
}
const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'For the source points, a scatter SOP is used to scatter points within a volume. This SOP computes nearest point ( Average of N nearest ).',
            format: ''
        },
        {
            text: 'The attribute Average of N nearest, named and placed with a point SOP, serves as a radius for each sphere once they are copied. With this done the copied spheres will not overlap or intersect.',
            format: ''
        },
        {
            text: 'With the points scattered and their unique pscale attribute present the scene is ready for the RDB shelf tools use.',
            format: ''
        },
        {
            text: 'The tool will create a dop network, and add a dop import SOP to the scattered point geometry object ( Figure 03 ).',
            format: ''
        },
        {
            text: 'The next step would be to create the metaball geometry that will serve as the source and container for magnet force.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 03: RDB Tool Geometry Copy Result'
}
const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The metaball is transformed slightly. Since the ball serves as the center in which the spheres will attract, moving it even slightly will have a visible result on the final simulation.',
            format: ''
        },
        {
            text: 'The method for translating the metaball used in this example is a Motion Effects Chop Network.',
            format: ''
        },
        {
            text: 'This method creates a Motion Effects Chop Network from the metaball nodes translate params. Noise is added within this CHOP network. The application of noise to translation value can be seen in the Motion View Pane ( Figure 04 ).',
            format: ''
        },
        {
            text: 'Once the metaball is animated, the Houdini Magnet Force shelf tool can be used. The metaball serves as the force field in which the spheres will be constrained.',
            format: ''
        },
        {
            text: 'If Magnet Force is applied properly, a new operator called magnetforce1 will be added to the dop network tree.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 04: Motion View of Metaball xForm Motion Effects Noise'
}
const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The scale of force in the magnetforce operator can be keyframed ( Figure 05 ). This parameter will adjust the proximity of the spheres to origin.',
            format: ''
        },
        {
            text: 'This creates the push and pull aspect of the simulation.',
            format: ''
        },
        {
            text: 'Another addition to the simulation would be another force that can slightly boost the rotation of the spheres. A uniform force operator will server for this purpose.',
            format: ''
        },
        {
            text: 'A fraction of noise is added via the uniform force operator. This increases variation in rotation among spheres.',
            format: ''
        },
        {
            text: 'For a final adjustment, a drag force operator is used to adjust velocity-related parameters ( for this example, Torque ).',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 05: Channel Editor Pane of MagnetForce Force Scale Parameter'
}
const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Patterns and textures will provide real appeal to the motion within this simulation. For this example, a custom attribute is added to each sphere with the AttribCreate operator (this is done within the instanced spheres/points geo object, after the dopimport operator).',
            format: ''
        },
        {
            text: 'This operator applies a string parameter to each sphere. The string itself is created through concatenation of the project\'s working directory, an increment variable, and a filetype extension.',
            format: ''
        },
        {
            text: 'An example of string concatenation: $HIP/img_directory. + rand($OBJID) + 1 + .png',
            format: ''
        },
        {
            text: 'If concatenation and the file location and name conventions are consistent, a texture can will be applied randomly to each sphere from that directory.',
            format: ''
        },
        {
            text: '(File names, concatenation, and increment iterations must be exact. This custom attribute string that is being concatenated is the path to the image file(s). Understandable, it must be exact).',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 06: Example Texture File for Material SOP'
}
const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: ''
        },
        {
            text: 'Another element that will really sell the motion of this simulation is motion blur. Adding velocity and object motion blur will really sell the movement of the spheres when combined with texture patterns (as this example demonstrates with cue ball textures).',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 05: Channel Editor Pane of MagnetForce Force Scale Parameter'
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