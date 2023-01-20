import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';

const list = ['Lender Benefit', 'Lender Benefit', 'Lender Benefit'];

function List() {
  return (
    <Box
      mt='26px'
      mb='42px'
      ml='23px'
    >
      {
        list.map(
          (el) => (
            <Box
              mb='20px'
              backgroundColor='background'
              w='311px'
              borderRadius='24px'
              pt='4px'
              pl='17px'
              pb='5px'
            >
              <Text
                fontSize='16px'
                fontWeight={700}
                color='purple'
                lineHeight='21.79px'
              >
                {el}
              </Text>
            </Box>
          )
        )
      }
    </Box>
  );
}

export default List;
