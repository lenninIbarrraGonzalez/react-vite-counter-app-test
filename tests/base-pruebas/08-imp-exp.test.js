import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    

    test('getHeroeById debe de retornar un héroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById( id );
        //console.log(hero);
        expect( hero ).toEqual(
            {   id: 1, 
                name: 'Batman', 
                owner: 'DC' 
            }
        );
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        
        const id = 100;
        const hero = getHeroeById( id );
        //console.log(hero);
        //expect(hero).toBe(undefined);
        //puedo utilizar la forma corta para probar que es falso
        expect(hero).toBeFalsy();

    });


    // Tarea:
    test('getHeroesByOwner debe de regresar heroes de DC', () => {
         //1.inicializando
        const owner = 'DC';
        //2.Estimulando
        const heroes2 = getHeroesByOwner( owner );
         //console.log(heroes);
        //3.Observar el comportamiento
        expect(heroes2.length).toBe(3);
        //probando de forma flexible con una data de pruebas
        expect( heroes2 ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        
        //heroes es la data de prueba
        expect( heroes2 ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )


    });

    test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
         //1.inicializando 
        const owner = 'Marvel';
        //2.Estimulando
        const heroes = getHeroesByOwner( owner );
        //Observando el comportamiento
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
        

    });
    
});


