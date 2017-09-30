const data = [0, 14, 35, 56, 67, 99, 122, 150, 160, 233, 300, 322, 360];
const curves = [d3.curveCardinal, d3.curveBasis, d3.curveStep, d3.curveNatural];

const height = 400;
const width = 1000;

const svg = d3.select('body').append('svg').attr('width', '100%').attr('height', '100%');
// 0 <=> height and 360 <=> 0 
const y = d3.scaleLinear().domain([0, Math.max(...data)]).range([height, 0]);

curves.map((curve, index) => {

  const area = d3.area()
    .x((d, i) => i * 20)
    .y0(height)
    .y1((d, i) => y(d))
    .curve(curve);

  const group = svg.append('g').attr('transform', 'translate(' + index * 250 + ',0)');

  group.append('path')
    .attr('stroke', 'pink')
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('d', area(data));

  group.selectAll('circle.group')
    .data(data)
    .enter().append('circle')
    .attr('fill', 'red')
    .attr('cx', (d, i) => i * 20)
    .attr('cy', (d, i) => y(d))
    .attr('r', 2);
});
