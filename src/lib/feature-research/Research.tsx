import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";
import {researchNav} from "./definitions.ts"
import {Default} from "./components/Default.tsx";
import {ResearchPointClouds} from "./components/_PointClouds/ResearchPointClouds.tsx";
import {ResearchVolumetrics1} from "./components/_Volumetrics01/ResearchVolumetrics1.tsx";
import {ResearchVolumetrics2} from "./components/_Volumetrics02/ResearchVolumetrics2.tsx";
import {ResearchAov} from "./components/_AOVs/ResearchAov.tsx";
import {ResearchSubsurface01} from "./components/_Subsurface/ResearchSubsurface01.tsx";
import {ResearchMagicLights} from "./components/_MagicLights/ResearchMagicLights.tsx";
import {ResearchFluidPrimitives} from "./components/_FluidPrimitive/ResearchFluidPrimitives.tsx";
import {ResearchPython1} from "./components/_Python01/ResearchPython1.tsx";
import {ResearchMagnetForce} from "./components/_MagnetForce/ResearchMagnetForce.tsx";
import {ResearchZBrushExport} from "./components/_ZBrushExport01/ResearchZBrushExport.tsx";
import {ResearchMapCapTex} from "./components/_MatCapTex/ResearchMatCapTex.tsx";
import {ResearchUSGSDems} from "./components/_USGSDEMs/ResearchUSGSDems.tsx";
export function Research({ view }: { view: string }) {
    return (
        <>
            <div className="w-100 collapse navbar-collapse container-fluid bg-scheme" id="navbarToggleExternalContent">
                HELLO WORLD
            </div>
            <div className="d-flex h-100">
                <div className={'d-none d-md-flex'}>
                    <LeftNavigation sections={researchNav}></LeftNavigation>
                </div>
                <div className="w-100 h-100 p-lg-3 p-xxl-5 overflow-auto">
                    <div className="container">
                        {(() => {
                            switch (view) {
                                case 'aov':
                                    return ResearchAov();
                                case 'pointclouds':
                                    return ResearchPointClouds();
                                case 'volumetrics1':
                                    return ResearchVolumetrics1();
                                case 'volumetrics2':
                                    return ResearchVolumetrics2();
                                case 'subsurface':
                                    return ResearchSubsurface01();
                                case 'magiclights':
                                    return ResearchMagicLights();
                                case 'fluidprimitives':
                                    return ResearchFluidPrimitives();
                                case 'python1':
                                    return ResearchPython1();
                                case 'magnetforce':
                                    return ResearchMagnetForce();
                                case 'zbrushexport':
                                    return ResearchZBrushExport();
                                case 'matcaptext':
                                    return ResearchMapCapTex();
                                case 'usgs':
                                    return ResearchUSGSDems();
                                default:
                                    return Default();
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    )
}