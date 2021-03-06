import React from 'react';

const style = {
  display: 'block',
  stroke: 'black',
  strokeWidth: '1',
};

const TickMarks = (props) => {
  // length is in seconds, zoom is pixels/second
  const { length, zoom } = props;
  const interval = 0.25;

  const smallTickLength = 8;
  const bigTickLength = 12;

  const svgElems = [];
  for (let i = 0; i <= length + 0.05; i += interval) {
    const tickLength = i % 1 ? smallTickLength : bigTickLength;
    const startDistance = i * zoom;

    svgElems.push(<line x1={startDistance.toString()} y1="0" x2={startDistance.toString()} y2={tickLength.toString()} key={`line${i}`} />);

    if (!(i % 1)) {
      svgElems.push(<text fontSize="10" textAnchor="middle" alignmentBaseline="hanging" x={startDistance.toString()} y="18" key={`text${i}`}>{i}</text>);
    }
  }

  return (
    <svg width="100%" height="30px" viewBox={`0 0 ${length * zoom} 30`} style={style}>
      {svgElems}
    </svg>
  );
};

export default TickMarks;
