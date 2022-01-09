<template>
    <div class="card">
        <!-- HEADER -->
        <div class="card-header">
            <span class="logo-icon" :class="card.iconClass"></span>
            <span class="link-text">
            {{ card.link }}
            </span>
        </div>
        <hr>
        <!-- TITLE -->
        <span class="title">{{ card.title }}</span>
        <hr>
        <!-- CONTENT -->
        <div class="blocks" v-for="infoBlock in card.blocks" :key="infoBlock.id">
            <img v-if="infoBlock.imagePath" :src="infoBlock.imagePath" class="image">
            <div class="card-content font-small">
              <span>{{infoBlock.content}}</span>
            </div>
            <hr>
        </div>
        <div class="show-more" @click="showMore">More</div>
    </div>
</template>

<script>
export default {
    props: {
        card: {type: Object}
    },
    methods: {
      showMore() {
        this.$emit('showMoreClicked', this.card);
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';

.card {
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(92, 99, 116, 0.1);
  border-radius: 8px;
  padding: 8px;
  width: 200px;
  
  .card-header {
    font-size: 10px;
    line-height: 130%;
    display: flex;
  
    .link-text {
      margin-left: 4px;
      cursor: pointer;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 200px;
    }
    
    .logo-icon {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 13px;
    }
  }

  .title {
    font-weight: 600;
    display: block;
    color: $steel-500;
    width: 200px;
  }

  .image {
    width: 180px;
  }

  .show-more {
    cursor: pointer;
    text-align: center;
  }
}
</style>