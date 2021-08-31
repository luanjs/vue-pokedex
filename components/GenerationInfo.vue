<template>
  <div v-if="!isFetching" class="generation-info">
    <div class="generation-info__title">
      <h1>
        {{ generationData.name }}
      </h1>
    </div>

    <div class="generation-info__sub-title">
      <h1>
        Were introduced in this generation:
      </h1>
    </div>

    <div class="generation-info__general-infos">
      <SquareInfo 
        :icon="['fas', 'dragon']"
        title="Pokemons"
        :value="generationData.pokemon_species.length"
      />

      <SquareInfo 
        :icon="['fas', 'running']"
        title="Moves"
        :value="generationData.moves.length"
      />

      <SquareInfo 
        :icon="['fas', 'dice-d20']"
        title="Types"
        :value="generationData.types.length"
      />

      <SquareInfo 
        :icon="['fas', 'fire']"
        title="Abilities"
        :value="generationData.abilities.length"
      />
    </div>

    <div class="generation-info__zoom-container">
      <ZoomContainer />
    </div>
  </div>
</template>

<script>
import GenetarionStore from '@/store/generation/index.js';
import SquareInfo from '@/components/SquareInfo.vue';
import { mapState, mapActions } from 'vuex';
export default {
  store: GenetarionStore,
  components: {
    SquareInfo,
  },
  props: {},
  created() { 
    console.log(this.generationData);
  },
  data() {
    return {};
  },
  async beforeMount() {
    await this.getGenerationInfo();
    console.log(this.generationData);
    this.getPokemons(this.generationData.pokemon_species);
  },
  computed: {
    ...mapState(['generationId', 'generationData', 'isFetching']),
  },
  methods: {
    ...mapActions(['getGenerationInfo', 'getPokemons']),
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';

.generation-info {
  display: block;
  color: #fff;

  &__title {
    @include set-size(100%, 50px);
    @include center-horizontally;
    @include center-vertically;
    font-size: 38px;
    text-transform: capitalize;
  }

  &__sub-title {
    @include set-size(100%, 20px);
    @include center-horizontally;
    @include center-vertically;
    margin-top: 20px;
    text-transform: capitalize;
  }

  &__general-infos {
    @include center-horizontally;
    @include set-size(100%, auto);
  }

  &__zoom-container {
    @include center-horizontally;
  }
}
</style> 