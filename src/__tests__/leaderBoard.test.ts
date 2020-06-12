
import {
  Leader,
} from '../types';

import {
    leaderBoard
} from '../test1/leaderBoard';

import { members } from '../test2/membersData'

describe('Test One', () => {
  it('Case 1', () => {
    const [l1, l2, l3] = leaderBoard(memberSet1, 3);

    const e1 = { name: 'Violet', total: 25 };
    const e2 = { name: 'Qi', total: 20 };
    const e3 = { name: 'Denis', total: 10 };

    expect(fmtMember(l1)).toBe(fmtMember(e1));
    expect(fmtMember(l2)).toBe(fmtMember(e2));
    expect(fmtMember(l3)).toBe(fmtMember(e3));
  })

  it('Case 2', () => {
    const [l1, l2, l3, l4] = leaderBoard(memberSet2, 4);

    const e1 = { name: 'Florence', total: 250 };
    const e2 = { name: 'Violet', total: 25 };
    const e3 = { name: 'Qi', total: 20 };
    const e4 = { name: 'Denis', total: 10 };

    expect(fmtMember(l1)).toBe(fmtMember(e1));
    expect(fmtMember(l2)).toBe(fmtMember(e2));
    expect(fmtMember(l3)).toBe(fmtMember(e3));
    expect(fmtMember(l4)).toBe(fmtMember(e4));
  })
  it('Case 3', () => {
    const [l1, l2, l3, l4] = leaderBoard(memberSet3, 4);

    const e1 = { name: 'Violet', total: 5 };
    const e2 = undefined;
    const e3 = undefined;
    const e4 = undefined;

    expect(fmtMember(l1)).toBe(fmtMember(e1));
    expect(fmtMember(l2)).toBe(fmtMember(e2));
    expect(fmtMember(l3)).toBe(fmtMember(e3));
    expect(fmtMember(l4)).toBe(fmtMember(e4));

  })
  it('Case 4', () => {
    const [l1, l2, l3, l4] = leaderBoard(memberSet4, 4);

    const e1 = { name: 'Violet', total: 20 };
    const e2 = { name: 'Qi', total: 15 };
    const e3 = { name: 'Denis', total: 10 };
    const e4 = { name: 'Florence', total: 5 };

    expect(fmtMember(l1)).toBe(fmtMember(e1));
    expect(fmtMember(l2)).toBe(fmtMember(e2));
    expect(fmtMember(l3)).toBe(fmtMember(e3));
    expect(fmtMember(l4)).toBe(fmtMember(e4));
  })
  it('Case 5', () => {
    const [l1, l2, l3, l4] = leaderBoard(memberSet5, 4);

    const e1 = { name: 'Violet', total: 5 };
    const e2 = { name: 'Qi', total: 5 };
    const e3 = { name: 'Denis', total: 5 };
    const e4 = { name: 'Florence', total: 5 };

    expect(fmtMember(l1)).toBe(fmtMember(e1));
    expect(fmtMember(l2)).toBe(fmtMember(e2));
    expect(fmtMember(l3)).toBe(fmtMember(e3));
    expect(fmtMember(l4)).toBe(fmtMember(e4));
  })
  it('Case 6', () => {
    const [l1,l2,l3, l4] = leaderBoard(members, 4);
    const e1 = { name: 'Geralt', total: 220 }
    const e2 = { name: 'Spade', total: 90 }
    const e3 = { name: 'Denis', total: 55 }
    const e4 = { name: 'Groovy', total: 27 }

    expect(fmtMember(l1)).toBe(fmtMember(e1));
    expect(fmtMember(l2)).toBe(fmtMember(e2));
    expect(fmtMember(l3)).toBe(fmtMember(e3));
    expect(fmtMember(l4)).toBe(fmtMember(e4));
  })
})

const fmtMember = (l?: Leader): string => {
  return l ? `Name: ${l.name} Total: ${l.total}` : 'undefined';
}

const memberSet1 = [
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Denis',
    points: 5
  },
  {
    name: 'Denis',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Florence',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
];

const memberSet2 = [
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Denis',
    points: 5
  },
  {
    name: 'Denis',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Florence',
    points: 250
  },
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Violet',
    points: 5
  },
];

const memberSet3 = [
  {
    name: 'Violet',
    points: 5
  },
];

const memberSet4 = [
  {
    name: 'Violet',
    points: 20
  },
  {
    name: 'Qi',
    points: 15
  },
  {
    name: 'Denis',
    points: 10
  },
  {
    name: 'Florence',
    points: 5
  },
];

const memberSet5 = [
  {
    name: 'Violet',
    points: 5
  },
  {
    name: 'Qi',
    points: 5
  },
  {
    name: 'Denis',
    points: 5
  },
  {
    name: 'Florence',
    points: 5
  },
];


