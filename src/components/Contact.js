import React, { useState } from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  Container,
  Button,
  Link,
  Icon,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { MotionBox, MotionHeading, fadeInUp, staggerContainer, staggerItem } from '../motion';
import { EmailIcon, ExternalLinkIcon, CopyIcon } from '@chakra-ui/icons';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const toast = useToast();
  const { t } = useLanguage();

  const contactMethods = t('contact.methods').map(method => ({
    ...method,
    icon: method.type === 'Email' ? EmailIcon : ExternalLinkIcon
  }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('is0690ke@ed.ritsumei.ac.jp');
      setCopiedEmail(true);
      toast({
        title: t('contact.email.copied'),
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      toast({
        title: t('contact.email.copyError') || 'コピーに失敗しました',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      as="section" 
      id="contact" 
      py={24}
      bg="linear-gradient(to bottom, rgba(20,33,61,0.9), rgba(0,0,0,1))"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
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
              <Text as="span" color="brand.orange">{t('contact.title')}</Text>
              <Text as="span" ml={3}>{t('contact.subtitle')}</Text>
            </MotionHeading>

            <MotionBox
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
              textAlign="center"
              maxW="600px"
            >
              <Text 
                fontSize="xl" 
                color="brand.platinum" 
                lineHeight="1.7"
                opacity={0.9}
              >
                {t('contact.description')}
              </Text>
            </MotionBox>

            <VStack spacing={6} w="100%" maxW="800px">
              {contactMethods.map((method, index) => (
                <MotionBox
                  key={method.type}
                  {...staggerItem}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  w="100%"
                >
                  <Box
                    bg="rgba(255, 255, 255, 0.05)"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(252, 163, 17, 0.2)"
                    borderRadius="2xl"
                    p={6}
                    w="100%"
                    _hover={{
                      borderColor: 'rgba(252, 163, 17, 0.4)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 30px rgba(252, 163, 17, 0.15)',
                    }}
                    transition="all 0.3s ease"
                  >
                    <Flex 
                      direction={{ base: 'column', md: 'row' }} 
                      align={{ base: 'start', md: 'center' }}
                      justify="space-between"
                      gap={4}
                    >
                      <HStack spacing={4} flex={1}>
                        <Box
                          bg="brand.orange"
                          borderRadius="lg"
                          p={3}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon as={method.icon} color="brand.black" boxSize={6} />
                        </Box>
                        
                        <VStack align="start" spacing={2} flex={1}>
                          <Text 
                            color="brand.orange"
                            fontWeight="700"
                            fontSize="lg"
                            textTransform="uppercase"
                            letterSpacing="0.5px"
                          >
                            {method.type}
                          </Text>
                          <Text 
                            color="brand.white"
                            fontWeight="600"
                            fontSize="md"
                            wordBreak="break-all"
                          >
                            {method.value}
                          </Text>
                          <Text 
                            color="brand.platinum"
                            fontSize="sm"
                            opacity={0.8}
                          >
                            {method.description}
                          </Text>
                        </VStack>
                      </HStack>

                      <HStack spacing={3}>
                        {method.type === 'Email' && (
                          <Button
                            size="md"
                            variant="ghost"
                            leftIcon={<CopyIcon />}
                            onClick={copyEmail}
                            color={copiedEmail ? 'green.400' : 'brand.orange'}
                            _hover={{
                              bg: 'rgba(252, 163, 17, 0.1)',
                              color: 'brand.orange',
                            }}
                          >
                            {copiedEmail ? t('contact.email.copied') : t('contact.email.copy')}
                          </Button>
                        )}
                        
                        <Button
                          as={Link}
                          href={method.action}
                          isExternal={!method.action.startsWith('mailto:')}
                          size="md"
                          variant="solid"
                          bg="brand.orange"
                          color="brand.black"
                          fontWeight="600"
                          _hover={{
                            bg: '#e09400',
                            transform: 'translateY(-1px)',
                          }}
                          rightIcon={method.type !== 'Email' ? <ExternalLinkIcon /> : undefined}
                        >
                          {method.type === 'Email' ? t('contact.email.send') : 
                           method.type === 'GitHub' ? t('contact.github.open') : 
                           t('contact.lab.open')}
                        </Button>
                      </HStack>
                    </Flex>
                  </Box>
                </MotionBox>
              ))}
            </VStack>

            <MotionBox
              {...fadeInUp}
              transition={{ delay: 0.8, duration: 0.8 }}
              textAlign="center"
              pt={8}
              borderTop="1px solid rgba(252, 163, 17, 0.2)"
              w="100%"
            >
              <Text 
                color="brand.platinum" 
                fontSize="sm"
                opacity={0.7}
              >
                {t('contact.copyright')}
              </Text>
              <Text 
                color="brand.orange" 
                fontSize="sm"
                mt={2}
                fontWeight="600"
              >
                {t('contact.tech')}
              </Text>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
