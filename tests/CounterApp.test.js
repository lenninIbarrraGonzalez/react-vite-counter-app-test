import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp>', () => {
    const initialValue = 20;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100}/>);
        //screen.debug();
        expect(screen.getByText(100)).toBeTruthy();
        // probando que el 100 este en un h2
        // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    });

    test('debe de incrementar con el boton +1', () => {
        //1. Inicializacion, renderizo el componente
        render(<CounterApp value={initialValue}/>);
        //2. Estimulo
        fireEvent.click(screen.getByText('+1'));
        //3. Observo el comportamiento
        expect(screen.getByText('21')).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {
        //1.Inicializacion
        render(<CounterApp value={initialValue}/>);
        //Estimulo
        fireEvent.click(screen.getByText('-1'));
        //Observo la respuesta
        expect(screen.getByText('19')).toBeTruthy();
    });

    test('debe funcionar el boto de reset', () => {
        //1. inicializacion
        render(<CounterApp value={initialValue}/>);
        //2. Estimulacion
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //screen.debug();
        // fireEvent.click(screen.getByText('Reset'));
        // otra forma de obtener el boton por arial-label
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
        //3. Observo lo esperado
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});