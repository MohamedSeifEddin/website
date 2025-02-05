import { Box, VStack, Heading, Text, Container, Divider, HStack, Link, Button, Image, SimpleGrid, Flex, IconButton } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function PortfolioPage() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (ref, label) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: aboutRef, label: 'Over Mij' },
        { ref: skillsRef, label: 'Vaardigheden' },
        { ref: educationRef, label: 'Opleiding' },
        { ref: experienceRef, label: 'Hobby\'s' },
        { ref: projectsRef, label: 'Projecten' },
        { ref: contactRef, label: 'Contact' },
      ];

      let currentActive = null;
      sections.forEach(({ ref, label }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = label;
          }
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box bg="#0d1117" color="white" minH="100vh">
      {/* Navigatiebalk */}
      <Box as="nav" bg="rgba(22, 27, 34, 0.9)" py={4} position="fixed" width="100%" zIndex="1000" boxShadow="lg" backdropFilter="blur(10px)">
        <Flex justify="center" align="center" wrap="wrap">
          <HStack spacing={6}>
            {[ 
              { label: 'Over Mij', ref: aboutRef },
              { label: 'Vaardigheden', ref: skillsRef },
              { label: 'Opleiding', ref: educationRef },
              { label: 'Hobby\'s', ref: experienceRef },
              { label: 'Projecten', ref: projectsRef },
              { label: 'Contact', ref: contactRef },
            ].map((item, index) => (
              <Button
                key={index}
                variant="link"
                color={activeSection === item.label ? 'blue.400' : 'white'}
                fontWeight={activeSection === item.label ? 'bold' : 'normal'}
                _hover={{ color: 'blue.300', transform: 'scale(1.1)' }}
                transition="all 0.3s ease"
                onClick={() => scrollToSection(item.ref, item.label)}
              >
                {item.label}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Box>

      <Container maxW="900px" py={24}>
        <VStack align="center" spacing={8} ref={aboutRef} py={12} bg="gray.900" minH="100vh">
          <Heading size="2xl" fontWeight="bold" textAlign="center" >
            Over Mij
          </Heading>
          <HStack spacing={8} align="start" justify="center">
            <Image 
              src="https://i.postimg.cc/zf1d3YfW/126155811.jpg" 
              alt="Mohamed Seif Eddin" 
              boxSize="180px" 
              borderRadius="full" 
              objectFit="cover" 
              shadow="2xl"
            />
            <VStack align="start" spacing={6} maxW="lg">
              <Text fontSize="xl" lineHeight="tall" color="gray.200">
                Hallo! Mijn naam is <Text as="span" fontWeight="bold" color="teal.400">Mohamed Seif Eddin</Text>. Als gedreven en leergierige professional ben ik altijd op zoek naar nieuwe uitdagingen en groeimogelijkheden. Momenteel studeer ik <Text as="span" fontWeight="bold" color="teal.400">Toegepaste Informatica</Text> specificatie in <Text as="span" fontWeight="bold" color="teal.400">Business Analysis</Text>. Mijn ambitie is om mijn expertise in de IT-sector continu te verbreden en te verdiepen.
              </Text>
              <Text fontSize="xl" lineHeight="tall" color="gray.200">
                Daarnaast heb ik waardevolle ervaring in de voedingsindustrie, waar ik mijn <Text as="span" fontWeight="bold" color="teal.400">flexibiliteit</Text>, <Text as="span" fontWeight="bold" color="teal.400">stressbestendigheid</Text> en <Text as="span" fontWeight="bold" color="teal.400">nauwkeurigheid</Text> heb bewezen. Ik ben een echte <Text as="span" fontWeight="bold" color="teal.400">teamspeler</Text> die vlot communiceert met zowel klanten als collega’s. Mijn proactieve houding en analytisch denkvermogen helpen mij om steeds efficiënte en innovatieve oplossingen te vinden.
              </Text>
              <Text fontSize="xl" lineHeight="tall" color="gray.200">
                Ik ben voortdurend op zoek naar mogelijkheden om mijn vaardigheden verder te ontwikkelen en een waardevolle bijdrage te leveren aan elk team waarin ik werk.
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider borderColor="gray.600" />

        {/* Vaardigheden */}
        <VStack align="start" spacing={8} ref={skillsRef} py={12} w="full">
          <Heading size="2xl" fontWeight="bold" color="white">
            ICT Vaardigheden
          </Heading>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6} w="full">
            {[ 
              { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Chakra UI', logo: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored.svg' },
              { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
              { name: 'SQL', logo: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
              { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'SAP CAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'JavaFX', logo: 'https://i.postimg.cc/cLyWDfP7/JavaFX.png' },
              { name: 'SAP Build', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'Cloud Firestore', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
              { name: 'ABAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'Front-end Ontwikkeling', logo: 'https://cdn-icons-png.flaticon.com/512/919/919827.png' },
              { name: 'Back-end Ontwikkeling', logo: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png' },
            ].map((skill, index) => (
              <VStack
                key={index}
                p={5}
                bg="gray.900"
                borderRadius="2xl"
                boxShadow="lg"
                textAlign="center"
                transition="all 0.3s"
                _hover={{ transform: 'scale(1.08)', bg: 'gray.700' }}
              >
                <Image
                  src={skill.logo}
                  boxSize="65px"
                  alt={skill.name}
                />
                <Text fontSize="lg" fontWeight="semibold" color="gray.200">
                  {skill.name}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <Divider borderColor="gray.600" />

        {/* Opleiding */}

        {/* hobbys */}
        <VStack align="center" spacing={6} ref={experienceRef} py={12} bg="gray.900" minH="100vh">
          <Heading size="2xl" textAlign="center" fontWeight="bold" >
            Hobby's & Passies
          </Heading>

          <VStack spacing={6} align="start" maxW="3xl" mx="auto">
            {/* Chess Section */}
            <Box borderLeft="4px" borderColor="teal.400" pl={4} py={4} mb={6}>
              <Text fontSize="lg" color="gray.300" fontWeight="medium">
                ♟️ <b>Schaken:</b> Voor mij is schaken meer dan gewoon een bordspel. Het is een mentale uitdaging die geduld en strategie vereist. 
                Elke zet daagt me uit om vooruit te denken en slimme, weloverwogen keuzes te maken. 
                Het scherpt mijn analytisch vermogen en versterkt mijn vermogen om met een lange-termijn visie te werken — een essentiële vaardigheid in zowel mijn persoonlijke als professionele leven.
              </Text>
            </Box>

            {/* Fitness Section */}
            <Box borderLeft="4px" borderColor="teal.400" pl={4} py={4} mb={6}>
              <Text fontSize="lg" color="gray.300" fontWeight="medium">
                🏋️‍♂️ <b>Fitness:</b> Fitness is voor mij een manier om zowel mentaal als fysiek sterker te worden. Het gaat niet alleen om spiermassa, maar om het ontwikkelen van discipline, doorzettingsvermogen en focus. 
                Elke training helpt me niet alleen mijn lichaam te verbeteren, maar versterkt ook mijn geest. 
                Ik geloof dat fysieke kracht direct bijdraagt aan mentale kracht en dat een gezonde geest in een gezond lichaam essentieel is voor succes in elk aspect van het leven.
              </Text>
            </Box>

            {/* Video Making & Social Media Section */}
            <Box borderLeft="4px" borderColor="teal.400" pl={4} py={4} mb={6}>
              <Text fontSize="lg" color="gray.300" fontWeight="medium">
                🎥 <b>Video Maken & Creatieve Content:</b> Ik ben gepassioneerd door het creëren van content en het delen van mijn verhalen via platforms zoals 
                <Link color="teal.400" href="https://www.tiktok.com/@ms_lift" isExternal> TikTok</Link>, 
                <Link color="teal.400" href="https://www.instagram.com/ms_liftss/reels/" isExternal> Instagram</Link>, en als podcaster op <Link color="teal.400" href="https://www.youtube.com/@Thebrothercastbe" isExternal> YouTube</Link>. 
                Dit proces helpt me niet alleen om mijn vaardigheden in filmen en bewerken te verbeteren, maar het biedt me ook de kans om mensen te inspireren. 
                Mijn doel is om mijn boodschap van zelfverbetering, motivatie en groei op een authentieke manier over te brengen en anderen te helpen de beste versie van zichzelf te worden.
              </Text>
            </Box>

            {/* Podcast Section */}
            <Box borderLeft="4px" borderColor="teal.400" pl={4} py={4}>
              <Text fontSize="lg" color="gray.300" fontWeight="medium">
                🎙️ <b>Podcasten:</b> Als podcaster ben ik altijd bezig met gesprekken over persoonlijke groei, motivatie en zelfverbetering. 
                Mijn podcast is beschikbaar op <Link color="teal.400" href="https://open.spotify.com/show/5su0OZ6rwSKkCWFUPcCPAD" isExternal>Spotify</Link>, en het biedt me de mogelijkheid om mijn ervaringen en inzichten te delen met een breder publiek. 
                In de toekomst wil ik van mijn werk als videomaker en podcaster mijn carrière maken, zodat ik nog meer mensen kan inspireren om hun volledige potentieel te ontdekken en te benutten.
              </Text>
            </Box>
          </VStack>
        </VStack>

        <Divider borderColor="gray.600" />

        {/* Projecten */}
        <VStack align="center" spacing={6} ref={projectsRef} bg="gray.900" >
          <Heading size="2xl" textAlign="center" fontWeight="bold" >
            Projecten
          </Heading>

          <Box
            border="1px"
            borderColor="teal.400"
            borderRadius="lg"
            p={6}
            boxShadow="lg"
            maxW="4xl"
            mx="auto"
            bg="gray.800"
          >
            <Text fontSize="lg" color="gray.300" textAlign="center">
              Je kunt meer over mijn projecten en ervaringen terugvinden op mijn LinkedIn profiel. 
              Bekijk het hier:
            </Text>
            <Text fontSize="lg" color="teal.400" textAlign="center" mt={4}>
              <Link color="teal.400" href="https://www.linkedin.com/in/mohamed-seif-eddin-bb7874266/details/projects/" isExternal>
                Mijn LinkedIn
              </Link>
            </Text>
          </Box>

          <Divider borderColor="gray.600" mt={8} />
        </VStack>

        {/* Contact */}
        <VStack align="center" spacing={6} >
          <Heading size="2xl" textAlign="center" fontWeight="bold">
            Contact
          </Heading>
          <HStack spacing={6} justify="center" w="full">
            <Link href="mailto:mohamedseifeddin2003@gmail.com" isExternal>
              <IconButton
                icon={<FaEnvelope />}
                size="lg"
                colorScheme="blue"
                borderRadius="full"
                _hover={{ bg: 'blue.600', transform: 'scale(1.1)', transition: '0.3s' }}
                aria-label="Email"
              />
            </Link>
          
            <Link href="https://www.linkedin.com/in/mohamed-seif-eddin-bb7874266/" isExternal>
              <IconButton
                icon={<FaLinkedin />}
                size="lg"
                colorScheme="blue"
                borderRadius="full"
                _hover={{ bg: 'blue.600', transform: 'scale(1.1)', transition: '0.3s' }}
                aria-label="LinkedIn"
              />
            </Link>
          </HStack>
        </VStack>
      </Container>
      <Divider borderColor="gray.600" />
    </Box>
  );
}

export default PortfolioPage;
