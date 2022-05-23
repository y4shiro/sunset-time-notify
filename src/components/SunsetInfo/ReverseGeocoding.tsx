import React, { useState, VFC } from 'react';
import axios from 'axios';
// @ts-ignore
import axiosJsonpAdapter from 'axios-jsonp';

import { Button, HStack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

const ReverseGeocoding: VFC = () => {
  const [placeName, setPlaceName] = useState('');
  const { latitude, longitude } = useCurrentPosition();

  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || '';
  const yahooClientID = process.env.NEXT_PUBLIC_YAHOO_CLIENT_ID || '';

  const getPlaceName = () => {
    const fetchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxAccessToken}&language=ja&types=country,region,locality,place`;
    fetch(fetchUrl, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const address = data.features[0].place_name;
        setPlaceName(address);
      });
  };

  const getPlaceNameYahoo = () => {
    const fetchUrl = `https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder?`;
    axios
      .get(fetchUrl, {
        adapter: axiosJsonpAdapter,
        params: {
          appid: yahooClientID,
          lat: latitude,
          lon: longitude,
          output: 'json',
        },
      })
      .then((res) => {
        const data = res.data.Feature[0].Property;
        console.log(data);
        const country = data.Country['Name'];
        const address = data.Address;
        setPlaceName(`${country}, ${address}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <HStack
      w='full'
      p='4'
      gap='2'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      bgColor='white'
    >
      <FaClock fontSize='24' />
      <HStack w='full' bgColor='blue.100' justify='space-between'>
        <Text fontSize={{ base: 16, md: 20 }}>{placeName}</Text>
        <HStack>
          <Button onClick={getPlaceName}>Mapbox</Button>
          <Button onClick={getPlaceNameYahoo}>Yahoo</Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export { ReverseGeocoding };
