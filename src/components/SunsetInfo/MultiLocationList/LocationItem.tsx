import {
  Button,
  Box,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';

import { BiTrash } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { calcSuntime } from '../../../lib/calcSuntime';
import { locationType } from '../../../utils/types';

import { MotionH, MotionV } from './index';

export const LocationItem = (props: locationType & { removeLocation: (id: string) => void }) => {
  const { id, removeLocation } = props;
  const { latitude, longitude, altitude, name } = props.location;
  const { sunrise, sunset } = calcSuntime(new Date(), latitude, longitude, altitude);

  const formattedSunrise = format(sunrise, 'HH:mm:ss');
  const formattedSunset = format(sunset, 'HH:mm:ss');

  return (
    <MotionH
      w='full'
      p='2'
      justify='space-between'
      borderRadius='lg'
      bgColor='white'
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.25 } }}
      exit={{ opacity: 0 }}
    >
      <VStack w='full'>
        <VStack w='full' spacing='0'>
          <HStack w='full' fontSize={{ base: 16, md: 20 }}>
            <Text w='full' fontWeight='bold'>
              {name}
            </Text>
          </HStack>
          <HStack w='full' fontSize={{ base: 11, md: 14 }} color='gray.500'>
            <FaMapMarkerAlt />
            <Text>緯度: {latitude.toFixed(4)}</Text>
            <Text>経度: {longitude.toFixed(4)}</Text>
            <Text>高度: {altitude.toFixed(4)}</Text>
          </HStack>
        </VStack>

        <HStack w='full'>
          <HStack py='1' px='2' borderRadius='md' fontWeight='bold' bgColor='#fcd057'>
            <RiSunFill />
            <Text>{formattedSunrise}</Text>
          </HStack>
          <HStack py='1' px='2' borderRadius='md' fontWeight='bold' color='white' bgColor='#243ea4'>
            <RiMoonClearFill />
            <Text>{formattedSunset}</Text>
          </HStack>
        </HStack>
      </VStack>
      <Box>
        <Popover>
          <PopoverTrigger>
            <IconButton
              w='fit-content'
              borderRadius='full'
              bgColor='unset'
              variant='solid'
              _focus={{ boxShadow: 'none' }}
              icon={<BsThreeDotsVertical />}
              aria-label='More options'
            />
          </PopoverTrigger>
          <PopoverContent w='fit-content' _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <VStack>
                <Button
                  w='128px'
                  variant='ghost'
                  colorScheme='red'
                  leftIcon={<BiTrash />}
                  onClick={() => removeLocation(id)}
                >
                  削除
                </Button>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </MotionH>
  );
};
