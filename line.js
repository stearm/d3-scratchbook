const svg = d3.select('body').append('svg').attr('width', '100%').attr('height', '100%');

const data = [
  {x:10, y:90},
  {x:14, y:86},
  {x:24, y:68},
  {x:56, y:45},
  {x:60, y:21},
  {x:67, y:3}
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
  