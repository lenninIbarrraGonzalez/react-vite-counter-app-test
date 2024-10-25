import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe de retornar "Hola Fernando"', () => {
         //1. inicializacion
        const name = 'Fernando';
         //2. Estimulo
        const message = getSaludo( name );
        //3 Lo esperado
        expect( message ).toBe(`Hola ${ name }`)

    });

});