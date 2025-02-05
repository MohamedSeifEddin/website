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
        {/* Over Mij */}
        <VStack align="start" spacing={6} ref={aboutRef} py={10}>
          <Heading size="2xl">Over Mij</Heading>
          <HStack spacing={6} align="start">
            <Image 
              src="https://i.postimg.cc/zf1d3YfW/126155811.jpg" 
              alt="Mohamed Seif Eddin" 
              boxSize="150px" 
              borderRadius="full" 
              objectFit="cover" 
            />
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" lineHeight="tall">
                Hallo! Mijn naam is <b>Mohamed Seif Eddin</b>. Als gedreven en leergierige professional ben ik altijd op zoek naar nieuwe uitdagingen en groeimogelijkheden. 
                Momenteel studeer ik <b>Toegepaste Informatica & Business Analysis</b>, waarbij ik ervaring heb opgedaan in het configureren van systemen en het optimaliseren van IT-processen. 
                Mijn ambitie is om mijn expertise in de IT-sector continu te verbreden en te verdiepen.
              </Text>
              <Text fontSize="lg" lineHeight="tall">
                Daarnaast heb ik waardevolle ervaring in de voedingsindustrie, waar ik mijn flexibiliteit, stressbestendigheid en nauwkeurigheid heb bewezen. 
                Ik ben een echte <b>teamspeler</b> die vlot communiceert met zowel klanten als collega’s. 
                Mijn proactieve houding en analytisch denkvermogen helpen mij om steeds efficiënte en innovatieve oplossingen te vinden.
              </Text>
              <Text fontSize="lg" lineHeight="tall">
                Ik ben voortdurend op zoek naar mogelijkheden om mijn vaardigheden verder te ontwikkelen en een waardevolle bijdrage te leveren aan elk team waarin ik werk.
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider borderColor="gray.600" />

        {/* Vaardigheden */}
        <VStack align="start" spacing={8} ref={skillsRef} py={12} w="full">
          <Heading size="2xl" fontWeight="bold" color="white">
            Vaardigheden
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
        <VStack align="start" spacing={4} ref={educationRef} py={10}>
          <Heading size="2xl">Opleiding</Heading>
          <Text fontSize="lg">🎓 <b>Bachelor Informatica</b> - HoGent Campus Aalst (2022 - heden)</Text>
          <Text fontSize="lg">🎓 <b>Lyceum Aalst</b> - ASO, Wetenschappen-Wiskunde (2015 - 2021)</Text>
          <Text fontSize="md">📌 7 uur wiskunde</Text>
        </VStack>
        <Divider borderColor="gray.600" />

        {/* hobbys */}
        <VStack align="start" spacing={4} ref={experienceRef} py={10}>
          <Heading size="2xl">Hobby's & Passies</Heading>

          <Text fontSize="lg" color="gray.400">
            ♟️ Schaken is voor mij meer dan een spel; het is een mentale 
            uitdaging waarin strategie en geduld samenkomen. 
            Elke zet dwingt me om vooruit te denken en slimme beslissingen te nemen. 
            Schaken helpt me om mijn analytische vaardigheden te verbeteren
            en altijd met een lange-termijn visie te werken.
          </Text>

          <Text fontSize="lg" color="gray.400">
            🏋️‍♂️ Fitness is een ander belangrijk onderdeel van mijn leven. 
            Het is niet alleen een manier om sterker en fitter te worden, 
            maar het helpt me ook mijn discipline en doorzettingsvermogen te trainen. 
            Ik geloof dat fysieke kracht ook mentaal kracht oplevert.
          </Text>

          <Text fontSize="lg" color="gray.400">
            🎥 Daarnaast ben ik gepassioneerd door het maken van video's. 
            Op platforms zoals <Link color="teal.400" href="https://www.tiktok.com/@ms_lift" isExternal> TikTok </Link>, 
            <Link color="teal.400" href="https://www.instagram.com/ms_liftss/reels/" isExternal> Instagram </Link>,
            en als podcaster op <Link color="teal.400"
              href="https://www.youtube.com/@Thebrothercastbe" isExternal> YouTube </Link> 
            deel ik mijn content. Dit heeft me niet alleen geleerd om te filmen en video's. te bewerken, 
            maar ook hoe ik mijn boodschap op
            een authentieke manier kan overbrengen. Mijn doel is om mensen te motiveren om de beste versie 
            van zichzelf te worden. 
          </Text>

          <Text fontSize="lg" color="gray.400">
            🎙️ Mijn podcast is ook beschikbaar op Spotify,
            waar ik gesprekken voer over groei, motivatie en zelfverbetering. 
            In de toekomst wil ik van mijn videomaken en podcasten mijn werk maken, 
            zodat ik anderen kan inspireren en helpen hun volledige potentieel te bereiken.
          </Text>
        </VStack>

        <Divider borderColor="gray.600" />

        {/* Projecten */}
        <VStack align="start" spacing={4} ref={projectsRef} py={10}>
          <Heading size="2xl">Projecten</Heading>
          <Text fontSize="lg" color="gray.400">
            Je kunt meer over mijn projecten en ervaringen terugvinden op mijn LinkedIn profiel.
            Bekijk het hier: <Link color="teal.400" href="https://www.linkedin.com/in/mohamed-seif-eddin-bb7874266/details/projects/" isExternal>
              Mijn LinkedIn
            </Link>
          </Text>
        </VStack>
        <Divider borderColor="gray.600" />

        {/* Contact */}
        <VStack align="start" spacing={4} ref={contactRef} py={10}>
          <Heading size="2xl">Contact</Heading>
          <HStack spacing={4}>
            <Link href="mailto:mohamedseifeddin2003@gmail.com" isExternal>
              <IconButton icon={<FaEnvelope />} size="lg" colorScheme="blue" />
            </Link>
            <Link href="https://github.com/MohamedSeifEddin" isExternal>
              <IconButton icon={<FaGithub />} size="lg" colorScheme="gray" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohamed-seif-eddin-bb7874266/" isExternal>
              <IconButton icon={<FaLinkedin />} size="lg" colorScheme="blue" />
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default PortfolioPage;
