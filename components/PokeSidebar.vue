<template>
  <div class="poke-sidebar">
    <ul>
      <li>1 Geração</li>
      <li>2 Geração</li>
      <li>3 Geração</li>
      <li>4 Geração</li>
      <li>5 Geração</li>
      <li>6 Geração</li>
      <li>7 Geração</li>
      <li>8 Geração</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  }
</script>

<style lang="scss" scoped>
@import "../scss/_mixins.scss";

.poke-sidebar {
  @include set-size(100px, 100vh);
  position: absolute;
  background-color: #212121;

  ul {
    color: white;

    li {
      @include set-size(100px, 100px);
    }
  }
}
</style>