import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe de retornar "Hola Fernando"', () => {
         //1. inicializacion
        const name = 'Fernando';
         //2. Estimulo
        const message = getSaludo( name );
        //3 Observar el comportamiento lo esperado
        //toBe evalua que son iguales
        expect( message ).toBe(`Hola ${ name }`)

    });

    test('getSaludo debe de retornar "Hola Lennin"', () => {
        //1. inicializacion
        const name = 'Lennin';
        //2. Estimulo
        const message = getSaludo( name );
       //3 Observar el comportamiento lo esperado
       //toBe evalua que son iguales
        expect( message ).toBe(`Hola ${ name }`)

    });

    test('debe retornar undefined si no se pasa ningún argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBeUndefined();
    });
    
    test('debe retornar undefined si se pasa una cadena vacía', () => {
        const saludo = getSaludo('');
        expect(saludo).toBeUndefined();
    });

    test('debe retornar undefined si se pasa un número', () => {
        const saludo = getSaludo(123);
        expect(saludo).toBeUndefined();
    });
    
    test('debe retornar undefined si se pasa un objeto', () => {
        const saludo = getSaludo({ nombre: 'Carlos' });
        expect(saludo).toBeUndefined();
    });
    
    test('debe retornar undefined si se pasa un arreglo', () => {
        const saludo = getSaludo(['Carlos']);
        expect(saludo).toBeUndefined();
    });

});