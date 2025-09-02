import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react';
import { MotionBox, fadeInUp } from '../motion';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const { t, language, switchLanguage } = useLanguage();

  const NavLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#research', label: t('nav.research') },
    { href: '#products', label: t('nav.products') },
    { href: '#certifications', label: t('nav.certifications') },
    { href: '#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      // より緩やかでエレガントなスクロール
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.max(800, Math.abs(distance) * 0.5); // 最低800ms、距離に応じて調整
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // エレガントなイージング関数（ease-in-out-cubic）
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <Box 
      as="header" 
      bg={scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      borderBottom={scrolled ? '1px solid rgba(252, 163, 17, 0.2)' : 'none'}
      color="brand.white" 
      py={4} 
      px={{ base: 4, md: 8 }} 
      position="fixed" 
      top={0} 
      w="100%"
      zIndex={1000}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <MotionBox {...fadeInUp}>
        <Flex align="center" justify="space-between" maxW="container.xl" mx="auto">
          <Heading as="h1" size="lg" letterSpacing="tight" fontWeight="800" minW="200px">
            <Text as="span" color="brand.white">Yuzuki</Text>
            <Text as="span" ml={2} color="brand.orange">Masuo</Text>
          </Heading>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }} flex="1" justify="center">
            {NavLinks.map((link) => (
              <Box
                key={link.href} 
                as="button"
                onClick={() => handleSmoothScroll(link.href)}
                color="brand.white" 
                fontWeight="500"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.5px"
                position="relative"
                bg="transparent"
                border="none"
                cursor="pointer"
                _hover={{ 
                  color: 'brand.orange',
                  _after: {
                    width: '100%',
                  }
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0',
                  height: '2px',
                  bg: 'brand.orange',
                  transition: 'width 0.3s ease',
                }}
              >
                {link.label}
              </Box>
            ))}
          </HStack>

          <HStack spacing={3} minW="200px" justify="flex-end">
            <Button
              size="sm"
              variant="outline"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.5px"
              onClick={() => switchLanguage(language === 'ja' ? 'en' : 'ja')}
              display={{ base: 'none', md: 'inline-flex' }}
              _hover={{
                bg: 'brand.orange',
                color: 'brand.black',
                borderColor: 'brand.orange',
              }}
            >
              {language === 'ja' ? 'English' : '日本語'}
            </Button>

            <IconButton
              aria-label="Open menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="brand.white"
              _hover={{
                bg: 'rgba(252, 163, 17, 0.1)',
                color: 'brand.orange',
              }}
            />
          </HStack>
        </Flex>
      </MotionBox>

      {/* Mobile Menu */}
      {isOpen && (
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          mt={4}
          display={{ md: 'none' }}
          bg="rgba(0, 0, 0, 0.95)"
          backdropFilter="blur(10px)"
          borderRadius="lg"
          p={4}
          border="1px solid rgba(252, 163, 17, 0.2)"
        >
          <VStack spacing={4}>
            {NavLinks.map((link) => (
              <Box
                key={link.href} 
                as="button"
                onClick={() => {
                  handleSmoothScroll(link.href);
                  onClose();
                }}
                color="brand.white" 
                w="100%" 
                textAlign="center"
                py={2}
                borderRadius="md"
                bg="transparent"
                border="none"
                cursor="pointer"
                _hover={{
                  bg: 'rgba(252, 163, 17, 0.1)',
                  color: 'brand.orange',
                }}
              >
                {link.label}
              </Box>
            ))}
            <Button 
              size="sm" 
              variant="outline" 
              w="100%"
              onClick={() => switchLanguage(language === 'ja' ? 'en' : 'ja')}
            >
              {language === 'ja' ? 'English' : '日本語'}
            </Button>
          </VStack>
        </MotionBox>
      )}
    </Box>
  );
}
