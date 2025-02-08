import {MarqueeCard} from "../../shared/components/MarqueeCard.tsx";
import {eonVue, Houdini, Renderman,ZBrush} from "../definitions.ts";

export function Default() {
    return (
        <>
            <div class="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h3 className="text-dark mb-0">RESEARCH DOCUMENTATION</h3>
                    <span className="lead text-secondary">Click links in the navigation bar or project images to browse research studies.</span>
                </div>
                <hr/>
                <div className="mt-2">
                    <h4 className="text-center fw-light mb-3">Renderman User Documentation</h4>
                    <MarqueeCard
                        title={Renderman.title}
                        description={Renderman.description}
                        imgUri={Renderman.imgUri}
                        footer={Renderman.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <h4 className="text-center fw-light mb-3">Houdini Operation and Effects Resource</h4>
                    <MarqueeCard
                        title={Houdini.title}
                        description={Houdini.description}
                        imgUri={Houdini.imgUri}
                        footer={Houdini.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <h4 className="text-center fw-light mb-3">Z Brush Guides, Methods, and Tricks</h4>
                    <MarqueeCard
                        title={ZBrush.title}
                        description={ZBrush.description}
                        imgUri={ZBrush.imgUri}
                        footer={ZBrush.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <h4 className="text-center fw-light mb-3">e-on Vue User Documentation</h4>
                    <MarqueeCard
                        title={eonVue.title}
                        description={eonVue.description}
                        imgUri={eonVue.imgUri}
                        footer={eonVue.footer}>
                    </MarqueeCard>
                </div>
            </div>
        </>
    )
}