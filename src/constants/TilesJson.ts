import { Tile } from '../interfaces/Tile';

const X_AXIS_VALUES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const TILES: Tile[] = [...Array(8)].flatMap((_, yAxis) =>
  X_AXIS_VALUES.map((xAxis, index) => ({
    xAxis,
    yAxis: yAxis + 1,
    color: (yAxis + index) % 2 === 0 ? 'white' : 'black'
  }))
);