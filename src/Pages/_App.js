import PropTypes from 'prop-types';
import React from 'react';

const App = ({ Component }) => {
  return (
    <>
    <Component />

    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
