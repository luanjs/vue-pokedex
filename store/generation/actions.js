import GenerationService from '@/services/GenerationService.js';

const MUTATE = 'MUTATE';

export default {
  async getGenerationInfo({ state, commit, dispatch }) {
    dispatch('setIsFetching', { isFetching: true });
    const generationData = await GenerationService.getById(state.generationId);

    commit(MUTATE, {
      property: 'generationData',
      with: generationData,
    });

    dispatch('setIsFetching', { isFetching: false });
  },

  setIsFetching({ commit }, payload) {
    const { isFetching } = payload;
    commit(MUTATE, {
      property: 'isFetching',
      with: isFetching,
    });
  },

  async getPokemons({ commit }, pokemonSpecies) {
    const urls = pokemonSpecies.map(poke => {
      const id = poke.url.split('pokemon-species/')[1].split('/')[0];
      const formatedId = id.padStart(3, '0');
      return {
        ...poke,
        id: Number(id),
        img: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedId}.png`,
      }
    });

    console.log(urls)

    commit(MUTATE, {
      property: 'zoomData',
      with: urls,
    });
  }
}