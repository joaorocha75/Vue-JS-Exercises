<script>
import { useDisneyStore } from '../stores/counter.js';
export default {
    data() {
        return {
            disneyStore: useDisneyStore(),
            search: '',
        };
    },
    created() {
        try {
            this.disneyStore.fetchCharacters();
        } catch (error) {
            alert(error.message);
        }
    },
    methods: {
        verMais(character) {
            this.$router.push({ name: 'detalhes', params: { id: character._id } });
        },
        paginaDisney(character) {
            window.open(character.sourceUrl, '_blank');
        },
        //filtra por nome
        filterByName() {
          this.disneyStore.filterByName(this.search);
        },
    },
    computed: {
    filteredCharacters() {
      const searchTerm = this.search.toLowerCase();
      return this.disneyStore.getCharacters.filter(character =>
        character.name.toLowerCase().includes(searchTerm)
      );
    },
  },
};
</script>

<template>
  <div>
    <h1 class="text-center">Disney Characters</h1>
    <v-text-field
      v-model="search"
      label="Pesquisar"
      outlined
      dense
      @input="filterByName"
    ></v-text-field>
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="character in disneyStore.getCharacters"
          :key="character.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="1"
        >
          <v-card class="character-card" :hover="true">
            <v-img :src="character.imageUrl" :alt="character.name"></v-img>
            <v-card-title class="text-h6">{{ character.name }}</v-card-title>
            <v-card-subtitle>
              Nº de curtas-metragens: {{ character.shortFilms.length }}
            </v-card-subtitle>
            <v-card-subtitle>
              Nº de Programas de TV: {{ character.tvShows.length }}
            </v-card-subtitle>
            <v-card-subtitle>
              Nº de Jogos: {{ character.videoGames.length }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn @click="verMais(character)" color="primary">Ver Mais</v-btn>
              <v-btn @click="paginaDisney(character)" color="primary">Página da Disney</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.character-card {
  transition: transform 0.3s ease;
}

.character-card:hover {
  transform: scale(1.05);
}
</style>
