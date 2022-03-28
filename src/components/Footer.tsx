import { VFC } from 'react';
import NextLink from 'next/link';

import { HStack, Link, Text } from '@chakra-ui/react';

const Footer: VFC = () => {
  return (
    <HStack
      as={'footer'}
      justify={'space-between'}
      p={'6'}
      bgColor={'blue.600'}
      textColor={'gray.200'}
    >
      <Text size='sm'>© 2022 y4shiro</Text>

      <HStack gap={'4'}>
        <NextLink href='#' passHref>
          <Link>About</Link>
        </NextLink>
        <NextLink href='#' passHref>
          <Link>Test</Link>
        </NextLink>
        <NextLink href='#' passHref>
          <Link>Foobar</Link>
        </NextLink>
      </HStack>
    </HStack>
  );
};

export default Footer;
