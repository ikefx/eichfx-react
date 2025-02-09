export function Reel() {
    return (
        <>
            <div className="container h-100 overflow-auto p-2 p-xl-5">
                <h2 className="text-center lead text-secondary">Demo Reel Updated 02.2014</h2>
                <p className="fs-5 mb-0">Reel Playback Options</p>
                <span className="small text-secondary fw-light">Right click and Save 'Direct Download' links to download video file to your hard drive.</span>
                <ul className="mb-0">
                    <li className="btn btn-link">Direct Download 1280x720</li>
                    <li className="btn btn-link">Direct Download 640x360</li>
                </ul>
                <p className="mb-0">
                    A Quicktime compliant browser will be necessary for .mov format video sequences.
                </p>
                <p className="text-secondary small mb-0">
                    Embedded Vimeo Player
                </p>
                <div className={'shadow-sm'} style="padding:56.25% 0 0 0;position:relative;">
                    <iframe
                        src="https://player.vimeo.com/video/55741990?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="VFX Demo Reel">
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </>
    )
}