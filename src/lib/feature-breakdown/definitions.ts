import {
    DetailCardProperties,
    NavigationProperties,
} from "../shared/interfaces/interfaces.ts";
import d1 from "../../assets/_display_breakdown/terra_img001.jpg";
import d2 from "../../assets/_display_breakdown/hachi_img001.png";
import d3 from "../../assets/_display_breakdown/rubik.jpg";
import d4 from "../../assets/_display_breakdown/tornado_img001.jpg";
import d5 from "../../assets/_display_breakdown/vortex_img001.jpg";

export const breakdownNav: NavigationProperties[] = [
    {
        top: {
            title: 'Reel Content',
            path: '/breakdown',
        },
        items: [
            {
                title: 'Terracotta',
                path: '/breakdown/terracotta',
            },
            {
                title: 'Hachiman',
                path: '/breakdown/hachiman',
            },
            {
                title: 'Rubik\'s',
                path: '/breakdown/rubiks',
            },
            {
                title: 'Tornado',
                path: '/breakdown/tornado',
            },
            {
                title: 'Point Stars',
                path: '/breakdown/pointstars',
            },
        ]
    },
];

export const TerracottaCard: DetailCardProperties = {
    title: 'Terracotta',
    paragraphs: [
        {
            text: 'Independent study developing shader components and a pipeline emphasis for render-optimized high resolution imagery with Renderman Studios.',
            format: ''
        },
        {
            text: 'Z Brush assets consisting of 9 million polygons each are extracted to Renderman for Maya as SubD proxies with 32 bit Displacement maps.',
            format: ''
        },
        {
            text: 'Shaders written in SLIM extract AOVs for post-rendering modification, layer displacement maps with procedural patterns, and direct inferred passes to bake and reuse raytraced, subsurface, and deep shadow information.',
            format: ''
        },
        {
            text: '720p frame render time: Approx 80 seconds. Imagery inspired by the terracotta statues in Xi\'an China.',
            format: ''
        },
    ],
    footer: 'Tools Used: Pixologic Z Brush | Autodesk Maya | Pixar Renderman Studios | RSL | Apple Shake',
    footerClass: 'justify-content-start',
    imgUri: d1,
    linkUri: 'breakdown/terracotta',
    type: 'detail'
}

export const HachimanCard: DetailCardProperties = {
    title: 'Hachiman',
    paragraphs: [
        {
            text: 'RMS study implementing additional elements of ZBrush asset integration, texture utilization, lighting, and compositing.',
            format: ''
        },
        {
            text: 'ZBrush GoZ workflow to preserve UV information across software allows additional texturing methods.',
            format: ''
        },
        {
            text: 'In addition to photoshop image sources, workflows with ZBrush extract 3D painted textures, projections, and baked material and lighting assets that conform to Maya render layer and light linking processes.',
            format: ''
        },
        {
            text: 'Imagery inspired by Koshun\'s Shinto deity Hachiman - depicted as a buddhist monk.',
            format: ''
        },
    ],
    footer: 'Tools Used: Pixologic Z Brush | Autodesk Maya | Pixar Renderman Studios | Adobe Photoshop | Apple Shake',
    footerClass: 'justify-content-start',
    imgUri: d2,
    linkUri: 'breakdown/hachiman',
    type: 'detail'
}

export const RubiksCard: DetailCardProperties = {
    title: 'Python Rubik\'s Cube',
    paragraphs: [
        {
            text: 'This HDA utilizes the Type Operator\'s Event Handling system to create a fully-functional Rubik\'s Cube - built and manipulated entirely with Python.',
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
    footer: 'Tools Used: SideFX Houdini | Python | Rendered with Houdini\'s PBR Renderer',
    footerClass: 'justify-content-start',
    imgUri: d3,
    linkUri: 'breakdown/rubiks',
    type: 'detail'
}

export const TornadoCard: DetailCardProperties = {
    title: 'Tornado Funnel FX',
    paragraphs: [
        {
            text: 'FX animation study of a tornado. The effect is rendered atop a camera projection that is concept for scale and orientation.',
            format: ''
        },
        {
            text: 'The combination of a SOP, POP, SHOP, and COP networks all sharing the same velocity parameter create this tornado funnel effect.',
            format: ''
        },
        {
            text: 'The effect originates from a polywire, a grid, and a popnet. Point normals from SOP are brought in as velocity using VOP.',
            format: ''
        },
        {
            text: 'A Popnet scatters points along the center of the funnel using the same velocity to create a debris field. SHOP is used to adjust opacity during particle life.',
            format: ''
        },
    ],
    footer: 'Tools Used: SideFX Houdini | HScript | Rendered with Mantra | Adobe Photoshop',
    footerClass: 'justify-content-start',
    imgUri: d4,
    linkUri: 'breakdown/tornado',
    type: 'detail'
}

export const PointStarCluster: DetailCardProperties = {
    title: 'Particle Point Cluster',
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
    footer: 'Tools Used: SideFX Houdini | HScript | Rendered with Mantra',
    footerClass: 'justify-content-start',
    imgUri: d5,
    linkUri: 'breakdown/pointstars',
    type: 'detail'
}

export const data: DetailCardProperties[] = [
    TerracottaCard,
    HachimanCard,
    RubiksCard,
    TornadoCard,
    PointStarCluster
];