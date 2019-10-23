<<<<<<< HEAD
import Faker from 'faker';

import { NUM_OF_PRODUCTS } from './constants';

const fakeData = [];

for (let i = 0; i < NUM_OF_PRODUCTS; i++) {
    fakeData.push({
        name: `item-${Faker.lorem.word()}`,
        id: i,
        weight: `${Faker.random.number(1)}.${Faker.random.number(1)}g`  // change this soon
    })
}


export default fakeData; 
=======
export default [
    {
        name :'test' , 
        id :1 ,
        weight :1.3
    },
    {
        name :'test2' , 
        id :2 ,
        weight :1.3
    },{
        name :'test3' , 
        id :3 ,
        weight :1.3
    },{
        name :'test4' , 
        id :4 ,
        weight :1.3
    },    
]
>>>>>>> origin/master
