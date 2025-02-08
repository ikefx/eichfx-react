import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import occl01 from "../../../../assets/_display_research/_rman/_pointclouds/01_occl.mp4"
import disO01 from "../../../../assets/_display_research/_rman/_pointclouds/simple_occ_display.jpg";
import dis002 from "../../../../assets/_display_research/_rman/_pointclouds/gatty_maya_display.jpg";
import dis003 from "../../../../assets/_display_research/_rman/_pointclouds/pt_cloud_sl_display.jpg";
import dis004 from "../../../../assets/_display_research/_rman/_pointclouds/pt_cloud_display.jpg";
import dis005 from "../../../../assets/_display_research/_rman/_pointclouds/point_occ_display.jpg";
import dis006 from "../../../../assets/_display_research/_rman/_pointclouds/display_ptcloud_culling.jpg";
import dis007 from "../../../../assets/_display_research/_rman/_pointclouds/02_ptocc.mp4";
import dis008 from "../../../../assets/_display_research/_rman/_pointclouds/hoover_pt_cloud_occ_animate03.mp4";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'In our AOV write-up we relied on raytracing to generate an occlusion pass.',
            format: ''
        },
        {
            text: 'For a short web video, raytracing may not seem too costly, but in an industry standard animation raytracing can induce severe CPU stress and multiply render times exponentially.',
            format: ''
        },
        {
            text: 'Renderman excels with taking raytraced data and storing it for reuse. Eliminating the need of raytracing after preliminary bake passes.',
            format: ''
        },
    ],
    imgSrc: '',
    vidSrc: occl01,
    imgFooter: 'Figure 01: Raytraced Occlusion Sequence'
}

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 01 shows the results of raytraced occlusion surface shader.',
            format: ''
        },
        {
            text: 'Figure 02 illustrates a standard Rman raytraced occlusion surface shader.',
            format: ''
        },
        {
            text: 'I replaced the cube turntable with geometry that provides complexity that can adequately display occlusion\'s aesthetic - Figure 03.',
            format: ''
        },
    ],
    vidSrc: '',
    imgSrc: disO01,
    imgFooter: 'Figure 02: Raytraced Occlusion Surface Shader'
}

const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The objective is to expedite our render by omitting the raytracing process.',
            format: ''
        },
        {
            text: 'Using point clouds and their brickmap equivelents will see this possible with no loss in quality.',
            format: ''
        },
        {
            text: 'The following documents this process at the RSL and RiSpec fundamentals.',
            format: ''
        },
    ],
    imgSrc: dis002,
    imgFooter: 'Figure 03: Maya Generated Geometry'
}

const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The first step to the trace-free process is setting up a bake pass',
            format: ''
        },
        {
            text: 'The bake pass is the .rib render setup involving raytracing to generate a pointcloud with occlusion data.',
            format: ''
        },
        {
            text: 'Figure 04 shows our bake pass occlusion shader.',
            format: ''
        },
        {
            text: 'This shader instructs Rman to write the occlusion data to a point cloud.',
            format: ''
        },
        {
            text: 'For this pass raytracing must be activated. Fortunately, only one frame needs be rendered.',
            format: ''
        },
        {
            text: 'The render globals dice rasterorient and culling should be deactivated for this pass.',
            format: ''
        },
    ],
    imgSrc: dis003,
    imgFooter: 'Figure 04: PTC Generating Bake Pass Occlusion Shader'
}

const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The resulting image is of no consequence.',
            format: ''
        },
        {
            text: 'However, browse to the [renderman > data] project folder and find a point cloud (.ptc) and brickmap (.bkm) file.',
            format: ''
        },
        {
            text: 'These files are what we desire.',
            format: ''
        },
        {
            text: 'They can be viewed in their respected executables (ptviewer and brickviewer) - Figure 05.',
            format: ''
        },
        {
            text: 'With the existing point cloud and brickmap data, the bake pass is finished.',
            format: ''
        },
    ],
    imgSrc: dis004,
    imgFooter: 'Figure 05: Bake Pass\'s Generated Brickmap'
}

const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'A new surface shader is needed for the geometry for the beauty pass.',
            format: ''
        },
        {
            text: 'The bake pass occlusion shader (Figure 04) called on Rman to generate a point cloud, however now we want a surface shader that reads that point cloud - Figure 06.',
            format: ''
        },
        {
            text: 'The shader reads the point cloud with a string parameter - similiar to that of a texture.',
            format: ''
        },
        {
            text: 'The point cloud can be declared in the shader, or be written out as an external string parameter (as it is in this shader. IE [string pointcloud = "";] ).',
            format: ''
        },
    ],
    imgSrc: dis005,
    imgFooter: 'Figure 06: Occlusion Shader Reads Point Cloud'
}

const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'With our point cloud shader in place for a beauty pass, we can now render occlusion without raytracing.',
            format: ''
        },
        {
            text: 'Before that is done, there are more settings we will want to change to our .rib to enhance render times.',
            format: ''
        },
        {
            text: 'We want to activate culling and dice rasterorient because they cannot damage raytracing procedures.',
            format: ''
        },
        {
            text: 'Since we are not tracing for the rest of the sequence there\'s no harm - Figure 07.',
            format: ''
        },
        {
            text: 'Figure\'s 08 and 09 are sequences of point cloud occlusion rendered without raytracing.',
            format: ''
        },
        {
            text: 'With tracing activated the sequence rendered approximately 1 hour per frame.',
            format: ''
        },
        {
            text: 'With point clouds and brickmaps the sequence renders with only seconds for frame.',
            format: ''
        },
    ],
    imgSrc: dis006,
    imgFooter: 'Figure 07: .rib File - Activating Culling and Deactivating Raytracing'
}

const slot08: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: ''
        },
        {
            text: 'Sequences rendered through Cutter execute with performance on par with rendering from the command line. This also attributes to render time.',
            format: ''
        },
        {
            text: 'It is recommended that users with 3D packages render from the command line, as more CPU is available when not having to launch 3D software.',
            format: ''
        },
    ],
    imgSrc: null,
    vidSrc: dis007,
    imgFooter: 'Figure 08: Traceless Point Cloud Occlusion Render Sequence 01'
}

const slot09: InformationCardProperties = {
    paragraphs: [],
    imgSrc: '',
    vidSrc: dis008,
    imgFooter: 'Figure 09: Traceless Point Cloud Occlusion Render Sequence 02'
}



export const pointClouds: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07,
    slot08,
    slot09
];