import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme,
} from '@chakra-ui/react';

import { Badge, BadgeUpperContent, BadgeLowerContent } from './components';

const theme = extendTheme({
  colors: {
    purple: '#7B5BE4',
    border: '#868686',
    background: '#ECEAF2'
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display='flex' mt='2' alignItems='center' justifyContent='center' minH="100vh">
        <Badge
          upperContent={<BadgeUpperContent />}
          lowerContent={<BadgeLowerContent />}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
