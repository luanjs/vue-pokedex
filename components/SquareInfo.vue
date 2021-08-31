<template>
  <div class="square-info">
    <div class="square-info__icon">
      <fa :icon="icon" />
    </div>


    <div class="square-info__value">
      {{ value }}
    </div>

    <div class="square-info__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    icon: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../scss/_mixins.scss";
.square-info {
  margin: 15px;
  display: flex;
  color: black;
  cursor: pointer;
  padding: 20px 10px;
  border-radius: 35px;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  justify-content: space-between;
  @include set-size(140px, 200px);

  &:hover {
    transform: scale(1.05);
  }

  &__icon {
    color: #FDB601;
    font-size: 38px;
  }

  &__title {
    font-size: 25px;
  }

  &__value {
    font-size: 40px;
    font-weight: 800;
  }
}
</style>