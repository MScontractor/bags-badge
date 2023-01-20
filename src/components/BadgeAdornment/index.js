import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';

function BadgeAdornment({ label }) {
  return (
    <Box
      backgroundColor='purple'
      borderRadius='6px'
      w="121px"
      textAlign='center'
      position='absolute'
      left='287px'
      top='-12px'
    >
      <Text
        color='white'
        fontSize='14px'
        fontWeight={600}
      >
        {label}
      </Text>
    </Box>
  );
}

export default BadgeAdornment;
