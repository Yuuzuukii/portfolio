import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Link,
  Text,
  Button,
  Image,
  HStack,
  VStack,
  Container,
  Badge,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  MotionBox,
  MotionHeading,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../motion";
import {
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useLanguage } from "../context/LanguageContext";

export default function Products() {
  const { t, language } = useLanguage();

  const slides = t('products.project.slides').map((slide, index) => {
    // サインアップ(1)、ログイン(2)以外は言語別画像を使用
    const imageIndex = index + 1;
    let src;
    
    if (imageIndex === 1 || imageIndex === 2) {
      // サインアップとログインは言語別画像なし
      src = `/img_new/${imageIndex}.png`;
    } else {
      // その他は言語別画像を使用
      src = language === 'en' ? `/img_new/${imageIndex}_en.png` : `/img_new/${imageIndex}.png`;
    }
    
    return {
      src: src,
      caption: slide.caption
    };
  });

  const technologies = [
    "React",
    "Python",
    "FastAPI",
    "ChatGPT",
    "RAG",
    "MySQL",
    "Multi-language",
  ];

  const languages = t('products.project.languages');
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIdx(i);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      as="section"
      id="products"
      py={24}
      bg="linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(20,33,61,0.9))"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="10%"
        left="-5%"
        width="350px"
        height="350px"
        borderRadius="50%"
        bg="linear-gradient(45deg, rgba(252, 163, 17, 0.06), rgba(252, 163, 17, 0.02))"
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
              <Text as="span" color="brand.orange">
                {t("products.title")}
              </Text>
              <Text as="span" ml={3}>
                {t("products.subtitle")}
              </Text>
            </MotionHeading>

            <Flex
              direction={{ base: "column", xl: "row" }}
              gap={12}
              w="100%"
              align="center"
            >
              {/* Project Details */}
              <MotionBox
                {...fadeInUp}
                transition={{ delay: 0.2, duration: 0.8 }}
                flex="1"
                maxW={{ base: "100%", xl: "500px" }}
              >
                <VStack align="start" spacing={8}>
                  <Box>
                    <HStack spacing={3} mb={4}>
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
                      >
                        {t('products.project.badge')}
                      </Badge>
                    </HStack>

                    <Heading
                      as="h3"
                      size="2xl"
                      color="brand.white"
                      fontWeight="800"
                      mb={4}
                    >
                      {t('products.project.title')}
                    </Heading>

                    <Text
                      fontSize="lg"
                      color="brand.platinum"
                      lineHeight="1.7"
                      opacity={0.9}
                    >
                      {t('products.project.description')}
                    </Text>
                  </Box>

                  <VStack align="start" spacing={6} w="100%">
                    <Box>
                      <Text
                        fontWeight="700"
                        color="brand.orange"
                        fontSize="md"
                        mb={3}
                        textTransform="uppercase"
                        letterSpacing="1px"
                      >
                        {t('products.project.featuresTitle')}
                      </Text>
                      <Text color="brand.platinum" fontSize="md" opacity={0.9}>
                        {t('products.project.features')}
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontWeight="700"
                        color="brand.orange"
                        fontSize="md"
                        mb={3}
                        textTransform="uppercase"
                        letterSpacing="1px"
                      >
                        {t('products.project.languagesTitle')}
                      </Text>
                      <Wrap spacing={2}>
                        {languages.map((lang) => (
                          <WrapItem key={lang}>
                            <Tag
                              size="md"
                              borderRadius="full"
                              variant="subtle"
                              bg="rgba(252, 163, 17, 0.1)"
                              color="brand.orange"
                              border="1px solid rgba(252, 163, 17, 0.3)"
                            >
                              <TagLabel fontWeight="600">{lang}</TagLabel>
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>

                    <Box>
                      <Text
                        fontWeight="700"
                        color="brand.orange"
                        fontSize="md"
                        mb={3}
                        textTransform="uppercase"
                        letterSpacing="1px"
                      >
                        {t('products.project.techStackTitle')}
                      </Text>
                      <Wrap spacing={2}>
                        {technologies.map((tech) => (
                          <WrapItem key={tech}>
                            <Tag
                              size="md"
                              borderRadius="full"
                              variant="subtle"
                              bg="rgba(255, 255, 255, 0.1)"
                              color="brand.white"
                              border="1px solid rgba(255, 255, 255, 0.2)"
                            >
                              <TagLabel fontWeight="600">{tech}</TagLabel>
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>

                    <Link
                      href="https://github.com/Yuuzuukii/ShigaChat"
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
                      {t('products.project.githubButton')}
                      <ExternalLinkIcon boxSize={4} />
                    </Link>
                  </VStack>
                </VStack>
              </MotionBox>

              {/* Image Carousel */}
              <MotionBox
                {...fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
                flex="1"
                maxW={{ base: "100%", xl: "750px" }}
              >
                <Box
                  bg="rgba(255, 255, 255, 0.05)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(252, 163, 17, 0.2)"
                  borderRadius="2xl"
                  p={8}
                  _hover={{
                    borderColor: "rgba(252, 163, 17, 0.4)",
                    boxShadow: "0 12px 40px rgba(252, 163, 17, 0.15)",
                  }}
                  transition="all 0.3s ease"
                >
                  <MotionBox
                    position="relative"
                    borderRadius="xl"
                    overflow="hidden"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={idx}
                    boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                    aspectRatio="7/4"
                    maxW={{ base: "100%", md: "700px" }}
                  >
                    <Image
                      src={slides[idx].src}
                      alt={slides[idx].caption}
                      objectFit="contain"
                      width="100%"
                      height="100%"
                    />
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bg="linear-gradient(transparent, rgba(0,0,0,0.8))"
                      p={4}
                    >
                      <Text
                        color="white"
                        fontWeight="600"
                        fontSize="md"
                        textAlign="center"
                      >
                        {slides[idx].caption}
                      </Text>
                    </Box>
                  </MotionBox>

                  <HStack spacing={4} mt={6} justify="center">
                    <Button
                      onClick={prev}
                      variant="ghost"
                      size="lg"
                      color="brand.orange"
                      _hover={{
                        bg: "rgba(252, 163, 17, 0.1)",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.2s ease"
                    >
                      <ChevronLeftIcon boxSize={6} />
                    </Button>

                    <HStack spacing={2}>
                      {slides.map((_, i) => (
                        <Button
                          key={i}
                          size="xs"
                          variant={i === idx ? "solid" : "ghost"}
                          onClick={() => goTo(i)}
                          bg={i === idx ? "brand.orange" : "transparent"}
                          color={i === idx ? "brand.black" : "brand.white"}
                          borderRadius="full"
                          minW="32px"
                          h="32px"
                          _hover={{
                            bg:
                              i === idx
                                ? "brand.orange"
                                : "rgba(252, 163, 17, 0.2)",
                            transform: "scale(1.1)",
                          }}
                          transition="all 0.2s ease"
                        >
                          {i + 1}
                        </Button>
                      ))}
                    </HStack>

                    <Button
                      onClick={next}
                      variant="ghost"
                      size="lg"
                      color="brand.orange"
                      _hover={{
                        bg: "rgba(252, 163, 17, 0.1)",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.2s ease"
                    >
                      <ChevronRightIcon boxSize={6} />
                    </Button>
                  </HStack>
                </Box>
              </MotionBox>
            </Flex>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
