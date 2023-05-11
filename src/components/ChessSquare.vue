<template>
  <div 
    :class="styles"
    @click="handleSquareclick"
  >
    <div class="square__value">
        {{ square.xAxis }} - {{ square.yAxis }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from 'vue';
import { Tile } from '../interfaces/Tile';

export default defineComponent({
  name: 'ChessSquare',

  props: {
    square: {
      type: Object as PropType<Tile>,
      required: true,
    }
  },

  setup(props, { emit }) {
    const selected = ref(false);
    const styles = computed(() => ({
      'square': true,
      [`square--${props.square.color}`]: true,
      'highlight': selected.value
    }));
    const handleSquareclick = () => {
      selected.value = true;
      emit('square-clicked', props.square)
    }
    return {
      styles,
      selected,
      handleSquareclick,
    }
  }

});
</script>

<style scoped>
.square {
  aspect-ratio:  1/1;
  width:100%;
  cursor: pointer;
}
.square--white {
  background-color: #f0d9b5;
}
.square--black {
  background-color: #b58863;
}
.square--white.highlight {
  background-color: #fff6e7;
}
.square--black.highlight {
  background-color: #d4a076;
}

</style>