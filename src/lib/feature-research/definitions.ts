import {LeftNavigationProperties, MarqueeCardProperties} from "../shared/interfaces/interfaces.ts";
import imgRMAN from './../../assets/_display_research/rman_display.png';
import imgHOUD from './../../assets/_display_research/hou_display.jpg';
import imgZBRU from './../../assets/_display_research/zbr_display.jpg';
import imgEONV from './../../assets/_display_research/vue_display.png';

export const researchNav: LeftNavigationProperties[] = [
    {
        top: {
            title: 'Renderman',
            path: '/research',
        },
        items: [
            {
                title: 'AOVs',
                path: '/research/aov',
            },
            {
                title: 'Point Clouds',
                path: '/research/pointclouds',
            },
            {
                title: 'Volumetrics I',
                path: '/research/volumetrics1',
            },
            {
                title: 'Volumetrics II',
                path: '/research/volumetrics2',
            },
            {
                title: 'Subsurface',
                path: '/research/subsurface',
            },
            {
                title: 'Magic Lights',
                path: '/research/magiclights',
            },
        ]
    },
    {
        top: {
            title: 'Houdini',
            path: '/research',
        },
        items: [
            {
                title: 'Fluid Primitives',
                path: '/research/fluidprimitives',
            },
            {
                title: 'Python I',
                path: '/research/python1',
            },
            {
                title: 'Magnet Force',
                path: '/research/magnetforce',
            },
        ]
    },
    {
        top: {
            title: 'ZBrush',
            path: '/research',
        },
        items: [
            {
                title: 'ZBrush Export',
                path: '/research/zbrushexport',
            },
            {
                title: 'MatCap Tex',
                path: '/research/matcaptext',
            },
        ]
    },
    {
        top: {
            title: 'e-on Vue',
            path: '/research',
        },
        items: [
            {
                title: 'USGS DEMS',
                path: '/research/usgs'
            }
        ]
    }
];

export const Renderman: MarqueeCardProperties = {
    title: 'Renderman User Documentation',
    description: [
        {
            text: 'Listed directories illustrate functionality and back-end processing of the Prman Renderer that required additional documentation not covered in project breakdowns.',
            format: ''
        },
        {
            text: 'Documentation written from research, development, and trial and error of the Renderman projects I\'ve completed (and sometimes not completed). Consider the following R&D and Proof of Concept for my Renderman related work.',
            format: ''
        },
        {
            text: 'Syntax written in Malcom Kesson\'s Cutter© - all rights reserved. www.fundza.com',
            format: 'secondary'
        },
        {
            text: 'Renderman© is a product of Pixar Animation - all rights reserved. www.pixar.com',
            format: 'secondary'
        }
    ],
    imgUri: imgRMAN,
    footer: null,
    type: 'marquee'
}

export const Houdini: MarqueeCardProperties = {
    title: 'Houdini Operation and Effects Resource',
    description: [
        {
            text: 'SideFX Software\'s Houdini provides a robust library of tools and resources for visual effects. These documents review various methods that exhibit procedural and script operations.',
            format: ''
        },
        {
            text: 'These listings cover analysis of project-driven UI, rendering, and exploration of Houdini\'s scripting possibilities. Houdini includes a powerful python language integration, as well as it\'s own Hscript and VEX languages.',
            format: ''
        },
        {
            text: 'The following will explore workflows utilizing these elements. Consider the following R&D and proof of concept for FX animation work.',
            format: ''
        },
        {
            text: 'Houdini© is a product of SideFX Software - all rights reserved. www.sidefx.com',
            format: 'secondary'
        }
    ],
    imgUri: imgHOUD,
    footer: null,
    type: 'marquee'
}

export const ZBrush: MarqueeCardProperties = {
    title: 'Z Brush Guides, Methods, and Tricks',
    description: [
        {
            text: 'Reoccurring use of Pixologic Z Brush for creating project assets resulted with insight of numerous methods to creating sculpts for 3d environments.',
            format: ''
        },
        {
            text: 'The following documentation reviews various methods implemented in project work.',
            format: ''
        },
        {
            text: 'These methods range from essential workflow operations such as UV map utilization and asset outputting to miscellaneous tricks that can satisfy and improve project goals.',
            format: ''
        },
        {
            text: 'Z Brush© is the property of Pixologic Inc. - all rights reserved. www.pixologic.com',
            format: 'secondary'
        }
    ],
    imgUri: imgZBRU,
    footer: null,
    type: 'marquee'
}

export const eonVue: MarqueeCardProperties = {
    title: 'e-on Vue User Documentation',
    description: [
        {
            text: 'Experience with e-on Software\'s Vue application resulted in strategies beneficial to matte painting and set-extension workflows.',
            format: ''
        },
        {
            text: 'The following documents pipelines and methods that resulted in technical and aesthetically pleasing 3D environments.',
            format: ''
        },
        {
            text: 'Vue xStream© is the property of e-on Software - all rights reserved. www.e-onsoftware.com/',
            format: 'secondary'
        },
    ],
    imgUri: imgEONV,
    footer: null,
    type: 'marquee'
}

export const data: MarqueeCardProperties[] = [
    Renderman,
    Houdini,
    ZBrush,
    eonVue
];