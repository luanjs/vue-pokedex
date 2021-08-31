<template>
  <div class="poke-container">
    <GenerationInfo />
  </div>
</template>

<script>
import GenetarionInfo from "@/components/GenerationInfo.vue";

export default {
  components: {
    GenetarionInfo,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../scss/_mixins.scss";

.poke-container {
  @include set-size(100%, auto);
  background-color: #ff8268;
  padding: 20px 20px 20px 20px;
}
</style>