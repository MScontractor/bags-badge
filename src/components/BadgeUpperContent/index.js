import React from 'react';
import {
  Text,
  Divider,
} from '@chakra-ui/react';

import { BadgeAdornment, LocationIcon } from '../';

function BadgeUpperContent() {
  return (
    <>
        <BadgeAdornment label="Good Fit" />
        <Text
          mt='16px'
          ml='23px'
          fontWeight={700}
          fontSize={['16px',  '20px', '24px']}
        >
          Revenue Based Financing
        </Text>
        <Text
          fontSize='16px'
          fontWeight={600}
          mt='7px'
          ml='23px'
        >
          By Lendistry
        </Text>
        <Text
          display='flex'
          alignItems='center'
          fontSize='16px'
          fontWeight={600}
          mt='9px'
          ml='23px'
        >
          <LocationIcon />
          <Text ml='8px'>Location</Text>
        </Text>
        <Text
          display='flex'
          fontSize='14px'
          fontWeight={600}
          mt='11px'
          ml='23px'
          mb='21px'
        >
          Get Funded in<Text fontWeight={700}>&nbsp;12 days.</Text>
        </Text>
        <Divider borderBottomWidth='2px' borderColor='border' opacity='1' />
        <Text
          fontSize='22px'
          fontWeight={700}
          mt='13px'
          ml='23px'
          mb='14px'
          color='#7B5BE4'
        >
          $10,000 - $1,000,000
        </Text>
    </>
  );
}

export default BadgeUpperContent;
