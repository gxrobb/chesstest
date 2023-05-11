<template>
  <div class="board">
    <div class="board__grid">
      <div v-for="square in board" :key="square">
        <div :class="`square square--${square.color}`">
          <div class="piece">
            <div class="piece__image">
              {{ square.xAxis }} - {{ square.yAxis }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TILES } from '../constants/TilesJson';

export default defineComponent({
  name: 'ChessBoard',
  setup() {
    const clickedSquare = ref([]);
    const board = ref([
      ...TILES
    ]);
    return {
      board,
      clickedSquare,
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
.square {
  width:100%;
  height: 100%;
  max-width:150px;
  min-height:100px;
}
.square--white {
  background-color: #f0d9b5;
}
.square--black {
  background-color: #b58863;
}
.square:before {
  content: "";
  display: block;
  height: 0;
  width: 0;
  padding-bottom: calc(9/16 * 100%);
}

</style>