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
      'square--selected': selected.value
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
  width:100%;
  height: 100%;
  max-width:150px;
  min-height:100px;
  cursor: pointer;
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
.square--selected {
  background-color: red;
}

</style>