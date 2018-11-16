<template>
  <storage-page v-if="is_storage_service_enable" />
  <div v-else>
    <h1>please service enable!</h1>
    <base-button>enable</base-button>
  </div>
</template>
<script>
import storage from "@/lib/storage";
import StoragePage from "@/components/Services/Storage.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  data() {
    return {
      // is_storage_service_enable: storage.getServiceStatus("storage")
      is_storage_service_enable: true
    }
  },
  components: {
    StoragePage,
    BaseButton
  }
}
</script>
