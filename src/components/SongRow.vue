<script setup>
import { ref, toRefs, onMounted } from "vue";
import Heart from "vue-material-design-icons/Heart.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
let isHover = ref(false);
let isTrackTime = ref(null);

const props = defineProps({
  artist: Object,
  index: Number,
  track: Object,
});
const { artist, track, index } = toRefs(props);
</script>
<template>
  <li
    class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="flex items-center w-full py-1.5">
      <div class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
        <Play v-if="true" fillColor="#FFFFFF" :size="25" />
        <Pause v-else fillColor="#FFFFFF" :size="25" />
      </div>
    </div>
  </li>
</template>
