<template>
    <div class="content">
         <CloudSidebar ref="cloudSidebar" />
        <div class="cloud-groups-content flex">
            <div class="cloud-group cursor-pointer mt-8" v-for="cloudGroup in cloudGroups" :key="cloudGroup.cloudGroupId">
                <Cloud 
                    :clouds="cloudGroup.clouds" 
                    :cloudType="cloudGroup.cloudGroupType" 
                    :cloudGroupClass="cloudGroup.cloudGroupClass"
                    :enableCloudClick="true"
                    @cloudClicked="openCloudSidebar($event)"/>
            </div>
        </div>
    </div>
</template>

<script>
import Cloud from '@/components/Cloud.vue';
import CloudSidebar from '@/views/CloudSidebar.vue';
import { CLOUD_GROUPS } from "@/mock/clouds";

export default {
    data() {
        return {
            cloudGroups: CLOUD_GROUPS
        }
    },
    components: {
        Cloud,
        CloudSidebar
    },
    methods: {
        openCloudSidebar(cloud) {
            this.$refs.cloudSidebar.open(cloud.id, cloud.name, cloud.cloudGroupClass);
        }
    }
}
</script>

<style lang="scss" scoped>
.cloud-groups-content {
    width: 100%;
    flex-wrap: wrap;
}

.cloud-group {
    min-width: 28vw;
}
</style>