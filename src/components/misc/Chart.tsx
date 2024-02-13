import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { events } from '../events/Events';

const verticalMargin = 10;

export type BarsProps = {
    width: number;
    height: number;
    events?: Boolean;
};

export default function Chart({ width, height, events = false }: BarsProps) {
    const xMax = width;
    const yMax = height - verticalMargin;

    const xScale = useMemo(
        () =>
          scaleBand<string>({
            range: [0, xMax],
            round: true,
            domain: ["Going", "Not Going"],
            padding: 0.4,
          }),
        [xMax],
      );
      const yScale = useMemo(
        () =>
          scaleLinear<number>({
            range: [yMax, 0],
            round: true,
            domain: [0, Math.max(going, notgoing)],
          }),
        [yMax],
      );
    
      return width < 10 ? null : (
        <svg width={width} height={height}>
          <rect width={width} height={height} fill="url(#teal)" rx={14} />
          <Group top={verticalMargin / 2}>
            {data.map((d) => {
              const going = d.going;
              const notgoing = d.notgoing;
              const barWidth = xScale.bandwidth();
              const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
              const barX = xScale(letter);
              const barY = yMax - barHeight;
              return (
                <Bar
                  key={`bar-${letter}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="rgba(23, 233, 217, .5)"
                  onClick={() => {
                    if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
                  }}
                />
              );
            })}
          </Group>
        </svg>
      );
}