import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  Container,
  SimpleGrid,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { MotionBox, MotionHeading, fadeInUp, staggerContainer, staggerItem } from '../motion';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageContext';

export default function Certifications() {
  const { t } = useLanguage();

  const certifications = t('certifications.items').map(cert => ({
    ...cert,
    color: cert.category === 'IT' ? 'brand.orange' : '#e09400'
  }));

  return (
    <Box 
      as="section" 
      id="certifications" 
      py={24}
      bg="linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(20,33,61,0.9))"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="15%"
        left="5%"
        width="250px"
        height="250px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(252, 163, 17, 0.06), rgba(252, 163, 17, 0.02))"
        filter="blur(40px)"
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
              <Text as="span" color="brand.orange">{t('certifications.title')}</Text>
              
            </MotionHeading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%" maxW="800px">
              {certifications.map((cert, index) => (
                <MotionBox
                  key={cert.name}
                  {...staggerItem}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Box
                    bg="rgba(255, 255, 255, 0.05)"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(252, 163, 17, 0.2)"
                    borderRadius="2xl"
                    p={8}
                    h="100%"
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      borderColor: 'rgba(252, 163, 17, 0.4)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(252, 163, 17, 0.15)',
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* Background gradient */}
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      width="100px"
                      height="100px"
                      bg={`linear-gradient(45deg, ${cert.color}20, transparent)`}
                      borderRadius="0 2xl 0 100%"
                      zIndex={0}
                    />

                    <VStack align="start" spacing={6} position="relative" zIndex={1}>
                      <HStack spacing={4} align="start">
                        <Icon 
                          as={cert.category === 'IT' ? CheckCircleIcon : StarIcon}
                          color={cert.color}
                          boxSize={8}
                          mt={1}
                        />
                        <VStack align="start" spacing={2} flex={1}>
                          <HStack spacing={3} flexWrap="wrap">
                            <Badge
                              colorScheme="orange"
                              variant="solid"
                              fontSize="xs"
                              px={2}
                              py={1}
                              borderRadius="md"
                              bg={cert.color}
                              color="brand.black"
                              fontWeight="600"
                            >
                              {cert.category}
                            </Badge>
                            
                          </HStack>
                          
                          <Heading 
                            as="h3" 
                            size="lg" 
                            color="brand.white"
                            fontWeight="700"
                            lineHeight="1.2"
                          >
                            {cert.name}
                          </Heading>
                        </VStack>
                      </HStack>

                      

                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>

            <MotionBox
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.8 }}
              textAlign="center"
              maxW="600px"
            >
              <Text 
                fontSize="lg" 
                color="brand.platinum" 
                lineHeight="1.7"
                opacity={0.9}
              >
                {t('certifications.description')}
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
