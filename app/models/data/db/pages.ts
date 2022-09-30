import { $Hero } from "@components/Hero";
import { $FeaturedSection } from "@views/components/FeaturedSection";
import { $SummarySection } from "@views/components/SummarySection";
import { $StatsSection } from "@components/StatsSection"
import { $ImageMasonry } from "@components/ImageMasonry"
import { $ContactSection } from "@components/ContactSection"

import meta from "@configs/meta";
import layout from "@configs/layout";


const pages = ({ store, pageKey }) => {


    const { title: siteTitle } = meta()

    const pageData = {}


    const pageObject = {
        id: `${siteTitle}--pages-db`,
        version: Date.now(),
        layout: layout,
        data: pageData[pageKey]
    }

}





export default pages