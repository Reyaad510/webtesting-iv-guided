const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('the hobbits model', () => {


    describe('insert()', () => {

        afterEach( async () => {
           await db('hobbits').truncate();
        })
        it('should insert hobbits into the db', async () => {
          await Hobbits.insert({ name: 'Sam' });
          await Hobbits.insert({ name: 'Frodo' });

          // confirm with knex
          const hobbits = await db('hobbits');

          expect(hobbits).toHaveLength(2);
          expect(hobbits[0].name).toBe('Sam');
        });

        it('should return the new hobbit on insert', async () => {
          const hobbit = await Hobbits.insert({ name: 'Sam' });
          
          expect(hobbit).toEqual({ id: 1, name: 'Sam' });
        });
    });

    describe('findById()', () => {
        
        afterEach( async () => {
            await db('hobbits').truncate();
         })
        it('finds a hobbit by id', async () => {
          await db('hobbits').insert([
              { name: 'Sam' },
              { name: 'Frodo' }
          ]);
          const hobbit = await Hobbits.findById(2);

          expect(hobbit.name).toBe('Frodo');
        });

        it('return undefined on invalid id', async () => {
            const hobbit = await Hobbits.findById(2);

            expect(hobbit).toBeUndefined();
        })
    });
});