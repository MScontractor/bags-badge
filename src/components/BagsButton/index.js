import React from 'react';
import { Button } from '@chakra-ui/react';

const colorVariants = {
  bagsNormal: 'black',
  bagsDesktop: 'blue',
};

function BagsButton({ variant = 'bagsNormal' }) {
  return (
    <Button
      w='130px'
      color='white'
      fontWeight={700}
      backgroundColor={colorVariants[variant]}
    >
      Learn More
    </Button>
  );
}

export default BagsButton;
