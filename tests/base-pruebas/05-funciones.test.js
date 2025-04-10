import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objecto', () => {
        //1.inicializando
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        //2. estimulo
        const user = getUser();
         //3 observara el comportamiento
         //toEqual sirve para evaluar objetos
        expect( testUser ).toEqual( user );

    });


    test('getUsuarioActivo debe de retornar un objeto', () => {
         //1. inicializacion
        const name = 'Fernando';
         //2. Estimulo
        const user = getUsuarioActivo( name );
        //3. observar el comportamiento
        //toEqual sirve para evaluar objetos
        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});
