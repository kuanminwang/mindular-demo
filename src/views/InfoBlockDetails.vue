<template>
  <div class="info-block-details" v-if="currentInfoBlock">
    <div class="left">
      {{ currentInfoBlock.content }}
    </div>
    <div class="right">
      <div class="title">
        {{ currentInfoBlock.title }}
      </div>
      <hr>
      <div>
        added at {{ currentInfoBlock.title }} <a :href="currentInfoBlock.link">{{ currentInfoBlock.link }}</a>
      </div>
      <hr>
      <div class="tags">
        <span v-for="tag in currentInfoBlock.tags" :key="tag.id" class="tag">
          {{ tag.name }}
        </span>
      </div>
      <hr>
      <div class="note">
        note
        <textarea name="" id="" cols="30" rows="10" v-model="currentInfoBlock.note"></textarea>
      </div>
    </div>

    <button class="prev" @click="prevBlock">
      prev
    </button>
    <button class="next" @click="nextBlock">
      next
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_INFO_BLOCKS_BY_LINK, GET_NEXT_BLOCK, GET_PREVIOUS_BLOCK } from "@/store/modules/actions.type"

export default {
  name: "InfoBlockDetails",
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    link: String
  },
  computed: {
    ...mapState({
      blocks: state => state.infoBlock.searchedInfoBlocks,
      currentInfoBlock: state => state.infoBlock.currentInfoBlock,
    })
  },
  mounted() {
    this.getBlocks();
  },
  methods: {
    getBlocks() {
      this.$store
        .dispatch(GET_INFO_BLOCKS_BY_LINK, this.link)
        .then()
        .catch(() => {})
    },
    prevBlock() {
      this.$store
        .dispatch(GET_PREVIOUS_BLOCK)
        .then()
        .catch(() => {})
    },
    nextBlock() {
      this.$store
        .dispatch(GET_NEXT_BLOCK)
        .then()
        .catch(() => {})
    }
  }
};
</script>

<style lang="scss" scoped>

.info-block-details {
  display: flex;
  height: 100%;
  .left {
    flex: 5;
    border-right: 1px solid black;
    height: 100%;
  }
  .right {
    flex: 2;
    .tags {
      display: flex;
      .tag {
        float: left;
        padding: 4px;
        border-radius: 8px;
        border: 1px solid black;
        margin: 4px;
      }
    }
  }
}

.prev {
  position: fixed;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
}
.next {
  position: fixed;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
}
</style>