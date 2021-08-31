import axios from 'axios';

class GenerationService {
  static path = 'https://pokeapi.co/api/v2/generation/';

  static async getById(id) {
    const { data } = await axios.get(`${GenerationService.path}${id}`);
    return data;
  }
}

export default GenerationService;