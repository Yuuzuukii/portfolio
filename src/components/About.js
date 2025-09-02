import React from 'react';
import { Box, Flex, Image, Text, VStack, Link, Heading, Container, HStack, Icon } from '@chakra-ui/react';
import { MotionBox, MotionHeading, MotionText, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <Box 
      as="section" 
      id="about" 
      py={24} 
      bg="linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(20,33,61,0.9))"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="10%"
        left="-10%"
        width="400px"
        height="400px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(252, 163, 17, 0.05), rgba(252, 163, 17, 0.02))"
        filter="blur(60px)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionBox {...staggerContainer}>
          <VStack spacing={16} align="center">
            <MotionHeading
              as="h2"
              size="2xl"
              textAlign="center"
              color="brand.white"
              fontWeight="800"
              {...staggerItem}
            >
              <Text as="span" color="brand.orange">{t('about.title')}</Text>
              <Text as="span" ml={3}>{t('about.subtitle')}</Text>
            </MotionHeading>

            <Flex 
              direction={{ base: 'column', lg: 'row' }} 
              align="center" 
              gap={16} 
              w="100%"
              maxW="1000px"
            >
              {/* Profile Image */}
              <MotionBox
                {...fadeInLeft}
                transition={{ delay: 0.2, duration: 0.8 }}
                flex="0 0 auto"
              >
                <Box
                  position="relative"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, brand.orange, #e09400)',
                    zIndex: -1,
                    filter: 'blur(20px)',
                    opacity: 0.7,
                  }}
                >
                  <Image 
                    src="/img/IMG_5329.jpg" 
                    alt="プロフィール写真" 
                    boxSize={{ base: "200px", md: "250px" }}
                    borderRadius="50%" 
                    objectFit="cover"
                    border="4px solid"
                    borderColor="brand.orange"
                    boxShadow="0 10px 40px rgba(252, 163, 17, 0.3)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'scale(1.05)',
                      boxShadow: '0 15px 50px rgba(252, 163, 17, 0.4)',
                    }}
                  />
                </Box>
              </MotionBox>

              {/* Profile Content */}
              <MotionBox
                {...fadeInRight}
                transition={{ delay: 0.4, duration: 0.8 }}
                flex="1"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <VStack align={{ base: 'center', lg: 'start' }} spacing={6}>
                  <Box>
                    <MotionHeading 
                      as="h3" 
                      size="xl" 
                      color="brand.white"
                      fontWeight="700"
                      mb={2}
                      {...staggerItem}
                    >
                      {t('about.name')}
                    </MotionHeading>
                    <Text 
                      fontSize="lg" 
                      color="brand.orange" 
                      fontWeight="600"
                      textTransform="uppercase"
                      letterSpacing="1px"
                    >
                      Information Science Student/ Engineer
                    </Text>
                  </Box>

                  <VStack align={{ base: 'center', lg: 'start' }} spacing={3}>
                    <Text fontSize="md" color="brand.platinum" opacity={0.9}>
                      {t('about.education.university')}
                      <br />
                      {t('about.education.faculty')}
                    </Text>
                    <Text fontSize="md" color="brand.platinum" opacity={0.9}>
                      {t('about.education.lab')}
                    </Text>
                  </VStack>

                  

                  <HStack spacing={6} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                    <Link 
                      href="https://github.com/Yuuzuukii" 
                      isExternal
                      display="flex"
                      alignItems="center"
                      gap={2}
                      color="brand.white"
                      fontWeight="600"
                      fontSize="md"
                      p={3}
                      borderRadius="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(252, 163, 17, 0.2)"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: 'rgba(252, 163, 17, 0.1)',
                        borderColor: 'brand.orange',
                        color: 'brand.orange',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(252, 163, 17, 0.2)',
                      }}
                    >
                      <Image src="/img/git_logo.png" alt="GitHub" boxSize="20px" />
                      GitHub
                      <ExternalLinkIcon boxSize={3} />
                    </Link>
                    
                    <Link 
                      href="https://www.si-lab.org/index-ja.html" 
                      isExternal
                      display="flex"
                      alignItems="center"
                      gap={2}
                      color="brand.white"
                      fontWeight="600"
                      fontSize="md"
                      p={3}
                      borderRadius="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(252, 163, 17, 0.2)"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: 'rgba(252, 163, 17, 0.1)',
                        borderColor: 'brand.orange',
                        color: 'brand.orange',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(252, 163, 17, 0.2)',
                      }}
                    >
                      <Image src="/img/lab.png" alt="Lab" boxSize="20px" />
                      SI Lab
                      <ExternalLinkIcon boxSize={3} />
                    </Link>
                  </HStack>
                </VStack>
              </MotionBox>
            </Flex>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
