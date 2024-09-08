import { defineStore } from "pinia";

// A proxy server is required to get the blog posts
const PROXY_SERVER = import.meta.env.VITE_PROXY_SERVER
const blogEndpoint = (query: string) => {
    if (PROXY_SERVER === "") {
        return `https://whl-cms.azurewebsites.net/items/articles?${query}`
    }

    return PROXY_SERVER + encodeURIComponent(`https://whl-cms.azurewebsites.net/items/articles?${query}`)
}

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

interface SimpleBlog {
    title: string
    link: string
    image: string
}

export const useBlogStore = defineStore("blog", {
    state: () => ({
        blogPosts: [] as Blog[],
        loading: true,
        initial: true
    }),
    actions: {
        async getInitialBlogPosts(queries: Record<string, string> = {}) {
            if (this.blogPosts.length == 0) {
                this.blogPosts = await this.getBlogPosts(queries);
            }
        },
        async getBlogPosts(queries: Record<string, string> = {}): Promise<Blog[]> {
            try {
                queries = {
                    limit: queries.limit || (`${this.blogPosts.length + 6}`),
                    sort: queries.sort || "-date_created",
                    fields: queries.fields || "*.*",
                    filter: queries.filter || '{"status":"published","translations":{"languages_code":"en-US"}}',
                    meta: queries.meta || "filter_count",
                }

                this.loading = true;
                const res = await fetch(blogEndpoint(new URLSearchParams(queries).toString()), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                })

                if (!res.ok) {
                    throw new Error("Failed to fetch blog posts")
                }

                this.loading = false;
                this.initial = false;

                const data = await res.json();
                return data.data.filter((post: Blog) => {
                    // Filter out the AS6081 post
                    return post.translations[0].title !== "AS6081: An Essential Standard in the Fight Against"
                }).map((post: Blog) => {
                    return {
                        ...post,
                        thumbnail: `https://whl-cms.azurewebsites.net//assets/${post.thumbnail}?format=webp`,
                    }
                })
            } catch (error) {
                console.error(error);
                return [];
            }
        },
        async getSinglePost(slug: string) {
            const blogs = await this.getBlogPosts({ filter: `{"status":"published","translations":{"languages_code":"en-US", "slug":"${slug}"}}` });
            return blogs[0];
        },
        getRandomBlogPosts(slug: string): SimpleBlog[] {
            return this.getSimpleBlogPosts
                .filter((post) => post.link !== slug)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
        }
    },
    getters: {
        getSimpleBlogPosts: (state) => {
            return state.blogPosts.map((post) => {
                return {
                    title: post.translations[0].title,
                    link: post.translations[0].slug,
                    image: post.thumbnail,
                }
            }) as SimpleBlog[]
        },
    },
});