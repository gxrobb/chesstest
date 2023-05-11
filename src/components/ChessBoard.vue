<template>
  <div :class="boardCSS">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TILES } from '../constants/TilesJson';
import { Tile } from '../interfaces/Tile';
import ChessSquare from './ChessSquare.vue';
import { isMobile } from 'mobile-device-detect';

export default defineComponent({
  name: 'ChessBoard',

  components: {
    ChessSquare
  },

  setup() {

    // data
    const clickHistory = ref<{ count: number }[]>([]);
    const board = ref<Tile[]>([ ...TILES ]);
    const count = ref<number>(0);

    // methods
    const handleAddToClickedArray = (square: Tile) => {
      clickHistory.value.push({ ...square, count: count.value++ });
    };

    //computed
    const boardCSS = isMobile ? 'board board--mobile' : 'board';

    return {
      board,
      count,
      clickHistory,
      isMobile,
      boardCSS,
      handleAddToClickedArray,
    }
  },

});
</script>

<style scoped>

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
.board--mobile {
  grid-template-columns: 1fr;
}

.sidebar {
  width: 200px;
  padding: 20px;
}

.sidebar--mobile{
  width: 100%;
}
</style>