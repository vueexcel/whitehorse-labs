<template>
    <section class="sm:px-12 px-6 w-full sm:pt-28 pt-24 bg-white">
        <div class="w-full max-w-4xl mx-auto pointer-events-none max-h-[40rem]">
            <img :src="blogPost.image" alt="News Image" class="w-full h-auto">
        </div>

        <h2 class="sm:mt-16 mt-10 text-3xl sm:text-4xl font-roboto max-w-2xl">
            {{ blogPost.title }}
        </h2>
    </section>
    <SectionHeader subtitle="" class="bg-white" :headerShown="false" v-if="!loading">
        <template #title>
            <span class="text-sm font-roboto-mono text-neutral-500" v-html="dateAndCategories"></span>
        </template>

        <template #topBottom>
            <div v-html="blogPost.content" class="w-full max-w-4xl mx-auto blog-content"></div>
        </template>
    </SectionHeader>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// import NewsImage from '@/assets/images/resources/news-detail.png'
import SectionHeader from '@/components/layout/SectionHeader.vue';
import { useBlogStore } from '@/store/useBlogStore';
import { useAnimateStore } from '@/store/useAnimateStore';

const loading = ref(false)
const blogPost = ref<{
    title: string,
    content: string,
    categories: string[],
    image: string,
    slug: string,
    id: string,
    excerpt: string,
    updateAt: string,
    createdAt: string
}>({
    title: '',
    content: '',
    categories: [],
    image: '',
    slug: '',
    id: '',
    excerpt: '',
    updateAt: '',
    createdAt: ''
})

const route = useRoute();
const blogStore = useBlogStore()
const animateStore = useAnimateStore()

blogStore.getInitialBlogPosts();

const dateAndCategories = computed(() => {
    if (!blogPost.value.updateAt && !blogPost.value.createdAt) {
        return ''
    }

    const date = new Date(blogPost.value.updateAt || blogPost.value.createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    // @ts-ignore
    const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '').replace(/\d+/, d => {
        const suffix = d === '1' || d === '21' || d === '31' ? 'st' :
            d === '2' || d === '22' ? 'nd' :
                d === '3' || d === '23' ? 'rd' : 'th';
        return `${d}${suffix}`;
    });

    // Convert the categories array to the desired format (capitalize first letter)
    const formattedCategories = blogPost.value.categories
        .map(category => category.charAt(0).toUpperCase() + category.slice(1).split('-').join(' '))
        .join('<br>');

    return `${formattedDate}<br>${formattedCategories}`;
})

watch(
    () => route.params.id,
    async () => {
        loading.value = true;

        const post = await blogStore.getSinglePost(route.params.id as string)
        if (post) {
            blogPost.value = {
                title: post.translations[0].title,
                content: post.translations[0].content,
                categories: post.categories,
                image: post.thumbnail,
                slug: post.translations[0].slug,
                id: post.id,
                excerpt: post.translations[0].excerpt,
                updateAt: post.date_updated,
                createdAt: post.date_created
            }
        }

        // Scroll to the top of the page
        animateStore.scrollToTop()
        loading.value = false
    },
    { immediate: true }
)
</script>

<style scoped>
:deep(.blog-content) {
    @apply text-[#828282] font-roboto max-w-5xl;
}

:deep(.blog-content p) {
    @apply mb-4;
}

:deep(.blog-content h1),
:deep(.blog-content h2),
:deep(.blog-content h3),
:deep(.blog-content h4),
:deep(.blog-content h5),
:deep(.blog-content h6) {
    @apply font-roboto font-bold text-black mt-8 mb-4;
}

:deep(.blog-content h1) {
    @apply text-4xl;
}

:deep(.blog-content h2) {
    @apply text-3xl;
}

:deep(.blog-content h3) {
    @apply text-2xl;
}

:deep(.blog-content h4) {
    @apply text-xl;
}

:deep(.blog-content h5) {
    @apply text-lg;
}

:deep(.blog-content h6) {
    @apply text-base;
}

:deep(.blog-content ul),
:deep(.blog-content ol) {
    @apply list-disc list-inside ml-4 mb-4;
}

:deep(.blog-content ol) {
    @apply list-decimal;
}

:deep(.blog-content li) {
    @apply mb-2;
}

:deep(.blog-content strong),
:deep(.blog-content strong *) {
    @apply font-bold;
}

:deep(.blog-content img) {
    @apply my-8 mx-auto block max-w-full h-auto;
}

:deep(.blog-content blockquote) {
    @apply border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4;
}

:deep(.blog-content a) {
    @apply text-[#FF544F] underline hover:opacity-75;
}

:deep(.blog-content table) {
    @apply w-full table-auto border-collapse my-4;
}

:deep(.blog-content th),
:deep(.blog-content td) {
    @apply border border-gray-300 px-4 py-2;
}

:deep(.blog-content th) {
    @apply bg-gray-100 font-bold;
}
</style>