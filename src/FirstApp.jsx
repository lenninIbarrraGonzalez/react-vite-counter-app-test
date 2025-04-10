import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name, person , taxes}) => {
  // console.log(props);
  // const { first_name, last_name, cc, age} = person;
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ name }</p>
      {/* <p>{ JSON.stringify(persona) }</p> */}
      {/* <p>{ first_name }</p>
      <p>{ last_name }</p> */}
      {/* <p>{ taxes }</p> */}
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  taxes: PropTypes.number
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtítulo',
  title: 'No hay título',
  taxes: 0
}
