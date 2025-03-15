import {InformationCardProperties} from "../shared/components/InformationCard.tsx";
import dis01 from "../../assets/_display_demo/display_demo01.jpg";
const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Mobile-first design is an approach to web development and user interface design where the design process starts with designing for smaller screens (mobile devices) before progressively enhancing the design for larger screens (like tablets and desktops).  This approach ensures that the user experience is optimized for mobile devices, which are often more restrictive in terms of screen size, processing power, and network connectivity.',
            format: ''
        },
        {
            text: 'This site showcases a mobile first layout that presents research and experimentation done in 3D graphics using tools such as Pixar\'s Renderman, SideFX Houdini, and Autodesk Maya.  This information is open to public consumption.',
            format: ''
        },
        {
            text: 'The objective of the site design is to present content, not distract from it.  The technologies and design made for development are to meet this requirement.',
            format: ''
        },
        {
            text: 'This site is built with p-react (SPA Library), bootstrap5 (UI toolkit), and deployed as a Microsoft Azure Static Web App.',
            format: ''
        }
    ],
    vidSrc: null,
    imgSrc: dis01,
    imgFooter: 'Screen-size driven navbar placement',
}
export const data = slot01;