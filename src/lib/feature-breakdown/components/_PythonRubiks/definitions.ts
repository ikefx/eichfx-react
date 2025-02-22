import {
    BreakdownGraphicProperties, Card,
    DetailCardProperties
} from "../../../shared/interfaces/interfaces.ts";
import dis01 from "../../../../assets/_display_breakdown/_rubiks/rubik.jpg";
import dis02 from "../../../../assets/_display_breakdown/_rubiks/display_rubik.mp4";
import dis04 from "../../../../assets/_display_breakdown/_rubiks/rubik_img001.jpg";
import dis05 from "../../../../assets/_display_breakdown/_rubiks/rubik_img002.jpg";
import dis07 from "../../../../assets/_display_breakdown/_rubiks/rubik_img007.jpg";
import dis08 from "../../../../assets/_display_breakdown/_rubiks/rubik_img005.jpg";
import dis09 from "../../../../assets/_display_breakdown/_rubiks/rubik_img006.jpg";

const slot01: DetailCardProperties = {
    title: 'Python Rubik\'s Cube',
    paragraphs: [
        {
            text: 'This HDA (Houdini digital asset) utilizes the Type Operator\'s Event Handling system to create a fully-functional Rubik\'s Cube - built and manipulated entirely with Python.',
            format: ''
        },
        {
            text: 'The On-Created event runs a Python script that generates the SOP and SHOP networks each time the asset is dropped to scene. This guarantees flawless integration with any Houdini project.',
            format: ''
        },
        {
            text: 'A second module consist of conditional functions that permit geometry rotation without breaking transformations at the global level.',
            format: ''
        },
        {
            text: 'On-Delete and On-Update events run Python scripts that delete all networks within the HDA (this prevents baking networks to the asset).',
            format: ''
        },
    ],
    imgUri: dis01,
    vidUri: '',
    footer: 'Tools Used: SideFX Houdini | Python | Rendered with Houdini\'s PBR Renderer',
    type: 'detail'
};
const slot02: BreakdownGraphicProperties = {
    imgUri: null,
    vidUri: dis02,
    label: 'Sample Animation',
    type: 'graphic'
}
const slot04: DetailCardProperties = {
    title: 'On-Created Python Script',
    paragraphs: [
        {
            text: 'Houdini\'s Eventing Handling Type Operator tab allows scripts to be implemented based upon actions taken within the project scene.',
            format: ''
        },
        {
            text: 'On-Created refers to running a specific script when the HDA is dropped to scene. This event is utilized by using an empty HDA.',
            format: ''
        },
        {
            text: 'Instead of baking SOP and SHOP networks to the HDA, an On-Created Python script runs once the empty HDA is dropped to scene.',
            format: ''
        },
        {
            text: 'This script constructs and configures the SOP and SHOP networks that make up the geometry and surface shader elements of the Rubiks Cube.',
            format: ''
        },
        {
            text: 'By generating the asset with a Python script, all respective elements of the asset have defined namespace variables. This allows name-association with other modules to remain transferable and consistent. Also, by generating the asset through script, flawless implementation to scene is guaranteed.',
            format: ''
        },
        {
            text: 'The script creates 27 cubes, parents a null to and names them, binds a 6 group surface shader to them, extrudes them for additional poly detail, and promotes their translation values to global parameters. The shader is also created and colorized via Python script.',
            format: ''
        },
    ],
    imgUri: dis04,
    vidUri: '',
    footer: 'Python Generated Cube (1 of 27)',
    type: 'detail'
};
const slot05: BreakdownGraphicProperties = {
    imgUri: dis08,
    vidUri: null,
    label: 'Rubik\'s Cube HDA On-Created SOP and SHOP Result',
    type: 'graphic'
}
const slot06: DetailCardProperties = {
    title: 'Promoted UI Parameters',
    paragraphs: [
        {
            text: 'The concept of this HDA is to easily rotate the various grid planes of a rubiks cube - and to do so in a matter that does not break the geometry at the global level, or require handscrubbing keyframes throughout the animation process.',
            format: ''
        },
        {
            text: 'This Python built rubik\'s cube does this with a user-friendly, one-touch button UI solution.',
            format: ''
        },
        {
            text: 'The myFunctions Python module assigns float templates to promoted cube rotation values. These values are bound to UI commands that allow for rubiks cube grid rotation. A user can rotate to any degree in either direction, or rotate at 90 degrees specifically.',
            format: ''
        },
        {
            text: 'This UI also binds a Set Key button to a custom function that keyframes the rubiks cubes current rotation values. This allows the setting of keyframes without have to do so using the HDA\'s translation parameters.',
            format: ''
        },
        {
            text: 'This is ideal because it allows transformations at the global level, and combining transformations of both global and asset level parameters will not break the rubik\'s cube rigging system.',
            format: ''
        },
        {
            text: 'A reset button returns the animation rig to default rotation values of zero - unscrambling the Rubiks Cube.',
            format: ''
        },
    ],
    imgUri: dis07,
    vidUri: '',
    footer: 'Rubik\'s Cube Digital Assets Promoted Parameters',
    type: 'detail'
};
const slot07: BreakdownGraphicProperties = {
    imgUri: dis09,
    vidUri: null,
    label: 'Scrambled Rubik\'s Cube with Visible Center Cube Locator',
    type: 'graphic'
}
const slot08: BreakdownGraphicProperties = {
    imgUri: dis05,
    vidUri: null,
    label: 'Center Cube Null Object, Conditional Rotations Measured From This Locator',
    type: 'graphic'
}
export const data: Card[] = [
    slot01,
    slot02,
    slot04,
    slot05,
    slot06,
    slot07,
    slot08
];