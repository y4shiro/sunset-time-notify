import React, { VFC } from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

import NextLink from 'next/link';

const Header: VFC = () => {
  return (
    <Box as='nav' display={{ base: 'none', md: 'block' }} p={2} bgColor={'blue.600'} rounded={'md'}>
      <Flex px={4} alignItems={'center'} justify={'space-between'}>
        <NextLink href='#' passHref>
          <Link textColor={'gray.100'} _hover={{ textDecorationLine: 'none' }}>
            <Heading as={'h1'} py={4} size={'lg'}>
              Sunset Time Notify
            </Heading>
          </Link>
        </NextLink>

        <Flex gap={8}>
          <Link href='#' textColor={'gray.100'}>
            <Text>about</Text>
          </Link>
          <Link href='#' textColor={'gray.100'}>
            <Text>menu</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
