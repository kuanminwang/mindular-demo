<template>
  <div class="content">
    <div class="home">
      <Waterfall :options="options">
        <WaterfallItem v-for="(card) in cards" :key="card.cardId" class="mt-3">
          <Card :card="card" @showMoreClicked="showDetails($event)" />
        </WaterfallItem>
      </Waterfall>
      <modal name="details" :width="'85%'" :height="'90%'" @closed="displayDetails=false">
        <InfoBlockDetails v-if="displayDetails" :link="link"></InfoBlockDetails>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_CARDS } from "@/store/modules/actions.type"
import { Waterfall, WaterfallItem } from 'vue2-waterfall';
import InfoBlockDetails from './InfoBlockDetails.vue';
import { CARDS } from '@/mock/cards';
import Card from '@/components/Card.vue';

export default {
  name: "Home",
  components: {
    Waterfall,
    WaterfallItem,
    InfoBlockDetails,
    Card
  },
  data() {
    return {
      cards: CARDS,
      options: {
        gutter: 10,
        horizontalOrder: true
      },
      link: null,
      displayDetails: false
    };
  },
  computed: {
    ...mapState({
      // cards: state => state.card.cards
    })
  },
  mounted() {
    this.getCards();
  },
  methods: {
    getCards() {
      this.$store
        .dispatch(GET_CARDS)
        .then()
        .catch(() => {})
    },
    showDetails(card) {
      this.link = card.link;
      this.displayDetails = true;
      this.$modal.show('details')
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 20px;
}

</style>