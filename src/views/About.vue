<template>
  <div>
    <div class="content">
      <div class="discover">
        <!-- header -->
        <header class="flex align-items-center justify-content-space-between">
          <div>
            <div class="ic-brand ic-brand-size"></div>
            <h2 class="title">Connect findings for your explorative learning and research</h2>
          </div>
          <div class="mr-20">
            <Cloud :clouds="cloudGroup.clouds" :cloudType="cloudGroup.cloudGroupType" />
          </div>
        </header>
        <!-- cards -->
        <div>
          <Waterfall :options="options">
            <WaterfallItem v-for="(card) in cards" :key="card.cardId" class="mt-3">
              <Card :card="card" />
            </WaterfallItem>
          </Waterfall>
        </div>
      </div>
    </div>
    <!-- intros -->
    <section class="intro-content">
      <div class="flex align-items-center flex-wrap justify-content-center mb-5">
        <div class="ic-clipper ic-intro-size"></div>
        <div class="position-relative">
          <div class="background background--danger"></div>
          <div class="text-content">
            <h4 class="title">Harvest in a carefree flow</h4>
            <span class="text">Save what you see plus hidden relations, with 1 click.</span>
          </div>
        </div>
      </div>
      <div class="flex align-items-center flex-wrap justify-content-center mb-5">
        <div class="position-relative">
          <div class="background background--warning"></div>
          <div class="text-content">
            <h4 class="title">Stretch your mind canvas</h4>
            <span class="text">AI augments the architecting of your knowledge structure.</span>
          </div>
        </div>
        <div class="ic-organizer ic-intro-size"></div>
      </div>
      <div class="flex align-items-center flex-wrap justify-content-center mb-5">
        <div class="ic-weaver ic-intro-size"></div>
        <div class="position-relative">
          <div class="background background--info"></div>
          <div class="text-content">
            <h4 class="title">Spark the unexpected</h4>
            <span class="text">Curate your collection to fuel new ideas.</span>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer class="footer flex justify-content-space-between flex-wrap">
      <section>
        <h4 class="title mb-10">Subscribe to our newsletter</h4>
        <div class="flex align-items-center flex-wrap">
          <div class="auth-form-control">
            <div class="mr-2 ic-auth-size ic-mail"></div>
            <input v-model="email" placeholder="Email Address"/>
          </div>
          <button @click="subscribe" class="ml-3 mindular-stroke-button-primary">Subscribe</button>
        </div>
      </section>
      <section class="mt-5">
        <div>
          <i class="fa fa-facebook cursor-pointer icon mr-5" aria-hidden="true"></i>
          <i class="fa fa-twitter cursor-pointer icon mr-5" aria-hidden="true"></i>
          <i class="fa fa-instagram cursor-pointer icon" aria-hidden="true"></i>
        </div>
        <div class="mt-5">
          <span class="copyright-text">
            Copyright © {{year}}. Mindular. All rights reserved.
          </span>
        </div>
      </section>
    </footer>
  </div>
  
</template>

<script>
import { DISCOVER_CLOUDS } from '@/mock/clouds';
import { CARDS } from '@/mock/cards';
import Cloud from '@/components/Cloud.vue';
import Card from '@/components/Card.vue';
import { Waterfall, WaterfallItem } from 'vue2-waterfall';

export default {
  data() {
    return {
      cloudGroup: DISCOVER_CLOUDS,
      cards: CARDS,
      email: '',
      options: {
        gutter: 10,
        horizontalOrder: true
      },
      year: new Date().getFullYear()
    }
  },
  components: {
    Cloud,
    Card,
    Waterfall, 
    WaterfallItem 
  },
  methods: {
    subscribe() {

    }
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';

.discover {
  header {
    margin: 120px 0;
    .title {
      color: $steel-500;
      width: 400px;
      font-weight: 700;
    }
  }
}

.intro-content {
  padding: 40px 240px;

  .title {
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;
    color: $steel-600;
    width: 382px;
    margin: 0;
  }

  .text-content {
    margin-left: 20px;
    
    .text {
      font-size: 28px;
      color: $steel-600;
      display: block;
      width: 365px;
    }  
  }

  .background {
      position: absolute;
      width: 359px;
      height: 171px;
      left: 0px;
      z-index: -1;
      top: 26px;
      border-radius: 16px;

      &--danger {
        background: $salmon-50;
      }

      &--warning {
        background: $butter-50;
      }

      &--info {
        background: $spinat-50;
      }
  }
  
}

.footer {
  padding: 72px 204px;
  height: 296px;
  background: $denim-50;

  .title {
    margin-top: 0;
    font-size: 28px;
    font-weight: 700;
  }

  .icon {
    font-size: 24px;
    color: $steel-400;

    &:hover {
      color: $denim-500;
    }
  }

  .copyright-text {
    font-size: 16px;
    color: $steel-400;
  }  
}

</style>