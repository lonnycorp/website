import { ComponentContainer } from "@src/core/component/container"
import { ComponentDivider } from "@src/core/component/divider"
import { ComponentFooter } from "@src/core/component/footer"
import { ComponentHelmet } from "@src/core/component/helmet"
import { ComponentNav } from "@src/core/component/nav"
import { HTMLDocument } from "htmlforge"
import { bodyStyle } from "@src/core/shim/body-style"
import { SITEMAP, TITLE_PREFIX } from "@src/core/constant"

export const contactBuild = () => {
    const doc = new HTMLDocument()

    bodyStyle(doc.body)
    doc.attributeAdd("lang", "en-GB")

    doc.head
        .childAdd(new ComponentHelmet({ title: `${TITLE_PREFIX} | ${SITEMAP.contact.name}` }))

    doc.body
        .childAdd(
            new ComponentContainer()
                .childAdd(new ComponentNav())
                .childAdd(new ComponentDivider())
        )
        .childAdd(new ComponentFooter())

    return [{
        path: SITEMAP.contact.path,
        document: doc
    }]
}
