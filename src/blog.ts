import { join } from "path"
import { ComponentContainer } from "@src/core/component/container"
import { ComponentDivider } from "@src/core/component/divider"
import { ComponentFooter } from "@src/core/component/footer"
import { ComponentHelmet } from "@src/core/component/helmet"
import { ComponentNav } from "@src/core/component/nav"
import { HTML, NodeText } from "htmlforge"
import { bodyStyle } from "@src/core/shim/body-style"
import { SITEMAP, TITLE_PREFIX } from "@src/core/constant"
import { ROOT_DIRECTORY } from "@src/core/root"
import { ComponentMarkdown } from "@src/core/component/markdown"
import { ComponentAnchor } from "@src/core/component/anchor"
import { readFileSync } from "fs"

type BlogManifestEntry = {
    name: string
    src: string
}

const BLOG_DATA_PATH = join(ROOT_DIRECTORY, "blog")

export const blogBuild = () => {
    const rootDoc = new HTML()
    const container = new ComponentContainer()
    const articles : BlogManifestEntry[]  = []

    bodyStyle(rootDoc.body)
    rootDoc.attributeAdd("lang", "en-GB")

    rootDoc.head
        .childAdd(new ComponentHelmet({ title: `${TITLE_PREFIX} | ${SITEMAP.blog.name}` }))

    rootDoc.body
        .childAdd(container)
        .childAdd(new ComponentFooter())

    container
        .childAdd(new ComponentNav())
        .childAdd(new ComponentDivider())

    const blogArtifacts : {
        URL: string
        document: HTML
    }[] = [{
        URL: SITEMAP.blog.URL,
        document: rootDoc
    }]

    for (const article of articles) {
        const articleSlug = article.src.split(".")[0] as string
        const articleDoc = new HTML()
        const articleURL = `/blog/${articleSlug}.html`
        const articleContainer = new ComponentContainer()
            .childAdd(new ComponentNav())
            .childAdd(new ComponentDivider())
        bodyStyle(articleDoc.body)

        articleDoc.head
            .childAdd(new ComponentHelmet({ title: `${TITLE_PREFIX} | ${SITEMAP.blog.name} - ${article.name}` }))
        articleDoc.body
            .childAdd(articleContainer)
            .childAdd(new ComponentFooter())

        const markdown = readFileSync(join(BLOG_DATA_PATH, article.src), "utf-8")
        articleContainer.childAdd(new ComponentMarkdown(markdown))

        container
            .childAdd(new ComponentAnchor({ href: articleURL })
                .childAdd(new NodeText(article.name))
            )

        blogArtifacts.push({ document: articleDoc, URL: articleURL })
    }

    return blogArtifacts
}

