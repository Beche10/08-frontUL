import React from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CircularProgressWithLabel = (props) => {
  // Normaliza el valor para asegurarse de que esté entre 0 y 100
  const normalizedValue = Math.min(Math.max(props.value, 0), 100);

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={normalizedValue} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {`${Math.round(normalizedValue)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

// Añadimos PropTypes
CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

// Valor predeterminado
CircularProgressWithLabel.defaultProps = {
  value: 0,
};
