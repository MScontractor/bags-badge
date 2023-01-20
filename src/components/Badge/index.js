import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

function Badge({ upperContent, lowerContent }) {
  return (
    <Box
      borderWidth='2px'
      borderRadius='12px'
      borderColor='border'
      w='432px'
      position='absolute'
    >
      <Box
        borderWidth='2px'
        borderRadius='12px'
        borderColor='border'
        w='432px'
        position='relative'
        top='-2px'
        left='-2px'
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
      >
        {upperContent}
      </Box>
      {lowerContent}
    </Box>
  );
}

export default Badge;
