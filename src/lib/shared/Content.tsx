import {ErrorBoundary, LocationProvider, Router} from "preact-iso";
import {RootContent} from "../root/components/RootContent.tsx";
import {ReelContent} from "../reel/ReelContent.tsx";
import {BreakdownContent} from "../breakdown/BreakdownContent.tsx";
import {ResearchContent} from "../research/ResearchContent.tsx";

export function Content() {
    return (
        <>
            <div className="col h-100 bg-white">
                <LocationProvider>
                    <ErrorBoundary>
                        <Router>
                            <div path="/">
                                <RootContent></RootContent>
                            </div>
                            <div path="/reel">
                                <ReelContent></ReelContent>
                            </div>
                            <div path="/breakdown">
                                <BreakdownContent></BreakdownContent>
                            </div>
                            <div path="/research">
                                <ResearchContent></ResearchContent>
                            </div>
                        </Router>
                    </ErrorBoundary>
                </LocationProvider>
            </div>
        </>
    )
}