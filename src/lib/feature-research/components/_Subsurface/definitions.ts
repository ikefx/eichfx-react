import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import display01 from "../../../../assets/_display_research/_rman/_subsurface01/display_hoover_comp.jpg"
import display02 from "../../../../assets/_display_research/_rman/_subsurface01/display_bake_radiance_sl.jpg"
import display03 from "../../../../assets/_display_research/_rman/_subsurface01/display_hoover_ptc_occ_bkm_ssdif.jpg"
import display04 from "../../../../assets/_display_research/_rman/_subsurface01/hoover_ptc_ssss.mp4"
import display05 from "../../../../assets/_display_research/_rman/_subsurface01/hoover_ptc_occ_sss_comp.mp4"
import display07 from "../../../../assets/_display_research/_rman/_subsurface01/display_pt_cloud_radiance.jpg"
import display08 from "../../../../assets/_display_research/_rman/_subsurface01/hoover_sss_ptc01.mp4"
const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'A phenomena occurs when light strikes a surface.',
            format: ''
        },
        {
            text: 'Depending on the material, light can bounce back - creating specular and color bleed.',
            format: ''
        },
        {
            text: 'Light is also absorbed by the material and scattered throughout.',
            format: ''
        },
        {
            text: 'Subsurface Scattering is the procedure for creating this effect. This write-up explores the methods for which RfM generates data to calculate subsurface effects.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: display02,
    imgFooter: 'Figure 01: Bake Radiance Surface Shader'
}
const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Renderman\'s SubSurface procedure can be executed with knowledge of RSL, RiSpec, and an understanding of point clouds and brickmaps.',
            format: ''
        },
        {
            text: 'In previous write-ups point cloud generating bake passes were used to store occlusion data.',
            format: ''
        },
        {
            text: 'A similar process is used with Subsurface Diffusion.',
            format: ''
        },
        {
            text: 'The objective is to create a SSDiffuse channel for the scene.',
            format: ''
        },
        {
            text: 'A point cloud containing radiance information is passed to the brickmake.exe to generate a radiance brickmap.',
            format: ''
        },
        {
            text: 'In the point occlusion write-up a shader was used to read baked occlusion data.',
            format: ''
        },
        {
            text: 'In this case, a shader that reads radiance data from a baked brickmap is needed.',
            format: ''
        },
        {
            text: 'Subsurface effects are dependent on lighting, therefore, the scene must have a lightsource.',
            format: ''
        },
        {
            text: 'Figure 01 is a surface shader for the preliminary bake pass. This shader instructs Rman to generate a point cloud with a radiance channel.',
            format: ''
        },
        {
            text: 'The resulting point cloud can be seen in Figure 02.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: display07,
    imgFooter: 'Figure 02: Point Cloud with Radiance Channel'
}
const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Unlike occlusion - which is float data, ssdiffuse is color data. For color data, point clouds are not a practical format to use.',
            format: ''
        },
        {
            text: 'This is where brickmaps come into use.',
            format: ''
        },
        {
            text: 'Brickmaps convert the point data of point clouds into six-sided cubes. Each face holds color data.',
            format: ''
        },
        {
            text: 'The brickmake executable will convert a point cloud to a brickmap. From the command line: brickmake input.ptc output.bkm',
            format: ''
        },
    ],
    vidSrc: display08,
    imgSrc: null,
    imgFooter: 'Figure 03: Subsurface Diffuse Sequence 01'
}
const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The radiance brickmap is plugged into a 3Dtexture function in the beauty pass\'s surface shader. The result is figure 03 - a ssdiffuse display channel.',
            format: ''
        },
        {
            text: 'From this output it is clear the bake pass\'s ssdiffusion shader needs to be modified.',
            format: ''
        },
        {
            text: 'SSDiffuse parameters Unit Length and Albedo can alter the behavior of the light entering the object.',
            format: ''
        },
        {
            text: 'Another approach to modifying scattering behavior is with the PTfilter executable.',
            format: ''
        },
    ],
    vidSrc: display04,
    imgSrc: null,
    imgFooter: 'Figure 04: Subsurface Diffuse Sequence 02'
}
const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The PTfilter executable takes the radiance point cloud input and outputs a point cloud with new radiance information.',
            format: ''
        },
        {
            text: 'This is done with PTfilter\'s preset material tags. Add a material tag and write in one of their presets.',
            format: ''
        },
        {
            text: 'Figure 04 is the sequence with ssdiffuse channel.',
            format: ''
        },
        {
            text: 'With a subsurface brickmap and the occlusion point cloud generated from the previous write-up we can combine the two respective surface shaders.',
            format: ''
        },
        {
            text: 'Figure 05 is a surface shader that reads both point occlusion and ssdiffusion.',
            format: ''
        },
        {
            text: 'Combined with Display Channels to output AOVs, we have a very robust and practical surface shader.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: display01,
    imgFooter: 'Figure 05: Point Occlusion and Brickmap SSDiffuse Surface Shader'
}
const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Figure 06 is the resulting sequence of a shader that multiplies occlusion and subsurface diffusion to Cs in shader.',
            format: ''
        },
        {
            text: 'Using the occlusion and subsurface diffuse AOVs in post-render compositing resulted in Figure 07.',
            format: ''
        },
    ],
    vidSrc: display05,
    imgSrc: null,
    imgFooter: 'Figure 06: Occlusion and SSDiffuse Comp 01'
}
const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'When developing ssdiffusion, it\'s best to use the surface shader\'s parameters - not PTfilter. The ssdiffusion parameters provide more avenue for modification.',
            format: 'secondary'
        },
    ],
    vidSrc: null,
    imgSrc: display03,
    imgFooter: 'Figure 07: Occlusion and SSDiffuse Comp 02'
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