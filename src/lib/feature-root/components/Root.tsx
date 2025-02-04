export function Root() {
    return (
        <>
            <div class="container h-100 overflow-auto p-2 p-xl-5">
                <h3>Welcome</h3>
                <p>
                    Use the navigation bar buttons on left to browse contents. The Demo Reel link provides
                    additional resolutions and methods for reel playback. The Breakdown page provides
                    explanation of tools and workflows utilized in reel contents. Research provides in-depth
                    documentation and analysis on a variety of technical FX endeavors.
                </p>
                <p>
                    A Quicktime compliant browser will be necessary for .mov format video sequences.
                </p>
                <p className="text-secondary small mb-0">
                    [ Demo Reel Updated February 2014 ]
                </p>
                <div style="padding:56.25% 0 0 0;position:relative;">
                    <iframe
                        src="https://player.vimeo.com/video/55741990?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="VFX Demo Reel"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </>
    )
}