import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { MotionBox, MotionHeading, MotionText, fadeInUp, fadeInLeft, fadeInRight, floatingAnimation } from '../motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box 
      as="section" 
      minH="100vh" 
      position="relative"
      overflow="hidden"
      bg="linear-gradient(135deg, #000000 0%, #14213d 50%, #1a1a1a 100%)"
    >
      {/* Background decorative elements */}
      <MotionBox
        position="absolute"
        top="20%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(252, 163, 17, 0.1), rgba(252, 163, 17, 0.05))"
        filter="blur(40px)"
        {...floatingAnimation}
        zIndex={1}
      />
      
      <MotionBox
        position="absolute"
        bottom="20%"
        left="5%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(20, 33, 61, 0.3), rgba(20, 33, 61, 0.1))"
        filter="blur(30px)"
        {...floatingAnimation}
        animate={{
          y: [10, -10, 10],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        zIndex={1}
      />

      <Container maxW="container.xl" h="100vh" position="relative" zIndex={2}>
        <Flex align="center" justify="center" h="100%" direction="column">
          <VStack spacing={8} textAlign="center" maxW="800px">
            <MotionHeading
              as="h1"
              size="4xl"
              fontWeight="800"
              lineHeight="1.1"
              color="brand.white"
              {...fadeInUp}
            >
              <Text 
                as="span" 
                display="block" 
                bgGradient="linear(to-r, brand.orange, #e09400)"
                bgClip="text"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              >
                {t('hero.greeting')}
              </Text>
            </MotionHeading>

            <MotionText
              fontSize={{ base: "md", md: "lg" }}
              color="brand.platinum"
              maxW="600px"
              lineHeight="1.6"
              textAlign="center"
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('hero.description')}
            </MotionText>

            <MotionBox {...fadeInUp} transition={{ delay: 0.4, duration: 0.8 }}>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  size="lg"
                  variant="solid"
                  px={8}
                  py={6}
                  fontSize="md"
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 30px rgba(252, 163, 17, 0.4)',
                  }}
                >
                  {t('hero.cta')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  px={8}
                  py={6}
                  fontSize="md"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.contact')}
                </Button>
              </HStack>
            </MotionBox>

            <MotionBox
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.8 }}
              mt={12}
            >
              <VStack spacing={2}>
                <Text fontSize="sm" color="brand.platinum" opacity={0.7}>
                    {t('hero.scroll')}
                </Text>
                <MotionBox
                  as={Button}
                  variant="ghost"
                  size="sm"
                  onClick={scrollToAbout}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  _hover={{
                    bg: 'transparent',
                    color: 'brand.orange',
                  }}
                >
                  <ChevronDownIcon boxSize={6} />
                </MotionBox>
              </VStack>
            </MotionBox>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
