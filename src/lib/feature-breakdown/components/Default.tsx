import {MarqueeCard} from "../../shared/components/MarqueeCard.tsx";
import {HachimanCard, PointStarCluster, RubiksCard, TerracottaCard, TornadoCard} from "../definitions.ts";

export function Default() {
    return (
        <>
            <div class="d-flex flex-column">
                <div className="text-center mt-5 mb-2">
                    <h3 className="text-dark mb-0">DEMO BREAKDOWN SHEET</h3>
                    <span className="lead text-secondary">Click links in the navigation bar or project images to browse extended breakdowns per project.</span>
                </div>
                <hr/>
                <div className="mt-5">
                    <MarqueeCard
                        title={TerracottaCard.title}
                        description={TerracottaCard.description}
                        footer={TerracottaCard.footer}
                        imgUri={TerracottaCard.imgUri}
                        linkUri={TerracottaCard.linkUri}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={HachimanCard.title}
                        description={HachimanCard.description}
                        footer={HachimanCard.footer}
                        imgUri={HachimanCard.imgUri}
                        linkUri={HachimanCard.linkUri}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={RubiksCard.title}
                        description={RubiksCard.description}
                        footer={RubiksCard.footer}
                        imgUri={RubiksCard.imgUri}
                        linkUri={RubiksCard.linkUri}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={TornadoCard.title}
                        description={TornadoCard.description}
                        footer={TornadoCard.footer}
                        imgUri={TornadoCard.imgUri}
                        linkUri={TornadoCard.linkUri}>
                    </MarqueeCard>
                    <div className="my-4"></div>
                    <MarqueeCard
                        title={PointStarCluster.title}
                        description={PointStarCluster.description}
                        footer={PointStarCluster.footer}
                        imgUri={PointStarCluster.imgUri}
                        linkUri={PointStarCluster.linkUri}>
                    </MarqueeCard>
                </div>
            </div>
        </>
    )
}