
describe('Pruebas en <DemoComponent />', () => {
    
    test('Esta prueba no debe de fallar', () => {
    
        // 1. inicialización
        const message1 = 'Hola Mundo';

        // const message1 = 'Hola Mundo  '; no pasa la prueba
    
        // 2. estímulo
        const message2 = message1.trim();
        
        // 3. Observar el comportamiento... esperado
        //toBe significa que sea igual
        expect( message1 ).toBe( message2 );
    });
    
});