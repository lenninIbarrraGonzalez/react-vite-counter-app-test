const newMessage = 'Este es mi titulo',
newNumber = 123,
newArray = [1,2,3,4,5,6,7,8,9],
newBoolean = true,
newObject = {
    first_name:'Lennin',
    last_name: 'Ibarra'
}

const getName = ( name ) => name;

export const FirstAppTwo = ({title, subTitle}) => {
    return (
        <>
            <h1>{ title }</h1>
            <h2>{subTitle}</h2>
            <h3>{newMessage}</h3>
            <h3>{ newNumber }</h3>
            <h3>{ newArray }</h3>
            <h3>{ newBoolean }</h3>
            {/* <h3>{ newObject }</h3> genera un error no se puede renderizar un objeto directamente */}
            <code>{ JSON.stringify(newObject) }</code>
            <h3>{ getName('Valentina') }</h3>
        </>
        
    )
}

