import React from 'react';
import {
  Box,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import { List, BagsButton } from '../';

function BadgeLowerContent() {
  const [isDesktop] = useMediaQuery('(min-width: 1350px)')
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        ml='23px'
        mr='31px'
        mt='40px'
      >
        <Text
          fontSize='20px'
          fontWeight={700}
        >
          About the Lender
        </Text>
        <BagsButton variant={isDesktop ? 'bagsDesktop' : 'bagsNormal'} />
      </Box>
      <Text
        ml='23px'
        mr='31px'
        mt='22px'
        fontSize='16px'
      >
        Fill with Lorem ipsum dhfe ndwufiu  fheh u2en i19h ueu2 0 he ns  asabsqh sw whhdi dw ppwd euy4h  dbdjq jeeoi nd.
      </Text>
      <List />
    </>
  );
}

export default BadgeLowerContent;
