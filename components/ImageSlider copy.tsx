import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import one from '../public/icons/one.jpeg'
import two from '../public/icons/two.jpeg'
import three from '../public/icons/three.jpeg'
import four from '../public/icons/one.jpeg'
import imageLoader from '../imageLoader';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  );
}

const data = [
    {
        "id": 1,
        "url": one
    },
    {
        "id": 2,
        "url": two
    },
    {
        "id": 3,
        "url": three
    },
    {
        "id": 4,
        "url": four
    },
];

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  );
}
export default function ImageSlider() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box width='910px' itemId={item.id} key={item.id} overflow='hidden' p='1'>
          <Image placeholder="blur" loader={imageLoader} src={item.url} width={1000} height={500} alt="Image Scroll"  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </Box>
      ))}
    </ScrollMenu>
  );
}