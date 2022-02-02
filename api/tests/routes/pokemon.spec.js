/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  nombre: 'bulbasaur',
  id: '1'
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );
  });
});

beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
    describe('POST /pokemons', function () {
        it('crea un Pokemon en la base de datos', function () {
            return agent.post('/pokemons').send({
                nombre: "gokuuuu",
                tipo: [
                    {

                      id: 9779,
                        name: "fire"

                    }
                ],
                id: 1323131,
                vida: 45,
                fuerza: 49,
                defensa: 49,
                velocidad: 45,
                altura: 7,
                peso: 69,
                img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg"
            }).then(() => {
                return Pokemon.findOne({
                    where: {
                        nombre: 'gokuuuu'
                    }
                });
            }).then(pokemon => {
                expect(pokemon).to.exist;
            });
        });
    })

   

