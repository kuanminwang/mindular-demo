<template>
  <div v-if="isOpened" class="cloud-sidebar" :class="panelClass">
      <header class="panel-header flex align-items-center justify-content-space-between">
          <div class="ic-close-panel cursor-pointer" @click="close"></div>
          <div>{{ cloudName }}</div>
          <div>
              <div class="ic-auth-size ic-search cursor-pointer" @click="close"></div>
          </div>
      </header>
      <div class="panel-content">
        <Waterfall :options="options">
            <WaterfallItem v-for="(card) in cards" :key="card.cardId" class="mt-3">
            <Card :card="card" @showMoreClicked="showDetails($event)" />
            </WaterfallItem>
        </Waterfall>
      </div>
  </div>
</template>

<script>
import { Waterfall, WaterfallItem } from 'vue2-waterfall';
import { CARDS } from '@/mock/cards';
import Card from '@/components/Card.vue';

export default {
    components: {
        Waterfall,
        WaterfallItem,
        Card
    },
    data() {
        return {
            cards: CARDS,
            cloudName: '',
            panelClass: '',
            options: {
                gutter: 10,
                horizontalOrder: true
            },
            isOpened: false
        }
    },
    methods: {
        open(cloudId, cloudName, cloudGroupClass) {
            this.panelClass = this._getPanelClass(cloudGroupClass);
            this.cloudName = cloudName;
            this.isOpened = true;
        },
        close() {
            this.isOpened = false;
        },
        _getPanelClass(cloudGroupClass) {
            const map = {
                'info': 'cloud-sidebar--info',
                'warning': 'cloud-sidebar--warning',
                'danger': 'cloud-sidebar--danger',
            }
            if (map[cloudGroupClass]) {
                return map[cloudGroupClass]
            }
            return 'cloud-sidebar--info'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';

.cloud-sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 470px;
    height: 100vh;
    overflow-y: auto;
    box-shadow: 0px 10px 10px rgba(45, 42, 57, 0.04), 0px 20px 25px rgba(45, 42, 57, 0.1);

    &--info {
        background: $denim-100;
    }

    &--warning {
        background: $butter-100;
    }

    &--danger {
        background: $salmon-100;
    }

    .panel-header {
        padding: 8px;
    }

    .panel-content {
        padding-left: 28px;
    }

}

</style>