<template>
  <div class="board">
    {{ moveHistory}}
    <div class="board__grid">
      <chess-square 
        v-for="square in board" 
        :key="square" :square="square" 
        @square-clicked="handleAddToClickedArray"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TILES } from '../constants/TilesJson';
import { Tile } from '../interfaces/Tile';
import ChessSquare from './ChessSquare.vue';

export default defineComponent({
  name: 'ChessBoard',

  components: {
    ChessSquare
  },

  setup() {

    // data
    const moveHistory = ref([]);
    const board = ref([ ...TILES ]);
    const count = ref(0);

    // methods
    const handleAddToClickedArray = (square: Tile) => {
      moveHistory.value.push({ ...square, count: count.value++ });
    };

    return {
      board,
      count,
      moveHistory,
      handleAddToClickedArray,
    }
  },

});
</script>

<style scoped>
/* // todo scale breakpoints */
.board__grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 0;
  max-width:1200px;
  margin: 0 auto;
}
</style>