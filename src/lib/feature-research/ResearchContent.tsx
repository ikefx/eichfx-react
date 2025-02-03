import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";
import {researchNav} from "./definitions.ts"
import {ResearchRoot} from "./components/ResearchRoot.tsx";
import {ResearchPointClouds} from "./components/ResearchPointClouds.tsx";
import {ResearchVolumetrics1} from "./components/ResearchVolumetrics1.tsx";
import {ResearchVolumetrics2} from "./components/ResearchVolumetrics2.tsx";
import {ResearchAov} from "./components/ResearchAov.tsx";
export function ResearchContent({ view }: { view: string }) {

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
                            case 'magiclights':
                            case 'fluidprimitives':
                            case 'python1':
                            case 'magnetforce':
                            case 'zbrushexport':
                            case 'matcaptext':
                            default:
                                return ResearchRoot();

                        }
                    })()}
                </div>
            </div>
        </>
    )
}