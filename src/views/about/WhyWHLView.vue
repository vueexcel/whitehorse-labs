<template>
  <main>
    <HeroSection :background-image="BackgroundImage" title="global guardians of technological integrity" subtitle="">
      Driving progress toward a <br class="hidden md:block"> safer, more progressive world
      <template #description>
        We inspire confidence and deliver peace of mind, fueling visionary ideas with our steadfast commitment
        to reliability and safety.
      </template>
    </HeroSection>
    <TopHeading>
      Ensuring flawless supply chain quality and product expectations through our team's technical expertise and
      open, trustworthy communication across all levels
    </TopHeading>
    <SectionHeader title="Why White Horse Labs" subtitle="We give you confidence to drive your vision" cta="Let's talk"
      :cta-link="constants.contact.path" class="bg-white">
      <template #top>
        <p class="text-[#828282] font-roboto">
          Imagine a world where electronics are always what they claim to be—no substandard, no counterfeit.
          That’s the world Mark Rinehart envisioned when he founded White Horse Labs. He established the
          company right at the source, tackling the counterfeit challenge head-on at its epicenter. But we
          weren’t just any company; we were the good guys, the white knights symbolized by our name and logo—a
          white horse emerging from the shadows, representing purity and safety. By leading with our values,
          we quickly rose to prominence in the fight against counterfeit electronics. We were the first of our
          kind in Asia, innovating testing methods that not only met but also helped define industry
          standards. It was akin to setting the rules of the game where none existed, ensuring electronics
          were tested with rigor, transparency, and integrity.
        </p>
        <p class="text-[#828282] font-roboto">
          As we evolved, our services expanded well beyond counterfeit detection and component testing,
          reflecting our holistic approach to quality control. And while the global landscape shifted, our
          dedication remained steadfast. We continued to grow, developing tools like Pegasus and extending our
          reach to new markets, wherever in the world our clients needed us. From a modest beginning to a
          global presence, White Horse Labs has remained true to its mission—ensuring the integrity of the
          electronics supply chain. Our story isn’t just about growth; it’s about maintaining a steadfast
          commitment to quality at every step. Looking forward, we’re excited to continue leading, innovating,
          and ensuring that the components connecting our world are trustworthy and reliable.
        </p>
      </template>
    </SectionHeader>

    <OurValuesSection :items="OUR_VALUES_LIST" />

    <SectionHeader title="Our Promise" subtitle="We promise uncompromising quality with heart and mind"
      class="bg-white">
      <template #top>
        <p class="text-[#828282] font-roboto">

          At White Horse Labs, we are dedicated to safeguarding the integrity of your products and protecting the trust
          you place in us. We promise to be your unwavering partner in quality, ensuring that every component, every
          process, and every transaction meets the highest standards of reliability and safety.
          <br><br>
          We are relentless in our pursuit of excellence, driven by a passion for precision and a commitment to
          innovation. From our industry-leading testing and inspection services to our expertise in failure analysis,
          counterfeit detection, and supply chain management, we leave no detail unchecked and no risk unaddressed.
        </p>
        <p class="text-[#828282] font-roboto">
          We believe in transparency, accountability, and building lasting partnerships. Our promise is to provide you
          with peace of mind, knowing that your products are handled with the utmost care, expertise, and dedication. We
          stand by our commitment to quality assurance, knowing that our work protects not just components, but
          reputations, brands, and customer trust.
          <br><br>
          At White Horse Labs, we don’t just test and inspect; we empower your business to thrive with confidence.
          Because when it comes to quality, compromise is never an option.
        </p>
      </template>
    </SectionHeader>
    <SolutionSection title="Keep exploring White HOrse Labs" :items="SOLUTIONS_LIST" />
    <JoinusSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/pages/common/HeroSection.vue';
import JoinusSection from '@/components/pages/common/JoinusSection.vue';
import FooterSection from '@/components/pages/common/FooterSection.vue';
import OurValuesSection from '@/components/pages/about/OurValuesSection.vue';
import SolutionSection from '@/components/pages/common/SolutionSection.vue';
import TopHeading from '@/components/pages/about/TopHeading.vue';
import SectionHeader from '@/components/layout/SectionHeader.vue';

import constants from '@/constants/routes.constants'

import BackgroundImage from '@/assets/images/about/why-whl/hero.png';

import SolutionImage1 from '@/assets/images/about/why-whl/solution-1.png'
import SolutionImage2 from '@/assets/images/about/why-whl/solution-2.png'
import SolutionImage3 from '@/assets/images/about/why-whl/solution-3.png'

const SOLUTIONS_LIST = [
  {
    title: 'Who We Are',
    link: constants.about.path + '/' + constants.about.whoWeAre.path,
    image: SolutionImage1,
    description:
      'Explore our Purpose, Values, Mission and the Promise we keep to our clients around the globe.'
  },
  {
    title: 'Join Our Team',
    link: constants.about.path + '/' + constants.about.joinOurTeam.path,
    image: SolutionImage2,
    description:
      'Join us in making an impact in ensuring the reliability and safety of electronics around the globe.'
  },
  {
    title: 'Our Locations',
    link: constants.about.path + '/' + constants.about.ourLocations.path,
    image: SolutionImage3,
    description:
      'With over 160 employees in six countries, our global presence is the authority of technological integrity.'
  }
]

const OUR_VALUES_LIST = [
  {
    title: '',
    subtitle: 'Our values define us',
    description: '160+ employees enrich the team at White Horse Laboratories with their individual skills, knowledge and personality. It is only through the successful interaction of these unique characters that the good work consistently appreciated by our customers becomes possible.'
  },
  {
    title: 'uphold truth',
    subtitle: 'We uphold truth as our guiding principle',
    description: 'Upholding truth fortifies the company\'s integrity, fostering a trustworthy environment that benefits all stakeholders. Employees take pride in this transparent culture, which promotes honesty and respect, enhancing engagement and morale. For the audience, it establishes the company as a reliable and ethical partner, reinforcing their confidence in the company\'s commitments and outputs, which is paramount for lasting business relationships.'
  },
  {
    title: 'Embrace People',
    subtitle: 'We embracing people as priority',
    description: 'Adopting a people-focused approach underlines the company\'s commitment to valuing human connections and well-being, creating a nurturing and inclusive environment that attracts and retains talent. This approach resonates with employees, boosting satisfaction and loyalty, while it assures the audience of the company\'s genuine care and commitment to positive impact, fostering deeper emotional ties and loyalty to the brand.'
  },
  {
    title: 'Surpass expectations',
    subtitle: 'A passion for surpassing expectations',
    description: 'A collective passion for exceeding expectations propels the company towards continuous improvement and exceptional performance, instilling a culture of ambition and innovation. This passion not only motivates employees to excel but also assures the audience of the company\'s dedication to delivering unparalleled value and quality, reinforcing the company\'s position as a dedicated and forward-thinking industry leader.'
  },
]
</script>