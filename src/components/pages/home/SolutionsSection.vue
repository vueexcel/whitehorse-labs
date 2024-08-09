<template>
  <SectionHeader title="What We Do" subtitle="Our Solutions" class="pb-0 bg-white" ref="sectionRef" />

  <div class="bg-white w-full px-4 sm:px-8 md:px-12 sm:top-0">
    <div class="max-w-4xl rounded-lg lg:ml-60 aspect-[3/4] sm:aspect-video mb-8 sticky" v-for="(item, index) in list"
      :key="item.id" ref="cards" :style="`top: ${(index * 12) + (120 + (width < 768 ? 35 : 0))}px`">
      <img :src="item.image" alt="images" class="object-cover w-full h-full rounded-lg" />
      <div class="absolute top-0 left-0 flex flex-col justify-between w-full h-full p-5 sm:px-20">
        <span class="text-xs text-white sm:absolute left-5 top-12">{{ index < 9 ? '0' + (index + 1) : (index + 1)
            }}</span>
            <h5 class="text-3xl text-white sm:mt-5">{{ item.title }}</h5>

            <div>
              <p class="block text-sm text-white md:text-lg">
                {{ item.description }}
              </p>
              <BaseButton title="Learn More" class="mt-5 md:mb-2" />
            </div>
      </div>
    </div>
    <div class="w-full" style="height: 120px"></div>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import SectionHeader from '@/components/layout/SectionHeader.vue';
import BaseButton from '@/components/common/BaseButton.vue';

import SolutionImage1 from '@/assets/images/home/solution-1.png';
import SolutionImage2 from '@/assets/images/home/solution-2.png';
import SolutionImage3 from '@/assets/images/home/solution-3.png';
import SolutionImage4 from '@/assets/images/home/solution-4.png';

export default {
  name: 'SolutionsSection',
  components: {
    SectionHeader,
    BaseButton
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'Testing Laboratory',
          description:
            "State-of-the-art testing services designed to ensure product reliability and safety, leveraging advanced engineering expertise and cutting-edge technology. Our comprehensive solutions, including counterfeit detection and failure analysis, are dedicated to maintaining the highest standards of quality assurance across the supply chain.",
          image: SolutionImage1,
          link: '#'
        },
        {
          id: 2,
          title: 'Factory Auditing',
          description:
            "We provide meticulous factory auditing services to ensure compliance, quality, and efficiency in manufacturing processes. Our expert evaluations help mitigate risks and uphold the highest standards of production integrity across the supply chain.",
          image: SolutionImage2,
          link: '#'
        },
        {
          id: 3,
          title: 'Programming, Packaging & Logistics',
          description:
            "Integrated packaging and logistics solutions designed to optimize efficiency and ensure the secure delivery of your products. Our expertise in streamlined operations guarantees reliability and peace of mind throughout the supply chain.",
          image: SolutionImage3,
          link: '#'
        },
        {
          id: 4,
          title: 'Training & Education',
          description:
            "Comprehensive training and education programs to enhance your team's expertise and uphold industry standards. Our tailored courses ensure that your personnel are equipped with the latest knowledge and skills to maintain excellence in quality assurance and supply chain management.",
          image: SolutionImage4,
          link: '#'
        }
      ],
      width: window.innerWidth
    }
  },
  methods: {
    updateGsap() {
      this.width = window.innerWidth;

      const { sectionRef: { section }, cards } = this.$refs as any;

      const cardHeight = cards[0].offsetHeight + 30;
      const totalHeight = (cards.length - 1) * cardHeight;

      gsap.to(section, {
        scrollTrigger: {
          pin: true,
          trigger: section,
          pinSpacing: false,
          scrub: true,
          end: `+=${totalHeight + 130}`,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card: gsap.DOMTarget, index: number) => {
        const scale = 1 - (cards.length - index) * 0.025;

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: `+=${cards[0].offsetHeight}`,
            scrub: true,
            invalidateOnRefresh: true
          },
          scale: scale,
          transformOrigin: 'top center',
          ease: 'none'
        });
      });
    }
  },
  mounted() {
    this.updateGsap();
  },
  unmounted() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
};
</script>
