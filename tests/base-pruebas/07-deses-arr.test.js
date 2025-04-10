import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';


describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un número', () => {
         //1. inicializacion
        const [ letters, numbers ] = retornaArreglo();

        //evaluando que la información llegue correctamente
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //evaluando que typo de dato sea correcto
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        //evalua que llegue cualquier estring 
        expect( letters ).toEqual( expect.any(String) );

    });


});