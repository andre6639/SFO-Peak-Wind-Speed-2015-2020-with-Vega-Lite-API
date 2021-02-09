import vl from 'vega-lite-api';
export const viz = vl
	.markCircle({  
    size: 650, 
    opacity: .10,
  })
  .encode(
    vl.x().fieldT('DATE'),
    vl.y().fieldQ('DailyPeakWindSpeed').scale({ zero: false }),
    vl.tooltip().fieldN('DailyPeakWindSpeed')
  );

// .scale({ zero: false }),