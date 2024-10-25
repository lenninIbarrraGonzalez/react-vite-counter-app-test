import { getByTestId, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {
    
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Este es mi titulo';
    //     const {container} = render(<FirstApp title={title}/>)
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un h1', () => {
        //1.preparacion
        const title = 'Este es mi titulo';
        //2.Estimulo
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        //3. Obervar comportamiento
        //verifico que exista el title
        expect(getByText(title)).toBeTruthy();
        //busco el h1 en el Dom
        const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title)
        // expect(h1.innerHTML).toContain(title);
        // expect(getByTestId('test-title')).toBeTruthy();
        //verifica que contenga el title
        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('debe mostrar un subtitulo', () => {
        //1 preparacion
        const subtitle = "No hay subtítulo";
        //2.estimulo
        const {queryAllByText} = render(
            <FirstApp 
                title='Este es mi titulo'
                subTitle={subtitle}
            />
        );
        //3. observo el comportamiento
        //prueba que solo exista un elemento
        // expect(getByText(subtitle)).toBeTruthy();
        // pruebo que existan dos elemento de subtitulo
        expect(queryAllByText(subtitle).length).toBe(2)

    })
});