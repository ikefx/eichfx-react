import {MarqueeCard} from "../../shared/components/MarqueeCard.tsx";
import {HachimanCard, PointStarCluster, RubiksCard, TerracottaCard, TornadoCard} from "../definitions.ts";

export function Default() {
    return (
        <>
            <div class="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h3 className="mb-0">DEMO BREAKDOWN SHEET</h3>
                    <span className="lead text-secondary">Click links in the navigation bar or project images to browse extended breakdowns per project.</span>
                </div>
                <hr/>
                <div className="mt-5">
                    <MarqueeCard
                        title={TerracottaCard.title}
                        description={TerracottaCard.description}
                        footer={TerracottaCard.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={HachimanCard.title}
                        description={HachimanCard.description}
                        footer={HachimanCard.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={RubiksCard.title}
                        description={RubiksCard.description}
                        footer={RubiksCard.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={TornadoCard.title}
                        description={TornadoCard.description}
                        footer={TornadoCard.footer}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={PointStarCluster.title}
                        description={PointStarCluster.description}
                        footer={PointStarCluster.footer}>
                    </MarqueeCard>
                </div>
            </div>
        </>
    )
}