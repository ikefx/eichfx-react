import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";
import {researchNav} from "./definitions.ts"
import {Default} from "./components/Default.tsx";
import {ResearchPointClouds} from "./components/ResearchPointClouds.tsx";
import {ResearchVolumetrics1} from "./components/ResearchVolumetrics1.tsx";
import {ResearchVolumetrics2} from "./components/ResearchVolumetrics2.tsx";
import {ResearchAov} from "./components/ResearchAov.tsx";
import {ResearchSubsurface1} from "./components/ResearchSubsurface1.tsx";
import {ResearchMagicLights} from "./components/ResearchMagicLights.tsx";
import {ResearchFluidPrimitives} from "./components/ResearchFluidPrimitives.tsx";
import {ResearchPython1} from "./components/ResearchPython1.tsx";
import {ResearchMagnetForce} from "./components/ResearchMagnetForce.tsx";
export function Research({ view }: { view: string }) {

    return (
        <>
            <div className="d-flex h-100 bg-light">
                <LeftNavigation sections={researchNav}></LeftNavigation>
                <div className="container h-100 p-4 overflow-auto">
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
                                return ResearchSubsurface1();
                            case 'magiclights':
                                return ResearchMagicLights();
                            case 'fluidprimitives':
                                return ResearchFluidPrimitives();
                            case 'python1':
                                return ResearchPython1();
                            case 'magnetforce':
                                return ResearchMagnetForce();
                            case 'zbrushexport':
                            case 'matcaptext':
                            default:
                                return Default();
                        }
                    })()}
                </div>
            </div>
        </>
    )
}