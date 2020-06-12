import { MemberPointEntry } from '../types';

const members: MemberPointEntry[] = [
    {
      name: 'Violet',
      points: 3
    },
    {
      name: 'Qi',
      points: 6
    },
    {
      name: 'Denis',
      points: 55
    },
    {
      name: 'Florence',
      points: 25
    },
    {
      name: 'Geralt',
      points: 100 
    },
    {
        name: "Spade",
        points: 90
    },
    {
        name: "Groovy",
        points: 27
    },
    {
        name: 'Geralt',
        points: 120 
    },
  ];

 function mockPromise(): Promise<MemberPointEntry[]> {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve(members)
      }, 1500) 
    })
  }


  export { members, mockPromise }