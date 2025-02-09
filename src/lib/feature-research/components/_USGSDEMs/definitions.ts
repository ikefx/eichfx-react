import {InformationCardProperties} from "../../../shared/components/InformationCard.tsx";
const slot01: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The United States Geological Survey (USGS) provides a variety of topographic data of the US. This resource provides elevation, orthoimagery, hydrography, boundaries, land cover, and more. This resource (referred to as The National Map) can be utilized to create physically-accurate topology in 3D modeling softwares.',
            format: ''
        },
        {
            text: 'This workflow uses this resource with Global Mapper and 3DEM softwares to create physically-correct elevation geometry in e-on Vue. Raw data is downloaded from USGS\'s National Map, converted, and implemented.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 01: United States Geological Survey'
}
const slot02: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The USGS homepage: http://www.usgs.gov/',
            format: ''
        },
        {
            text: 'The National Map Home Page: http://nationalmap.gov/',
            format: ''
        },
        {
            text: 'The National Map Download Platform: http://viewer.nationalmap.gov/viewer/',
            format: ''
        },
        {
            text: 'In order to extract the necessary data for view, navigate to the National Map Download Platform. Click Figure 03 to be image to be directed to the platform.',
            format: ''
        },
        {
            text: 'The National Map Viewer and Download Platform behaves in this way: An interactive map is displayed in your browser. Use the UI to isoloate a particular area of interest.',
            format: ''
        },
        {
            text: 'For this example: the grand canyon. (Figure 04)',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 02: USGS\'s Link to National Map Viewer'
}
const slot03: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The Viewer Download Platform UI consist of multiple widget options to optimize data extraction. First, the imagery of the Viewer can be changed from Topo to Imager, Hydro-NHD, Hill Shade, and Blank. These image types will assist in finding an area of interest. Also, as will be explored later: the view type will alter potential raster data that will be extracted.',
            format: ''
        },
        {
            text: 'The navigation menu on left contains tabs \'Overlays\', \'Selection\', and \'Cart.\' For now, Overlays is of interest.',
            format: ''
        },
        {
            text: 'The \'Overlays\' tab can be used to instruct National Map what type of data the user wants to extract from the server (US Topo, GNIS, Boundaries, Land Cover, Imagery, Elevation, etc).',
            format: ''
        },
        {
            text: 'For a workflow that implements 3D mesh topology to Vue, Elevation is the resource necessary.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 03: Click for The National Map Viewer & Download Platform'
}
const slot04: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The Elevation data information provided by The National Map is referred to as NED (National Elevation Dataset). When this layer is applied in the viewer, an orange overlay may be screened atop the map. This is because there is no accurate method for the web browser to display this data, be assured however that it does exist, and has been made active for data extraction.',
            format: ''
        },
        {
            text: 'More on NED here. It is recommended to read in order to better understand the various formats and resolutions of elevation data.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 04: The Colorado River (Grand Canyon)'
}
const slot05: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The download tool in the Viewer\'s shelf widget provides multiple methods for data selection. Bounding Box is recommended for this workflow.',
            format: ''
        },
        {
            text: 'Once the area for extraction is drawn up, Nation Map Viewer will pop up a window asking which of the available data is the user interested in downloading. For Vue mesh creation, elevation data is all that is necessary.',
            format: ''
        },
        {
            text: 'While it is possible to extract additional information, the output data can increase in file size very quickly. This is why it is recommended - for the present - to extract only elevation.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 05: Download Data Tool'
}
const slot06: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Latitude and longitude are displayed for the area of interest. The smaller the bound box, the more precise the extracted elevation data. Larger maps are possible as well, with high detail, but can be extracted as an entire latitude longitude cell or small selections can be stitched together using the appropriate software (more on this later).',
            format: ''
        },
        {
            text: 'After this window, the Viewer will ask the user what file formats they desire. The available resolution for maps are 1 arc second and 1/3 arc seconds. These resolutions are part of NED data formation. More information on NED behavior can be reviewed here (I strongly recommend this read). From this pdf you\'d see how USGS has improved their NED file formats as of 2012. Therefore, many NED-to-Vue worklfows you may find on the internet are outdated.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 06: Data Type Selection for Download'
}
const slot07: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The lower the fraction, the higher the resolution (1/3 arc second is better than 1, 1/9 better than 1/3, etc). Once the desired file formats are selected (which format a user needs is dependent on the Raster Data Interpreting software you choose), they will added to the \'Cart\' tab of the navigation bar to the left. From here, button \'Checkout\' and enter an e-mail address. The data requested will be sent in zip archives to your web address as an attachment (all this for free!).',
            format: ''
        },
        {
            text: 'Download the archive packages, there will be multiple due to file save. Extract them all to one folder.',
            format: ''
        },
        {
            text: 'The result archive extraction includes a lot of files in peculiar file formats. It is for this reason that - for this workflow - the software \'Global Mapper\' is recommended for data conversion.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 07: Available File Format Selection (Can Choose Multiple)'
}
const slot08: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Global Mapper is recommended on the USGS website for file handling. This software is an utility tool for all things topo mapping.',
            format: ''
        },
        {
            text: 'The link to USGS\'s recommendation page can be found here. USGS provides a non-commercial, limited version of the software that may suffice your needs.',
            format: ''
        },
        {
            text: 'Global Mapper is an excellent tool because it can open the .zip archive, and interpret the data itself (other software would require the user to extract the archive, and then use the .adf file exclusively).',
            format: ''
        },
        {
            text: 'For a workflow that implements 3D mesh topology to Vue, Elevation is the resource necessary.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 08: E-mail Receipt of USGS Data Order'
}
const slot09: InformationCardProperties = {
    paragraphs: [],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 09: Global Mapper'
}
const slot10: InformationCardProperties = {
    paragraphs: [
        {
            text: 'The difficulty with DEM files is this: they contain a multitude of data, and each 3D package can only read some or some other. Even though only elevation data was written out by the USGS Download Platform, much of that data cannot be interpreted by Vue. Global Mapper is needed to cut out misc data, and reformat the necessary data in a way that the Vue software likes.',
            format: ''
        },
        {
            text: 'With Global Mapper the unnecessary raster data is removed. Figure 10 shows the Global Mapper Control Center. The Control Center displays all types of data contained in the elevation map. It is important to delete the .shp data, while it would be useful in some elevation software\'s, Vue simply cannot interpret them. If left in the DEM, Vue will not import the file.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 10: Control Center Displays List of Data Inside DEM'
}
const slot11: InformationCardProperties = {
    paragraphs: [
        {
            text: 'Once the elevation data is the only information left in the DEM, the user can export elevation grid data. Global Mapper can also recreate the elevation by creating points from raster data, and from points create 3d geometry. This is helpful if you want rebuild a higher resolution map.',
            format: ''
        },
        {
            text: 'Technically the workflow is complete, however Global Mapper (from my testing) clamps elevation once the DEM is brought into Vue. This can be fixed in Vue by simply scaling the geometry on the Y axis. The alternative I chose was to bring the output DEM from Global Mapper into 3DEM.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 11: Export Elevation Grid | Global Mapper\'s USGS DEM File Format'
}
const slot12: InformationCardProperties = {
    paragraphs: [
        {
            text: '3DEM is a great elevation map utility software (and it\'s free!). Sadly, it is outdated and cannot open the data from the USGS National Map Download Platform (which is why we use Global Mapper).',
            format: ''
        },
        {
            text: 'However, the triangulate data created in Global Mapper - that file 3DEM can read. 3DEM is a nice \'testing\' software to see if Global Mapper properly omitted the data Vue fails to interpret. So open the Dem in 3DEM.',
            format: ''
        },
        {
            text: 'Indeed it feels like repeating the same process twice, but the reason both Global Mapper and 3DEM is used is to ensure the DEM file contains only the data that Vue can understand. All 3D packages handle DEM files differently, and all DEMs consist of different data. This pipeline ensures that the final DEM can be imported to Vue as geometry.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 12: Global Mappers Output DEM Opened in 3DEM'
}
const slot13: InformationCardProperties = {
    paragraphs: [
        {
            text: 'In 3DEM, save as a USGS DEM. The file should now be in format that Vue will gladly import.',
            format: ''
        },
        {
            text: 'Within Vue, select import object and choose the DEM file. Vue will create terrain geometry from the elevation map (figure 12, click image to enlarge). Since both Global Mapper and 3DEM were used; the resulted terrain has physically accurate elevation for the region we chose.',
            format: ''
        },
        {
            text: 'Note:',
            format: ''
        },
        {
            text: 'Documentation on Vue can be found at e-on Vue website: http://www.e-onsoftware.com/',
            format: ''
        },
        {
            text: 'Vue11 Reference Manual here.',
            format: ''
        },
    ],
    vidSrc: null,
    imgSrc: null,
    imgFooter: 'Figure 13: Accurate Elevation Map Vue Terrain Model'
}
export const data: InformationCardProperties[] = [
    slot01,
    slot02,
    slot03,
    slot04,
    slot05,
    slot06,
    slot07,
    slot08,
    slot09,
    slot10,
    slot11,
    slot12,
    slot13
];