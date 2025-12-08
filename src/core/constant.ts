import { ROOT_DIRECTORY } from "@src/core/root"
import { join } from "path"

export const TITLE_PREFIX = "The Lonny Corporation"
export const ASSET_PREFIX = "asset"
export const DIST_PATH = join(ROOT_DIRECTORY, "dist")

export const SITEMAP = {
    home: {
        name: "Home",
        path: "/index.html"
    },
    blog: {
        name: "Blog",
        path: "/blog.html"
    },
    contact: {
        name: "Contact",
        path: "/contact.html"
    },
} as const
