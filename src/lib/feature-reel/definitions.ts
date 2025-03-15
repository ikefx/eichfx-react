import {DetailCardProperties} from "../shared/interfaces/interfaces.ts";
import dis01 from "../../assets/_display_demo/display_demo01.jpg";
import {InformationCardProperties} from "../shared/components/InformationCard.tsx";
const slot01: DetailCardProperties = {
    title: 'Mobile First UI & Site Objective',
    paragraphs: [],
    vidUri: null,
    imgUri: null,
    footer: null,
    type: 'detail'
}
export const data = slot01;

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Mobile-first design is an approach to web development and user interface design where the design process starts with designing for smaller screens (mobile devices) before progressively enhancing the design for larger screens (like tablets and desktops).  This approach ensures that the user experience is optimized for mobile devices, which are often more restrictive in terms of screen size, processing power, and network connectivity.',
            format: ''
        },
        {
            text: 'This site showcases a mobile first layout that presents research and experimentation done in 3D graphics using tools such as Pixar\'s Renderman, SideFX Houdini, and Autodesk Maya.  This information is made open to public consumption for all curious on the technologies driving these experiments.',
            format: ''
        },
        {
            text: 'Given this requirement, the objective of the site design is to present content for consumption, not distract from it.  The benefit of mobile first grants a user-experience where site navigation is intuitive and content remains front-and-center.',
            format: ''
        }
    ],
    vidSrc: null,
    imgSrc: dis01,
    imgFooter: 'Layout',
}
export const data2 = slot02;