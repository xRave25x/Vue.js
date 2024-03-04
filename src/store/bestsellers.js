import { v4 as uuidv4 } from 'uuid';
const bestsellers = {
    state: {
        bestsellers: [
            {
              id: uuidv4(),
              name: 'Solimo Coffee Beans 2kg',
              price: 10.73,
              image: 'coffee-1.jpg'
            },
            {
              id: uuidv4(),
              name: 'Presto Coffee Beans 1kg',
              price: 15.99,
              image: 'coffee-2.jpg'
            },
            {
              id: uuidv4(),
              name: 'AROMISTICO Coffee 1kg',
              price: 6.99,
              image: 'coffee-3.jpg'
            },
          ],
    },
    getters: {
        getBestsellers(state) {
            return state.bestsellers
        }
    }
}

export default bestsellers