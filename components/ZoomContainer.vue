<template>
  <div class="zoom-container">
    <div class="zoom-container__items" v-if="zoomData">
      <img
        v-for="poke in zoomData"
        :key="poke.id"
        :src="poke.img"
      />
    </div>
  </div>
</template>

<script>
import GenetarionStore from "@/store/generation/index.js";
import { mapState } from "vuex";
export default {
  store: GenetarionStore,
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["zoomData"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../scss/_mixins.scss";

.zoom-container {
  overflow: auto;
  border-radius: 15px;
  background-color: white;
  @include set-size(1000px, 500px);

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      @include set-size(100px, 100px);
    }
  }
}
</style>