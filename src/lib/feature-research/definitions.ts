import {LeftNavigationProperties, MarqueeCardProperties} from "../shared/interfaces/interfaces.ts";

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
    }
];

export const TerracottaCard: MarqueeCardProperties = {
    title: 'Terracotta',
    description: 'Independent study developing shader components and a pipeline emphasis for render-optimized high resolution imagery with Renderman Studios.\n' +
        '\n' +
        'Z Brush assets consisting of 9 million polygons each are extracted to Renderman for Maya as SubD proxies with 32 bit Displacement maps.\n' +
        '\n' +
        'Shaders written in SLIM extract AOVs for post-rendering modification, layer displacement maps with procedural patterns, and direct inferred passes to bake and reuse raytraced, subsurface, and deep shadow information.\n' +
        '\n' +
        '720p frame render time: Approx 80 seconds. Imagery inspired by the terracotta statues in Xi\'an China.',
    footer: 'Tools Used: Pixologic Z Brush | Autodesk Maya | Pixar Renderman Studios | RSL | Apple Shake'
}

export const HachimanCard: MarqueeCardProperties = {
    title: 'Hachiman',
    description: 'RMS study implementing additional elements of ZBrush asset integration, texture utilization, lighting, and compositing.\n' +
        '\n' +
        'ZBrush GoZ workflow to preserve UV information across software allows additional texturing methods.\n' +
        '\n' +
        'In addition to photoshop image sources, workflows with ZBrush extract 3D painted textures, projections, and baked material and lighting assets that conform to Maya render layer and light linking processes.\n' +
        '\n' +
        'Imagery inspired by Koshun\'s Shinto deity Hachiman - depicted as a buddhist monk.',
    footer: 'Tools Used: Pixologic Z Brush | Autodesk Maya | Pixar Renderman Studios | Adobe Photoshop | Apple Shake'
}

export const RubiksCard: MarqueeCardProperties = {
    title: 'Python Rubik\'s Cube',
    description: 'This HDA utilizes the Type Operator\'s Event Handling system to create a fully-functional Rubik\'s Cube - built and manipulated entirely with Python.\n' +
        '\n' +
        'The On-Created event runs a Python script that generates the SOP and SHOP networks each time the asset is dropped to scene. This guarantees flawless integration with any Houdini project.\n' +
        '\n' +
        'A second module consist of conditional functions that permit geometry rotation without breaking transformations at the global level.\n' +
        '\n' +
        'On-Delete and On-Update events run Python scripts that delete all networks within the HDA (this prevents baking networks to the asset).',
    footer: 'Tools Used: SideFX Houdini | Python | Rendered with Houdini\'s PBR Renderer'
}

export const TornadoCard: MarqueeCardProperties = {
    title: 'Tornado Funnel FX',
    description: 'This HDA utilizes the Type Operator\'s Event Handling system to create a fully-functional Rubik\'s Cube - built and manipulated entirely with Python.\n' +
        '\n' +
        'The On-Created event runs a Python script that generates the SOP and SHOP networks each time the asset is dropped to scene. This guarantees flawless integration with any Houdini project.\n' +
        '\n' +
        'A second module consist of conditional functions that permit geometry rotation without breaking transformations at the global level.\n' +
        '\n' +
        'On-Delete and On-Update events run Python scripts that delete all networks within the HDA (this prevents baking networks to the asset).',
    footer: 'Tools Used: SideFX Houdini | HScript | Rendered with Mantra | Adobe Photoshop'
}

export const PointStarCluster: MarqueeCardProperties = {
    title: 'Particle Point Cluster',
    description: 'A study with the objective to create outer space imagery using only Houdini procedural networks. No photography or textures are used in this particle-based star system render.\n' +
        '\n' +
        'VOP networks illuminate points and contrast PSCALE with noise to add variety and depth. The central star cluster uses tangent operations to create a spiral animation.\n' +
        '\n' +
        'This point system is also used in a volume-from-points network to create a volumetric gas simulation.\n' +
        '\n' +
        'These elements are brought into a Composite Operator Network. Here they are layered, colorized, and manipulated to create the final render.',
    footer: 'Tools Used: SideFX Houdini | HScript | Rendered with Mantra'
}