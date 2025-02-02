import {LeftNavigation} from "../feature-root/components/LeftNavigation.tsx";

export function ResearchContent() {

    const struct = [
        {
            top: {
                title: 'Renderman',
                path: '/',
            },
            items: [
                {
                    title: 'AOVs',
                    path: '/research/aov',
                },
                {
                    title: 'Point Clouds',
                    path: '/research/pointclouds',
                },
                {
                    title: 'Volumetrics I',
                    path: '/research/volumetrics1',
                },
                {
                    title: 'Volumetrics II',
                    path: '/research/volumetrics2',
                },
                {
                    title: 'Subsurface',
                    path: '/research/Subsurface',
                },
                {
                    title: 'Magic Lights',
                    path: '/research/magiclights',
                },
            ]
        },
        {
            top: {
                title: 'Renderman',
                path: '/',
            },
            items: [
                {
                    title: 'AOVs',
                    path: '/research/aov',
                },
                {
                    title: 'Point Clouds',
                    path: '/research/pointclouds',
                },
                {
                    title: 'Volumetrics I',
                    path: '/research/volumetrics1',
                },
                {
                    title: 'Volumetrics II',
                    path: '/research/volumetrics2',
                },
                {
                    title: 'Subsurface',
                    path: '/research/Subsurface',
                },
                {
                    title: 'Magic Lights',
                    path: '/research/magiclights',
                },
            ]
        }
    ];

    return (
        <>
            <div class="w-100 h-100">
                <LeftNavigation sections={struct}></LeftNavigation>
            </div>
        </>
    )
}