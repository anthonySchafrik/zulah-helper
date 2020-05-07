import r1 from '../../assets/rotations/r1/r1f.png';
import r2 from '../../assets/rotations/r2/r2f.png';
import r3 from '../../assets/rotations/r3/r3f.png';
import r4 from '../../assets/rotations/r4/r4f.png';

// rotation 1 phases
import r1one from '../../assets/rotations/r1/one.png';
import r1two from '../../assets/rotations/r1/two.png';
import r1three from '../../assets/rotations/r1/three.png';
import r1four from '../../assets/rotations/r1/four.png';
import r1five from '../../assets/rotations/r1/five.png';
import r1six from '../../assets/rotations/r1/six.png';
import r1seven from '../../assets/rotations/r1/seven.png';
import r1eight from '../../assets/rotations/r1/eight.png';
import r1nine from '../../assets/rotations/r1/nine.png';
import r1ten from '../../assets/rotations/r1/ten.png';

// rotation 2 phases
import r2one from '../../assets/rotations/r2/one.png';
import r2two from '../../assets/rotations/r2/two.png';
import r2three from '../../assets/rotations/r2/three.png';
import r2four from '../../assets/rotations/r2/four.png';
import r2five from '../../assets/rotations/r2/five.png';
import r2six from '../../assets/rotations/r2/six.png';
import r2seven from '../../assets/rotations/r2/seven.png';
import r2eight from '../../assets/rotations/r2/eight.png';
import r2nine from '../../assets/rotations/r2/nine.png';
import r2ten from '../../assets/rotations/r2/ten.png';

// rotation 3 phases
import r3one from '../../assets/rotations/r3/one.png';
import r3two from '../../assets/rotations/r3/two.png';
import r3three from '../../assets/rotations/r3/three.png';
import r3four from '../../assets/rotations/r3/four.png';
import r3five from '../../assets/rotations/r3/five.png';
import r3six from '../../assets/rotations/r3/six.png';
import r3seven from '../../assets/rotations/r3/seven.png';
import r3eight from '../../assets/rotations/r3/eight.png';
import r3nine from '../../assets/rotations/r3/nine.png';
import r3ten from '../../assets/rotations/r3/ten.png';
import r3eleven from '../../assets/rotations/r3/eleven.png';

// rotation 4 phases
import r4one from '../../assets/rotations/r4/one.png';
import r4two from '../../assets/rotations/r4/two.png';
import r4three from '../../assets/rotations/r4/three.png';
import r4four from '../../assets/rotations/r4/four.png';
import r4five from '../../assets/rotations/r4/five.png';
import r4six from '../../assets/rotations/r4/six.png';
import r4seven from '../../assets/rotations/r4/seven.png';
import r4eight from '../../assets/rotations/r4/eight.png';
import r4nine from '../../assets/rotations/r4/nine.png';
import r4ten from '../../assets/rotations/r4/ten.png';
import r4eleven from '../../assets/rotations/r4/eleven.png';
import r4twelve from '../../assets/rotations/r4/twelve.png';

import mageIcon from '../../assets/icons/Protect_from_Magic.png';

interface RotationObject {
  [key: string]: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

export const rotations: RotationObject = {
  1: r1,
  2: r2,
  3: r3,
  4: r4,
};

interface TenPhases {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

interface ElevenPhases extends TenPhases {
  11: string;
}

interface TwelvePhases extends TenPhases {
  12: string;
}

interface phasesObject {
  [key: string]: any;
  r1: object;
  r2: object;
  r3: object;
  r4: object;
}

export const phases: phasesObject = {
  r1: {
    1: r1one,
    2: r1two,
    3: r1three,
    4: r1four,
    5: r1five,
    6: r1six,
    7: r1seven,
    8: r1eight,
    9: r1nine,
    10: r1ten,
  },
  r2: {
    1: r2one,
    2: r2two,
    3: r2three,
    4: r2four,
    5: r2five,
    6: r2six,
    7: r2seven,
    8: r2eight,
    9: r2nine,
    10: r2ten,
  },
  r3: {
    1: r3one,
    2: r3two,
    3: r3three,
    4: r3four,
    5: r3five,
    6: r3six,
    7: r3seven,
    8: r3eight,
    9: r3nine,
    10: r3ten,
    11: r3eleven,
  },
  r4: {
    1: r4one,
    2: r4two,
    3: r4three,
    4: r4four,
    5: r4five,
    6: r4six,
    7: r4seven,
    8: r4eight,
    9: r4nine,
    10: r4ten,
    11: r4eleven,
    12: r4twelve,
  },
};

/* 
  green pray range, gear  mage
  red pray ?, gear  mage
  blue pray with mage, gear range
*/

export const combat = {
  r1: {
    p1: {
      gear: '',
      pray: '',
    },
    p2: {
      gear: '',
      pray: '',
    },
    p3: {
      gear: '',
      pray: '',
    },
    p4: {
      gear: '',
      pray: '',
    },
    p5: {
      gear: '',
      pray: '',
    },
    p6: {
      gear: '',
      pray: '',
    },
    p7: {
      gear: '',
      pray: '',
    },
    p8: {
      gear: '',
      pray: '',
    },
    p9: {
      gear: '',
      pray: '',
    },
    p10: {
      gear: '',
      pray: '',
    },
  },
  r2: {
    p1: {
      gear: '',
      pray: '',
    },
    p2: {
      gear: '',
      pray: '',
    },
    p3: {
      gear: '',
      pray: '',
    },
    p4: {
      gear: '',
      pray: '',
    },
    p5: {
      gear: '',
      pray: '',
    },
    p6: {
      gear: '',
      pray: '',
    },
    p7: {
      gear: '',
      pray: '',
    },
    p8: {
      gear: '',
      pray: '',
    },
    p9: {
      gear: '',
      pray: '',
    },
    p10: {
      gear: '',
      pray: '',
    },
  },
  r3: {
    p1: {
      gear: '',
      pray: '',
    },
    p2: {
      gear: '',
      pray: '',
    },
    p3: {
      gear: '',
      pray: '',
    },
    p4: {
      gear: '',
      pray: '',
    },
    p5: {
      gear: '',
      pray: '',
    },
    p6: {
      gear: '',
      pray: '',
    },
    p7: {
      gear: '',
      pray: '',
    },
    p8: {
      gear: '',
      pray: '',
    },
    p9: {
      gear: '',
      pray: '',
    },
    p10: {
      gear: '',
      pray: '',
    },
    p11: {
      gear: '',
      pray: '',
    },
  },
  r4: {
    p1: {
      gear: '',
      pray: '',
    },
    p2: {
      gear: '',
      pray: '',
    },
    p3: {
      gear: '',
      pray: '',
    },
    p4: {
      gear: '',
      pray: '',
    },
    p5: {
      gear: '',
      pray: '',
    },
    p6: {
      gear: '',
      pray: '',
    },
    p7: {
      gear: '',
      pray: '',
    },
    p8: {
      gear: '',
      pray: '',
    },
    p9: {
      gear: '',
      pray: '',
    },
    p10: {
      gear: '',
      pray: '',
    },
    p11: {
      gear: '',
      pray: '',
    },
    p12: {
      gear: '',
      pray: '',
    },
  },
};
