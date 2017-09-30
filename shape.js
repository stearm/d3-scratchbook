const data = [2, 13, 15, 20, 24];
const svg = d3.select('body').append('svg').attr('width', '100%').attr('height', '100%');

// rectangle
svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
  .attr('height', (d, i) => d * 10)
  .attr('width', 70)
  .attr('fill', 'darkred')
  .attr('x', (d, i) => 80 * i)
  .attr('y', (d, i) => 250 - (d * 10));

// circle
let computedX = 400;
svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
  .attr('cx', (d, i) => {
    const cx = computedX;
    computedX += (2 * (d * 2)) + 10;
    return cx + (d * 2);
  })
  .attr('cy', 250)
  .attr('r', (d, i) => d * 2);

// ellipse
computedX = 800;
svg.selectAll('ellipse')
  .data(data)
  .enter().append('ellipse')
  .attr('cx', (d, i) => {
    const cx = computedX;
    computedX += (2 * (d * 3)) + 10;
    return cx + (d * 3);
  })
  .attr('cy', 250)
  .attr('rx', (d, i) => d * 3)
  .attr('ry', (d, i) => d * 2);

// line
let fixedY = 300;
svg.selectAll('line')
  .data(data)
  .enter().append('line')
  .attr('x1', 5)
  .attr('x2', (d, i) => d * 4)
  .attr('y1', (d, i) => fixedY + (i * 10))
  .attr('y2', (d, i) => fixedY + (i * 10));

svg.append('text')
  .attr('x', 5)
  .attr('y', 400)
  .attr('font-size', '70px')
  .attr('stroke-width', '2px')
  .attr('stroke', 'red')
  .attr('fill', 'green')
  .text('one');

fixedY = 550
svg.append('text')
  .selectAll('tspan')
  .data(data)
  .enter().append('tspan')
  .attr('x', 45)
  .attr('y', (d, i) => 500 + (i * 25))
  .attr('font-size', '15px')
  .attr('fill', 'orange')
  .attr('text-anchor', (d, i) => i % 2 === 0 ? 'middle' : 'end')
  .attr('dominant-baseline', (d, i) => i % 2 === 0 ? 'middle' : 'end')
  .text((d) => d);
