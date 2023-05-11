<template>
  <div class="hello">
    <chess-board />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ChessBoard from './ChessBoard.vue';

export default defineComponent({
  name: 'HomeComponent',
  
  components: {
    ChessBoard
  },

  setup() {
    const clickedSquare = ref([])

    return {
      clickedSquare,
    }
  },



});
</script>
