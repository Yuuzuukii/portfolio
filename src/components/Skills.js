import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Container,
  SimpleGrid,
  Circle,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { MotionBox, MotionHeading, fadeInUp, staggerContainer, staggerItem } from '../motion';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t('skills.categories.プログラミング言語'),
      color: 'brand.orange',
      skills: ['Python', 'JavaScript', 'TypeScript']
    },
    {
      category: t('skills.categories.フロントエンド'),
      color: '#e09400',
      skills: ['React', 'Next.js']
    },
    {
      category: t('skills.categories.バックエンド・DB'),
      color: 'brand.platinum',
      skills: ['Node.js', 'NestJS', 'MySQL', 'SQLite', 'Prisma']
    },
    {
      category: t('skills.categories.ツール・その他'),
      color: 'brand.oxfordBlue',
      skills: ['GitHub', 'Docker']
    }
  ];

  return (
    <Box 
      as="section" 
      id="skills" 
      py={24}
      bg="linear-gradient(to bottom, rgba(20,33,61,0.9), rgba(0,0,0,0.95))"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="20%"
        right="-5%"
        width="300px"
        height="300px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(252, 163, 17, 0.08), rgba(252, 163, 17, 0.03))"
        filter="blur(50px)"
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
              <Text as="span" color="brand.orange">{t('skills.title')}</Text>
              <Text as="span" ml={3}>{t('skills.subtitle')}</Text>
            </MotionHeading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
              {skillCategories.map((category, categoryIndex) => (
                <MotionBox
                  key={category.category}
                  {...staggerItem}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                  bg="rgba(255, 255, 255, 0.05)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(252, 163, 17, 0.1)"
                  borderRadius="2xl"
                  p={8}
                  _hover={{
                    borderColor: 'rgba(252, 163, 17, 0.3)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(252, 163, 17, 0.15)',
                  }}
                  sx={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  <VStack spacing={6} align="start">
                    <HStack spacing={3}>
                      <Circle size="12px" bg={category.color} />
                      <Heading as="h3" size="lg" color="brand.white" fontWeight="700">
                        {category.category}
                      </Heading>
                    </HStack>

                    <VStack spacing={4} w="100%">
                      <Wrap spacing={3} justify="start">
                        {category.skills.map((skill, skillIndex) => (
                          <WrapItem key={skill}>
                            <Tag
                              size="lg"
                              borderRadius="full"
                              bg="rgba(255, 255, 255, 0.1)"
                              color="brand.white"
                              border="1px solid"
                              borderColor="rgba(252, 163, 17, 0.2)"
                              _hover={{
                                bg: "rgba(252, 163, 17, 0.1)",
                                borderColor: "rgba(252, 163, 17, 0.4)",
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 12px rgba(252, 163, 17, 0.2)",
                              }}
                              transition="all 0.3s ease"
                              py={2}
                              px={4}
                            >
                              <TagLabel fontWeight="600">{skill}</TagLabel>
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </VStack>
                  </VStack>
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
                {t('skills.description')}
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
