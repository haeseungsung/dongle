
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DataVisual: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = 400;

    svg.selectAll("*").remove();

    const nodes = d3.range(30).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 2,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    const circles = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", "#cbd5e1")
      .attr("opacity", 0.5);

    const links = svg.append("g")
      .selectAll("line")
      .data(d3.range(20).map(() => ({
        source: Math.floor(Math.random() * nodes.length),
        target: Math.floor(Math.random() * nodes.length)
      })))
      .join("line")
      .attr("stroke", "#e2e8f0")
      .attr("stroke-width", 1)
      .attr("opacity", 0.3);

    const timer = d3.timer(() => {
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      circles
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r);

      links
        .attr("x1", d => nodes[d.source].x)
        .attr("y1", d => nodes[d.source].y)
        .attr("x2", d => nodes[d.target].x)
        .attr("y2", d => nodes[d.target].y);
    });

    return () => timer.stop();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[400px] pointer-events-none -z-10">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default DataVisual;
