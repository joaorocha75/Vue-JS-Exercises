<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <h1 class="text-center">Detalhes da Personagem</h1>
          <v-card class="character-card-detail">
            <!-- Aqui, você pode verificar se character está definido antes de acessar suas propriedades -->
            <v-img v-if="character" :src="character.imageUrl" :alt="character.name"></v-img>
            <v-card-title class="text-h6" v-if="character">{{ character.name }}</v-card-title>
            <v-card-text v-if="character">
              <div v-if="character.shortFilms && character.shortFilms.length !=0">
                <p>Curtas-Metragens:</p>
                <ul>
                  <p v-for="shortFilm in character.shortFilms" :key="shortFilm">
                    -{{ shortFilm }}
                  </p>
                </ul>
              </div>
              <div v-if="character.tvShows && character.tvShows.length !=0">
                <p><strong>Programas de TV:</strong></p>
                <ul>
                  <p v-for="tvShow in character.tvShows" :key="tvShow">
                    -{{ tvShow }}
                  </p>
                </ul>
              </div>
              <div v-if="character.videoGames && character.videoGames.length !=0">
                <p><strong>Jogos:</strong></p>
                <ul>
                  <p v-for="videoGame in character.videoGames" :key="videoGame">
                    -{{ videoGame }}
                  </p>
                </ul>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="voltar" color="primary">Voltar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import { useDisneyStore } from '../stores/counter.js';

export default {
  data() {
    return {
      disneyStore: useDisneyStore(),
      character: null,
    };
  },
  // faz-me um created que chama o fetchCharcter(id)
    async created() {
        try {
            await this.disneyStore.fetchCharacter(this.$route.params.id);
            this.character = this.disneyStore.getCharacter;
        } catch (error) {
            alert(error.message);
        }
    },
    methods: {
        voltar() {
            this.$router.push({ name: 'home' });
        },
    },
};
</script>