import {data2} from './definitions.ts';
import {InformationCard} from "../shared/components/InformationCard.tsx";
export function Reel() {
    return (
        <>
            <div className="d-flex h-100">
                <div className={'w-100 h-100 p-lg-3 p-xxl-5 overflow-auto'}>
                    <div className="container">
                        <div className="text-center my-2 mt-xxl-5">
                            <span className="fs-5 fw-light">Demo Reel Updated 02.2014</span>
                        </div>
                        <p className="fs-5 fw-light mb-0">Reel Playback Options</p>
                        <span className="small text-secondary fw-light">Right click and Save 'Direct Download' links to download video file to your hard drive.</span>
                        <div className="d-flex justify-content-center mb-0">
                            <li className="btn btn-link col">Direct Download 1280x720</li>
                            <li className="btn btn-link col">Direct Download 640x360</li>
                        </div>
                        <p className="mb-0">
                            A Quicktime compliant browser will be necessary for .mp4 format video sequences.
                        </p>
                        <p className="fw-light text-secondary small mb-0">
                            Embedded Vimeo Player
                        </p>
                        <div className={'rounded overflow-hidden'}>
                            <div className={'shadow-sm'} style="padding:56.25% 0 0 0;position:relative;">
                                <iframe
                                    src="https://player.vimeo.com/video/55741990?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                    style="position:absolute;top:0;left:0;width:100%;height:100%;" title="VFX Demo Reel">
                                </iframe>
                            </div>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                        </div>
                        <div class="mt-4"></div>
                        <InformationCard {...data2}></InformationCard>
                    </div>
                </div>

            </div>

        </>
    )
}