import './index.css';
import { Header } from './lib/root/components/Header';
import {LeftNavigation} from "./lib/root/components/LeftNavigation.tsx";
import { Content } from './lib/shared/Content.tsx';

export default function App() {
    return (
        <>
            <div className="d-flex flex-column root-pane">
                <div className="sticky-top">
                    <Header></Header>
                </div>
                <div className="h-100">
                    <div className="d-flex h-100">
                        <LeftNavigation></LeftNavigation>
                        <Content></Content>
                    </div>
                </div>
            </div>
        </>
    )
}
