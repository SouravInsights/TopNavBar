import React, { useEffect, useState } from "react";
import {
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
  useDisclosure,
  Icon,
  Box,
  Flex,
  Heading,
  Text,
  As,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/core";
import {
  FaUser,
  FaCog,
  FaLock,
  FaGlobeAmericas,
  FaAngleRight,
  FaQuestionCircle,
  FaCommentAlt,
  FaInfoCircle,
  FaLightbulb,
} from "react-icons/fa";

interface PanelItemProps {
  name: As;
  title: string;
  description: string;
}

const PanelItem = ({ name, title, description }: PanelItemProps) => {
  return (
    <Flex p={2} my={4} align="center" alignContent="space-between">
      <Box>
        <Icon as={name} boxSize={6} color="#485363" />
      </Box>
      <Box mx={4} width="140px">
        <Skeleton isLoaded>
          <Heading fontSize="16px">{title}</Heading>
          <Text fontSize="14px" color="gray.500" isTruncated>
            {description}
          </Text>
        </Skeleton>
      </Box>
      <Box>
        <Icon as={FaAngleRight} boxSize={6} color="#485363" />
      </Box>
    </Flex>
  );
};

interface SettingsPanelProps {
  isOpen: ReturnType<typeof useDisclosure>["isOpen"];
  onClose: ReturnType<typeof useDisclosure>["onClose"];
  finalFocusRef: DrawerProps["finalFocusRef"];
}

const SettingsPanel = ({
  isOpen,
  onClose,
  finalFocusRef,
}: SettingsPanelProps) => {
  interface SettingsData {
    name: As;
    title: string;
    description: string;
  }

  const data: any = [
    {
      name: FaUser,
      title: "Account",
      description: "Profile, security, activity, account",
    },

    {
      name: FaCog,
      title: "General settings",
      description: "Site language, notifications",
    },
    {
      name: FaLock,
      title: "Privacy",
      description: "Mentions, visibility, data",
    },

    {
      name: FaUser,
      title: "Feed preferences",
      description: "Languages, blocked users",
    },

    { name: FaGlobeAmericas, title: "Language", description: "Language" },

    {
      name: FaQuestionCircle,
      title: "Help & support",
      description: "FAQ, privacy policy",
    },

    { name: FaCommentAlt, title: "Feedback", description: "Contact us" },

    {
      name: FaInfoCircle,
      title: "About lobox",
      description: "Anyone on or off lobox",
    },

    {
      name: FaLightbulb,
      title: "Dark mode",
      description: "Anyone on or off lobox",
    },
  ];

  const [apidata, setApiData] = useState({ data: [] });
  useEffect(() => {
    const delay = setTimeout(() => {
      setApiData(data);
      console.log("This will wait until api data is loaded.");
    }, 1000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Manage your lobox</DrawerHeader>
          <DrawerBody>
            {data.map((settingsItems: any) => (
              <PanelItem
                name={settingsItems.name}
                title={settingsItems.title}
                description={settingsItems.description}
              />
            ))}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SettingsPanel;
