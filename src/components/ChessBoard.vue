<template>
  <div class="board">
    <div class="board__grid">
      <chess-square 
        v-for="square in board" 
        :key="square" :square="square" 
        @square-clicked="handleAddToClickedArray"
      />
    </div>
    <div class="sidebar">
      <h2> Click History</h2>
      <div v-for="click in clickHistory" :key="click.count">
        {{ click.count + 1 }}: {{ click.xAxis }} - {{ click.yAxis }}
      </div>
      <button>mobile</button>
      <button>not mobile</button>
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
    const clickHistory = ref([]);
    const board = ref([ ...TILES ]);
    const count = ref(0);

    // methods
    const handleAddToClickedArray = (square: Tile) => {
      clickHistory.value.push({ ...square, count: count.value++ });
    };

    return {
      board,
      count,
      clickHistory,
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
  width: 100%;
  max-width:1000px;
  max-height:1000px
}
.board {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 1fr;
}
.sidebar {
  width: 200px;
  padding: 20px;
}
</style>