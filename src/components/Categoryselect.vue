<script setup>
import { ref, toRefs, ToRefs } from "vue";
import uniqolor from "uniqolor";
let randColor = ref("");
randColor.value = uniqolor.random();
const props = defineProps({ category: String, image: String });
const { category } = toRefs(props);
</script>
