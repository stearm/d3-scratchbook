const svg = d3.select('body').append('svg').attr('width', '100%').attr('height', '100%');

const data = [
  {x:10, y:23},
  {x:14, y:27},
  {x:24, y:39},
  {x:56, y:45},
  {x:60, y:67},
  {x:67, y:90}
];

const line = d3.line()
  .x(d => d.x * 2)
  .y(d => d.y * 4)
  .curve(d3.curveCardinal);

// M => move to (first point)
// L => line to
svg.append('path')
  .attr('d', line(data))
  .attr('stroke-width', 3)
  .attr('fill', 'none')
  .attr('stroke', 'brown');
  