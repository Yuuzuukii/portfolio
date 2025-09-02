import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  VStack,
  Container,
  List,
  ListItem,
  ListIcon,
  HStack,
  Badge,
  Link,
} from "@chakra-ui/react";
import {
  MotionBox,
  MotionHeading,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "../motion";
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useLanguage } from '../context/LanguageContext';

export default function Research() {
  const { t, language } = useLanguage();

  const researchHighlights = t('research.highlights.items');

  return (
    <Box
      as="section"
      id="research"
      py={24}
      bg="linear-gradient(to bottom, rgba(20,33,61,0.9), rgba(0,0,0,0.95))"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        bottom="10%"
        right="-10%"
        width="400px"
        height="400px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(252, 163, 17, 0.04), rgba(252, 163, 17, 0.01))"
        filter="blur(80px)"
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
              <Text as="span" color="brand.orange">
                {t('research.title')}
              </Text>
              <Text as="span" ml={3}>
                {t('research.subtitle')}
              </Text>
            </MotionHeading>

            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={16}
              w="100%"
              align="center"
            >
              {/* Research Content */}
              <MotionBox
                {...fadeInLeft}
                transition={{ delay: 0.2, duration: 0.8 }}
                flex="1"
                maxW={{ base: "100%", lg: "600px" }}
              >
                <VStack align="start" spacing={8}>
                  <Box>
                    <Badge
                      colorScheme="orange"
                      variant="solid"
                      fontSize="xs"
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg="brand.orange"
                      color="brand.black"
                      fontWeight="700"
                      textTransform="uppercase"
                      mb={4}
                    >
                      Academic Research
                    </Badge>

                    <Heading
                      as="h3"
                      size="xl"
                      color="brand.white"
                      fontWeight="700"
                      mb={6}
                      lineHeight="1.2"
                    >
                      {t('research.items.title')}
                      <Text as="span" color="brand.orange" display="block">
                        {t('research.items.subtitle')}
                      </Text>
                    </Heading>

                    <Text
                      fontSize="lg"
                      color="brand.platinum"
                      lineHeight="1.7"
                      opacity={0.9}
                      mb={8}
                    >
                      {t('research.items.description')}
                    </Text>
                  </Box>

                  <VStack align="start" spacing={4} w="100%">
                    <Text
                      fontWeight="700"
                      color="brand.orange"
                      fontSize="lg"
                      textTransform="uppercase"
                      letterSpacing="1px"
                    >
                      {t('research.highlights.title')}
                    </Text>

                    <List spacing={4} w="100%">
                      {researchHighlights.map((item, index) => (
                        <MotionBox
                          key={index}
                          {...staggerItem}
                          transition={{
                            delay: 0.4 + index * 0.1,
                            duration: 0.6,
                          }}
                        >
                          <ListItem>
                            <HStack align="start" spacing={4}>
                              <ListIcon
                                as={CheckCircleIcon}
                                color="brand.orange"
                                boxSize={6}
                                mt={1}
                              />
                              <VStack align="start" spacing={2}>
                                <Text
                                  fontWeight="600"
                                  color="brand.white"
                                  fontSize="md"
                                >
                                  {item.title}
                                </Text>
                                <Text
                                  color="brand.platinum"
                                  opacity={0.8}
                                  fontSize="sm"
                                  lineHeight="1.5"
                                >
                                  {item.description}
                                </Text>
                              </VStack>
                            </HStack>
                          </ListItem>
                        </MotionBox>
                      ))}
                    </List>
                  </VStack>

                  <Link
                    href="https://www.si-lab.org/index-ja.html"
                    isExternal
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    color="brand.white"
                    fontWeight="700"
                    fontSize="md"
                    px={6}
                    py={3}
                    borderRadius="xl"
                    bg="linear-gradient(45deg, brand.orange, #e09400)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(252, 163, 17, 0.4)",
                    }}
                  >
                    {t('research.website')}
                    <ExternalLinkIcon boxSize={4} />
                  </Link>
                </VStack>
              </MotionBox>

              {/* Research Image */}
              <MotionBox
                {...fadeInRight}
                transition={{ delay: 0.4, duration: 0.8 }}
                flex="1"
                maxW={{ base: "100%", lg: "500px" }}
              >
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
                  _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "0 25px 80px rgba(252, 163, 17, 0.2)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Image
                    src={language === 'en' ? "/img/research_en.png" : "/img/research.png"}
                    alt={t('research.image')}
                    w="100%"
                    h={{ base: "300px", md: "400px" }}
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(45deg, rgba(252, 163, 17, 0.1), rgba(20, 33, 61, 0.1))"
                    borderRadius="2xl"
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
                    p={6}
                  >
                    <Text
                      color="white"
                      fontWeight="600"
                      fontSize="lg"
                      textAlign="center"
                    >
                        {t('research.image')}
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            </Flex>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
