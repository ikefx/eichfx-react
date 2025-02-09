import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
import displ01 from "../../../../assets/_display_research/_rman/_vol02/display_figure01.jpg";
import displ02 from "../../../../assets/_display_research/_rman/_vol02/display_figure02.jpg";
import displ03 from "../../../../assets/_display_research/_rman/_vol02/display_figure03.jpg";
import displ04 from "../../../../assets/_display_research/_rman/_vol02/display_figure04.jpg";
import displ05 from "../../../../assets/_display_research/_rman/_vol02/display_figure05.jpg";
import displ06 from "../../../../assets/_display_research/_rman/_vol02/display_figure06.jpg";
import displ07 from "../../../../assets/_display_research/_rman/_vol02/display_figure07.jpg";

const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'On an earlier page, the volume shader component was explored and tested. In this write-up, additional steps are taken to create a volume shader that can be implemented into an animation sequence.',
            format: ''
        },
        {
            text: 'For a quick review, volume shaders are not the same as surface shaders. However when added to a mesh\'s shading group, they can alter an objects opacity and color.',
            format: ''
        },
        {
            text: 'For this page, an atmosphere volume shader will be implemented into a Maya scene using RMS.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: displ01,
    imgFooter: 'Figure 01: Atmosphere Volume with Spot Light'
}

const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'In order to create a visible atmosphere, the Maya environment must consist of a lightsource, geometry desired within the atmosphere, and finally a background plate.',
            format: ''
        },
        {
            text: 'Background plates are necessary because when volumes render, calculations are made off surfaces within that render area. If a rendered pixel has no surface information to calculate the volume from, that region will render black.',
            format: ''
        },
        {
            text: 'Primary visibility can be deactivated for backplates if desired. Again, they are only needed to ensure there is surface information present across the entire composition.',
            format: ''
        },
        {
            text: 'Figure 02 is a satisfactory Maya environment.',
            format: ''
        },
    ],
    imgSrc: displ02,
    vidSrc: null,
    imgFooter: 'Figure 02: Maya Environment'
}

const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The smoke.sl volume shader being used includes raymarching. A process where rays \'step\' from the rendering camera to renderable objects. This method incorporates raytracing and can be expensive if poor choice in shader variables are chosen. Activate raytracing from global setting > features tab. On to Rman.',
            format: ''
        },
        {
            text: 'Figure 03 displays a snipet of the smoke.sl. Click the image for the entire example. Compile the code with shader.exe. In Maya\'s hypershade, create a Render Man Volume node from the node list. The resulting shader is empty, click the open folder in attribute editor and attach the smoke.slo - Figure 04.',
            format: ''
        },
    ],
    imgSrc: displ03,
    imgFooter: 'Figure 03: Smoke Volume Atmosphere Shader'
}

const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'To apply a volume shader to a scene, the shader must be plugged into the volume parameter of their respective shading groups.',
            format: ''
        },
        {
            text: 'Alternatively, RiSpec inserted into the Render Globals > Advanced > Ri Injection Points > Pre Shape MEL text box. >>> RiAtmosphere "path/shader" "float parameter1" 1 "color parameter2" 1,1,1 will apply the volume to the entire scene and modify desired parameters. I do not recommend this method for volumes with a large amount of parameters however, because tweaking can become monotonous.',
            format: ''
        },
        {
            text: 'With the volume in place we move to the light source.',
            format: ''
        },
    ],
    imgSrc: displ04,
    vidSrc: null,
    imgFooter: 'Figure 04: Adding Volume Shader to Maya Environment'
}

const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Since the volume will only render in lit areas, a few different aesthetics become available for use.',
            format: ''
        },
        {
            text: 'The first is \'God rays,\' the visualization of beams of light as they project forward. Objects in the path of emitting light will break beams appropriately. For this to happen, the lightsource must emit shadows.',
            format: ''
        },
        {
            text: 'Instead of relying on Rman\'s implicit shadow pass, create an explicit shadow pass for the smoke-emitting volume - Figure 05.',
            format: ''
        },
        {
            text: 'In order to create the light ray\'s trailing shadow effect a high resolution map must be made. By creating an explicit pass for this specific shadow, the other shadow-casting lights can remain at default settings or whichever settings desired.',
            format: ''
        },
        {
            text: 'As a final note on light rays, it\'s important to tune light intensity and smoke density so that the volume\'s color does not washout the casting shadow. Figure 06 displays an atmosphere pass where spheres intercept a light ray.',
            format: ''
        },
    ],
    imgSrc: displ05,
    vidSrc: null,
    imgFooter: 'Figure 05: Explicit Shadow Pass for Atmosphere Light'
}

const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Currently we have a strong shaft of light. Another aesthetic made possible with smoke.sl is an illusion of smoke illuminated by the light ray. Smoke.sl provides several parameters that allow manipulation of smoke. But before going that far, first navigate to the light color parameter of the light source and insert any float pattern. Renderman provides patterns like cell noise and worley. However, Maya has a a very conventiently named pattern called Volume Noise.',
            format: ''
        },
        {
            text: 'Volume Noise and adjustments to smoke.sl parameters resulted in Figure 07.',
            format: ''
        },
        {
            text: 'Finally, navigate to the Final/Beauty Render pass in Render globals, and under Extra Output Settings add Volume Interpretation.',
            format: ''
        }
    ],
    imgSrc: displ06,
    vidSrc: null,
    imgFooter: 'Figure 06: Light Rays with Shadow'
}

const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Note:',
            format: 'secondary'
        },
        {
            text: 'Volume shaders are expensive in render time. For this reason and the ease of tweaking in 2d, atmosphere effects should be a separate pass from the beauty and composited.',
            format: 'secondary'
        },
        {
            text: 'Having a zdepth pass as a matte provides even more adjustment in post.',
            format: 'secondary'
        },
    ],
    imgSrc: displ07,
    vidSrc: null,
    imgFooter: 'Figure 07: Smoke.sl with Volume Noise Light Color'
}

export const data: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07,
];