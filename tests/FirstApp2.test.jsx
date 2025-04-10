import { getByTestId, render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

//Esta es la fomra como se deben hacer la pruebas
describe('Pruebas en <FirstApp2 />', () => {
    const title    = 'Este es mi titulo';
    const subTitle = 'Subtitlo enviado desde las props'

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Este es mi titulo"', () => {
        render(<FirstApp title={title}/>);
        // para ver el objeto
        // screen.debug();
        expect(screen.getAllByText(title)).toBeTruthy();
        // para verificar que no contenga el texto
        // expect(screen.getAllByText(title)).not.toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp
            title={title}
            subTitle={subTitle}
        />);
        expect(screen.getAllByText(subTitle).length).toBe(1);
    });
});