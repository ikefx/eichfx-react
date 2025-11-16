import {InformationCard} from "../shared/components/InformationCard.tsx";
import {data} from "../feature-reel/definitions.ts";

export function Root() {
    return (
        <>
            <div className="container-sm h-100 overflow-auto p-2 p-xl-5">
                <h3 className={'text-dark'}>Welcome</h3>
                <p>
                    This site is written in preact with bootstrap5 UI for demonstration of mobile-first design.
                    The content of the site is research and projects related to 3D development.
                </p>
                <p>
                    Navigate the site to browse 3D technology research and projects. The Demo Video link provides
                    additional resolutions and methods for reel playback. The Breakdown page provides
                    explanation of tools and workflows utilized in reel contents. Research provides in-depth
                    documentation and analysis on a variety of technical FX endeavors.
                </p>
                <p>
                    A Quicktime compliant browser will be necessary for .mp4 format video sequences.
                </p>
                <h3 className="text-dark mt-5">Mobile First Single Page Application</h3>
                <InformationCard {...data}></InformationCard>
                <div className="text-center pt-xxl-5">
                    <h3 className="text-dark py-2">3D Animation Demo Video (1:41 minute)</h3>
                </div>
                <div className={'rounded overflow-hidden mt-4'}>
                    <div style="padding:56.25% 0 0 0;position:relative;">
                        <iframe
                            src="https://player.vimeo.com/video/55741990?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            style="position:absolute;top:0;left:0;width:100%;height:100%;" title="VFX Demo Reel"></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
        </>
    )
}