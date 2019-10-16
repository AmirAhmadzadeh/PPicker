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