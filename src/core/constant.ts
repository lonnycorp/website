import { ROOT_DIRECTORY } from "@src/core/root"
import { join } from "path"

export const TITLE_PREFIX = "The Lonny Corporation"
export const ASSET_PREFIX = "asset"
export const DIST_PATH = join(ROOT_DIRECTORY, "dist")

export const SITEMAP = {
    home: {
        name: "Home",
        URL: "/index.html"
    },
    blog: {
        name: "Blog",
        URL: "/blog.html"
    },
    contact: {
        name: "Contact",
        URL: "/contact.html"
    },
} as const
