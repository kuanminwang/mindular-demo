<template>
    <header v-if="isAuthenticated" class="header">
        <div class="flex align-items-center width-percentage-100 justify-content-space-between">
          <div class="flex align-items-center">
            <!-- logo -->
            <div class="logo">
                <div class="ic-logo ic-logo-size"></div>
            </div>
            <!-- pages -->
            <router-link 
              v-for="page in pages"
              :to="page.path" 
              :key="page.id" 
              custom 
              v-slot="{ navigate, isActive }">
              <div class="tab-item flex align-items-center" :class="[isActive && 'active']"  @click="navigate">
                  <div v-if="isActive" class="active-bar"></div>
                  <div class="icon">
                      <icon :name="page.iconName"></icon>
                  </div>
                  <div class="text">{{ page.name }}</div>
              </div>
            </router-link>
            <!-- search field -->
            <div class="search-form-control ml-10">
              <div class="mr-2 ic-auth-size ic-search"></div>
              <input v-model="query" placeholder="Search"/>
            </div>
          </div>
          <!-- logout -->
          <div class="tab-item">
              <div @click="logout" class="text cursor-pointer">
                Log out
              </div>
          </div>
        </div>
    </header>
</template>

<script>
import { Pages } from '../data/pages';
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/modules/actions.type";
import Icon from './Icons.vue';

export default {
    components: {
      'icon': Icon,
    },
    data() {
        return {
            pages: Pages,
            query: ''
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
      logout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "Login" }))
        .catch(() => {
          this.loading = false
          this.showError = true
        })
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';

.header {
  position: absolute;
  display: flex;
  width: 100%;
  height: 72px;
  left: 0px;
  top: 0px;
  backdrop-filter: blur(22px);
  border-bottom: 1px solid $steel-100;

  .logo {
    margin: 15px 0 18px 40px;
  }

  .tab-item {
    margin: 25px;
    display: flex;
    position: relative;
    padding: 0 4px 0 8px;
    color: $steel-400;
    cursor: pointer;

    &:hover {
      svg {
        stroke: $denim-500;
      }

      div.text {
        color: $denim-500;
      }
    }

    &.active {
      svg {
        stroke: $denim-500;
      }

      div.text {
        color: $denim-500;
      }
    }

    .icon {
      stroke: $steel-400;
    }

    .active-bar {
      position: absolute;
      width: 118px;
      height: 2px;
      left: 0px;
      top: 45px;
      background: $denim-500;
      backdrop-filter: blur(22px);
      border-radius: 3px;
    }

    div.text {
      margin-left: 8px;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      color: $steel-400;
      font-size: 16px;
      line-height: 20px;
    }
  }

  .search-form-control {
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(92, 99, 116, 0.07);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 4px;

    input {
      border: none;
      outline: none;
      font-size: 16px;
      width: 100%;
    }
  }
}

</style>