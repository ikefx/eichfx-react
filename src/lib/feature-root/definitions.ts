import {NavigationProperties} from "../shared/interfaces/interfaces.ts";
export const data: NavigationProperties = {
    top: {
        title: '3D Studies Site',
        path: '/',
    },
    items: [
        {
            title: 'Demo Reel',
            path: '/reel',
        },
        {
            title: 'Breakdown',
            path: '/breakdown',
            children: [
                {
                    top: {
                        title: '',
                        path: '/breakdown',
                    },
                    items: [
                        {
                            title: 'Terracotta',
                            path: '/breakdown/terracotta'
                        },
                        {
                            title: 'Hachiman',
                            path: '/breakdown/hachiman'
                        },
                        {
                            title: 'Python Rubik\'s Cube',
                            path: '/breakdown/rubiks'
                        },
                        {
                            title: 'Tornado FX',
                            path: '/breakdown/tornado'
                        },
                        {
                            title: 'Point Stars',
                            path: '/breakdown/pointstars'
                        },
                    ]
                },
            ]
        },
        {
            title: 'Research',
            path: '/research',
            children: [
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

            ]
        },
    ],
};