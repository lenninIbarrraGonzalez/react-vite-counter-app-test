import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
            
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                //funcion que mando a llamar cuando se termina de ejecutar el codigo
                done();
            });
        
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        //1.inicializando, el id 100 no existe
        const id = 100;
        //2. Estimulando y viendo el comportamiento
        getHeroeByIdAsync( id )
        .then( hero => {
            expect( hero ).toBeFalsy();
            done();
        })
        .catch( error => {
                //console.log(error);
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)
                //funcion que mando a llamar cuando se termina de ejecutar el codigo
                done();
            });
        
    });
});