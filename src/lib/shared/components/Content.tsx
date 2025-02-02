import {ErrorBoundary, LocationProvider, Router} from "preact-iso";
import {RootContent} from "../../feature-root/components/RootContent.tsx";
import {ReelContent} from "../../feature-reel/ReelContent.tsx";
import {BreakdownContent} from "../../feature-breakdown/BreakdownContent.tsx";
import {ResearchContent} from "../../feature-research/ResearchContent.tsx";

export function Content() {
    return (
        <>
            <div className="col h-100 bg-white">
                <LocationProvider>
                    <ErrorBoundary>
                        <Router>
                            <div className="h-100" path="/">
                                <RootContent></RootContent>
                            </div>
                            <div className="h-100" path="/reel">
                                <ReelContent></ReelContent>
                            </div>
                            <div className="h-100" path="/breakdown">
                                <BreakdownContent></BreakdownContent>
                            </div>
                            <div className="h-100" path="/research">
                                <ResearchContent></ResearchContent>
                            </div>
                        </Router>
                    </ErrorBoundary>
                </LocationProvider>
            </div>
        </>
    )
}