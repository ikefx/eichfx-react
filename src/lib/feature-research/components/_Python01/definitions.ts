import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import disO01 from "../../../../assets/_display_research/_rman/_python01/display_rubik01.mp4";
import disO02 from "../../../../assets/_display_research/_rman/_python01/display_rubik02.jpg";
import disO03 from "../../../../assets/_display_research/_rman/_python01/display_rubik03.jpg";
import disO04 from "../../../../assets/_display_research/_rman/_python01/display_rubik04.jpg";
import disO05 from "../../../../assets/_display_research/_rman/_python01/display_rubik05.jpg";
import disO06 from "../../../../assets/_display_research/_rman/_python01/display_rubik06.jpg";
const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'With Houdini, a user has access to a robust library of python programming implementation.',
            format: ''
        },
        {
            text: 'This document summarizes and displays the scripts used to create a Rubik Cube Houdini Asset that is rigged and ready for play. All nodes and functionality are born from script.',
            format: ''
        },
        {
            text: 'In this workflow, two separate python modules are written.',
            format: ''
        },
        {
            text: '1. With Houdini\'s event handling clause, the first module defines a function that is called on creation (the setUp() function: Figure 03). This function creates, rigs, and assigns shaders to the digital asset.',
            format: ''
        },
        {
            text: '2. The second module defines the function that drives the rotation. The analysis of geometry placement determines translation behavior.',
            format: ''
        },
    ],
    vidSrc: disO01,
    imgSrc: null,
    imgFooter: 'Figure 01: Animated Rubik\'s Scramble Sequence'
}
const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 01 exhibits the result of the rubik\'s python project. Click the caption to jump to NTSC quality render. The sequence was animated in only a few minutes. This scripting workflow with Houdini is what enables such quick and easy animating.',
            format: ''
        },
        {
            text: 'To start, a digital asset node is required. An empty subnet node will suffice. After creating a digital asset from the empty subnet, from the digital asset we have the type properties window. In this window Houdini provides access to parameter and script editing options for the digital asset.',
            format: ''
        },
        {
            text: 'It\'s in this window, the scripting tab in particular, where the majority of the work and functionality of the rubik\'s python project is orchestrated.',
            format: ''
        },
        {
            text: 'From here we can create all the components of the asset with Python.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO02,
    imgFooter: 'Figure 02: HDA Custom Parameter Tab Snapshot'
}
const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The scripting tab provides event clauses. The onCreated event creates a python module that will run whenever the HDA is dropped to a scene. This event clause is the ideal condition to run a setUp module. This module will create the contents of the digital asset.',
            format: ''
        },
        {
            text: 'Figure 03 shows the final setUp script. This script is a single function that is called. Click the link or thumbnail for a full view of the script.',
            format: ''
        },
        {
            text: 'With the instance assigned to a variable. Python script can create geometry, shaders, UI tables, assign parameters, and essentially anything else that can be done manually.',
            format: ''
        },
        {
            text: 'The benefit of this asset is the ease and freedom in which it can be animated. Figure 01 was keyframed and animated in only a few minutes, this is due to the setup of the HDA custom parameters (as seen in Figure 02), and the ability to animate translation values at the HDA level without breaking rotation() functionality.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO03,
    imgFooter: 'Figure 03: HDA Python setUp Function in onCreated Module Thumbnail'
}
const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Comments provided inside the script will assist in explaining the order and functionality of the module.',
            format: ''
        },
        {
            text: 'One note to consider is the three nested for loops that create the twenty-seven boxes that consist of the rubik\'s cube. Three nested loops are used instead of a single for loop.',
            format: ''
        },
        {
            text: 'A rubik\'s cube consist of three 3x3 grids stacked atop eachother. The three nested for loops allow for box creation mimicking this fashion. This allows for the iteration variable (i, j, or k) to be used not only for iteration, but also parameter for box translation values.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO04,
    imgFooter: 'Figure 04: HDA onCreated Script Result'
}
const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The second module contains the functions required to perform the rigged translation and rotation operations, and assign keyframe methods to a parameter button at the HDA level.',
            format: ''
        },
        {
            text: 'A series of different functions are called to a master rotation() function. It is this function that is called on call-back scripts in the HDA parameters tab in Houdini.',
            format: ''
        },
        {
            text: 'The rotation() function reads three parameters:',
            format: ''
        },
        {
            text: 'The HDA instance (so paths are relative), the axis of rotation (after all, a rubik\'s cube can only be rotated on one axis at a time), and the degree of rotation (rotate clockwise or counter clockwise, 90 degrees or any other integer degree).',
            format: ''
        },
        {
            text: 'Click thumbnail or here for full script',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: disO05,
    imgFooter: 'Figure 05: HDA Python Module Rotation Function Thumbnail'
}
const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'The scripts can be improved. In the onCreated() function a new material is made for each geometry node. An improvement would be to loop instead only six materials and assign them to the geometry. Other improvements would be switch node implementation, so that the primitive boxes can be replaced with modeled, higher poly-count polygons.',
            format: 'secondary'
        },
    ],
    vidSrc: null,
    imgSrc: disO06,
    imgFooter: 'Figure 06: Scene Lit for Rotation Animated Sequence'
}
export const data: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
];