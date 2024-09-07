import { defineStore } from "pinia";

// A proxy server is required to get the blog posts
const PROXY_SERVER = import.meta.env.VITE_PROXY_SERVER

interface Blog {
    id: string
    status: string
    sort: string | null
    date_created: string
    date_updated: string
    categories: string[]
    thumbnail: string
    translations: {
        id: string
        articles_id: string
        languages_code: string
        title: string
        slug: string
        content: string
        excerpt: string
    }[]
}

export const useBlogStore = defineStore("blog", {
    state: () => ({
        blogPosts: [] as Blog[],
        loading: true,
        initial: true
    }),
    actions: {
        async getBlogPosts(queries: Record<string, string> = {}) {
            queries = {
                limit: queries.limit || (`${this.blogPosts.length + 6}`),
                sort: queries.sort || "-date_created",
                fields: queries.fields || "*.*",
                filter: queries.filter || '{"status":"published","translations":{"languages_code":"en-US"}}',
                meta: queries.meta || "filter_count",
            }

            this.loading = true;
            fetch(PROXY_SERVER + encodeURIComponent(`https://whl-cms.azurewebsites.net/items/articles?${new URLSearchParams(queries).toString()}`), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
            })
                .then((res) => res.json())
            .then((data) => {
                this.blogPosts = data.data;
                this.loading = false;
                this.initial = false;
            }).finally(() => {
                this.loading = false
            })
        },
    },
    getters: {
        getFilteredBlogPosts: (state) => {
            const restrictedBlogPosts = state.blogPosts.filter((post) => {
                return post.translations[0].title !== "AS6081: An Essential Standard in the Fight Against"
            })
            return restrictedBlogPosts
        },
        getSimpleBlogPosts: (state) => {
            const restrictedBlogPosts = state.blogPosts.filter((post) => {
                return post.translations[0].title !== "AS6081: An Essential Standard in the Fight Against"
            }).map((post) => {
                return {
                    title: post.translations[0].title,
                    link: post.translations[0].slug,
                    image: `https://whl-cms.azurewebsites.net//assets/${post.thumbnail}?format=webp`,
                }
            })
            return restrictedBlogPosts
        }
    },
});