<template>
    <div :class="cloudGroupClass">
        <div v-for="cloud in clouds" :key="cloud.id">
            <div v-if="cloud.clouds" class="flex cloud-multi" :class="[cloud.cloudClass, cloudType ? cloudTypeMap[cloudType] : 'cloud-type--info']">
                <div v-for="subCloud in cloud.clouds" :key="subCloud.id" class="cloud-outter-wrapper" :class="cloudType ? cloudTypeMap[cloudType] : 'cloud-type--info'">
                    <div class="cloud-inner-wrapper" :class="{ 'cursor-pointer': enableCloudClick }"  @click="handleCloudClick(subCloud.name, subCloud.id)">
                        <span>{{ subCloud.icon }}</span>
                        <span>{{ subCloud.name }}</span>
                    </div>
                </div>
            </div>
            <div v-else class="cloud-outter-wrapper" :class="[cloud.cloudClass, cloudType ? cloudTypeMap[cloudType] : 'cloud-type--info']">
                <div class="cloud-inner-wrapper" :class="{ 'cursor-pointer': enableCloudClick }" @click="handleCloudClick(cloud.name, cloud.id)">
                    <span>{{ cloud.icon }}</span>
                    <span>{{ cloud.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        clouds: {type: Array},
        cloudType: {type: String},
        cloudGroupClass: {type: String},
        enableCloudClick: false
    },
    data() {
        return {
            cloudTypeMap: {
                info: 'cloud-type--info',
                warning: 'cloud-type--warning',
                danger: 'cloud-type--danger',
                success: 'cloud-type--success',
            }
        }
    },
    methods: {
        handleCloudClick(cloudName, cloudId) {
            const cloud = {
                name: cloudName,
                id: cloudId,
                cloudGroupClass: this.cloudType
            }
            this.$emit('cloudClicked', cloud);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';

.cloud-type {
    &--info {
        background-color: $denim-100;
    }

    &--success {
        background-color: $spinat-100;
    }

    &--warning {
        background-color: $butter-100;
    }

    &--danger {
        background-color: $salmon-100;
    }
}

.cloud-inner-wrapper {
  padding: 4px 12px;
  border-radius: 28px;
  color: $steel-600;
  width: fit-content;
  background-color: #fff;
}

.cloud-outter-wrapper {
  padding: 4px 8px;
  border-radius: 28px;
  width: fit-content;
}

.cloud-multi {
  border-radius: 28px;
  width: fit-content;
}
</style>