import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Breadcrumbs, NavbarTop, LargeScreenNavbar } from "../../Components/SharedComponents";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  LocationOnIcon,
  PersonIcon,
  CalculateIcon,
} from "../../Components/SharedIcons";
export default function ContactUs() {
  const name = "Contact Us";
  return (
    <>
      <NavbarTop />
      <LargeScreenNavbar />
      <Breadcrumbs name={name} />
      <ContactUsSection />
      <Footer />
    </>
  );
}
export function ContactUsSection() {
  return (
    <div className='common-mt'>
      <ChakraProvider>
        <Container
          bg='#fff'
          maxW='100%'
          centerContent
          overflow='hidden'
        >
          <Flex>
            <Box
              bg='#02054B'
              color='white'
              borderRadius='lg'
              p={{ sm: 5, md: 5, lg: 5 }}
            >
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading>Contact Info</Heading>

                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack
                          pl={0}
                          spacing={3}
                          alignItems='flex-start'
                        >
                          <Button
                            size='md'
                            height='48px'
                            width='200px'
                            variant='ghost'
                            color='#DCE2FF'
                            _hover={{ border: "2px solid #91a901" }}
                          >
                            <PhoneIcon className='mr-4' />
                            +91-988888888
                          </Button>
                          <Button
                            size='md'
                            height='48px'
                            width='200px'
                            variant='ghost'
                            color='#DCE2FF'
                            _hover={{ border: "2px solid #91a901" }}
                          >
                            <MailIcon className='mr-4' />
                            hello@abc.com
                          </Button>
                          <Button
                            size='md'
                            height='48px'
                            width='200px'
                            variant='ghost'
                            color='#DCE2FF'
                            _hover={{ border: "2px solid #91a901" }}
                          >
                            <LocationOnIcon className='mr-4' />
                            Karnavati, India
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems='flex-start'
                      >
                        <FacebookIcon />
                        <InstagramIcon />
                        <WhatsAppIcon />
                      </HStack>
                    </Box>
                  </WrapItem>
                  <div className='form-field'>
                    <Heading>Leave A Message</Heading>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <WrapItem>
                      <Box
                        bg='white'
                        borderRadius='lg'
                      >
                        <Box
                          m={8}
                          color='#0B0E3F'
                        >
                          <VStack spacing={5}>
                            <FormControl id='name'>
                              <FormLabel className='text-black'>Your Name</FormLabel>
                              <InputGroup borderColor='#E0E1E7'>
                                <InputLeftElement
                                  pointerEvents='none'
                                  children={<PersonIcon />}
                                />
                                <Input
                                  type='text'
                                  size='md'
                                />
                              </InputGroup>
                            </FormControl>
                            <FormControl id='name'>
                              <FormLabel className='text-black'>Mail</FormLabel>
                              <InputGroup borderColor='#E0E1E7'>
                                <InputLeftElement
                                  pointerEvents='none'
                                  children={<MailIcon />}
                                />
                                <Input
                                  type='text'
                                  size='md'
                                />
                              </InputGroup>
                            </FormControl>
                            <FormControl id='name'>
                              <FormLabel className='text-black'>Phone</FormLabel>
                              <InputGroup borderColor='#E0E1E7'>
                                <InputLeftElement
                                  pointerEvents='none'
                                  children={<PhoneIcon />}
                                />
                                <Input
                                  type='text'
                                  size='md'
                                />
                              </InputGroup>
                            </FormControl>
                            <FormControl id='name'>
                              <FormLabel className='text-black'>Message</FormLabel>
                              <Textarea
                                borderColor='gray.300'
                                _hover={{
                                  borderRadius: "gray.300",
                                }}
                                placeholder='message'
                              />
                            </FormControl>
                            <RobotCalculation />
                            <FormControl
                              id='name'
                              float='right'
                            >
                              <Button
                                variant='solid'
                                bg='#91a901'
                                color='white'
                                _hover={{ backgroundColor: "#91a901ad" }}
                              >
                                Send Message
                              </Button>
                            </FormControl>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                  </div>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </ChakraProvider>
    </div>
  );
}

export const RobotCalculation = () => {
  function generateRandomCalculation() {
    const number1 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    const number2 = Math.floor(Math.random() * 10) + 1; // Generate another random number between 1 and 10
    const operator = Math.random() < 0.5 ? "+" : "-"; // Randomly choose between addition and subtraction
    // const result = operator === "+" ? number1 + number2 : number1 - number2; // Calculate the result

    return `${number1} ${operator} ${number2}`;
  }
  return (
    <>
      <FormControl id='name'>
        <FormLabel className='text-black'>Are you human?</FormLabel>
        <InputGroup borderColor='#E0E1E7'>
          <InputLeftElement
            pointerEvents='none'
            children={<CalculateIcon />}
          />
          <Input
            type='number'
            size='md'
            placeholder='Enter the result'
            onChange={(e) => e.target.value}
          />
        </InputGroup>
        <Text
          fontSize='sm'
          color='gray.500'
        >
          Please solve the following calculation to prove you're human: <strong>{generateRandomCalculation()}</strong>
        </Text>
      </FormControl>
    </>
  );
};
