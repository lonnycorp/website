import { ComponentContainer } from "@src/core/component/container"
import { ComponentDivider } from "@src/core/component/divider"
import { ComponentFooter } from "@src/core/component/footer"
import { ComponentHero } from "@src/core/component/hero"
import { ComponentHelmet } from "@src/core/component/helmet"
import { ComponentNav } from "@src/core/component/nav"
import { HTML } from "htmlforge"
import { bodyStyle } from "@src/core/shim/body-style"
import { SITEMAP, TITLE_PREFIX } from "@src/core/constant"

const IMAGE_PATH = "/asset/home-logo.png"

export const homeBuild = () => {
    const doc = new HTML()

    bodyStyle(doc.body)
    doc.attributeAdd("lang", "en-GB")

    doc.head
        .childAdd(new ComponentHelmet({ title: `${TITLE_PREFIX} | ${SITEMAP.home.name}` }))

    doc.body
        .childAdd(
            new ComponentContainer()
                .childAdd(new ComponentNav())
                .childAdd(new ComponentDivider())
                .childAdd(new ComponentHero(IMAGE_PATH))
                .childAdd(new ComponentDivider())
        )
        .childAdd(new ComponentFooter())

    return [{
        URL: SITEMAP.home.URL,
        document: doc
    }]
}
