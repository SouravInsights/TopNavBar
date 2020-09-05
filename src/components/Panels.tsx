import React from "react";
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
        <Heading fontSize="16px">{title}</Heading>
        <Text fontSize="14px" color="gray.500" isTruncated>
          {description}
        </Text>
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
            <Input placeholder="Type here..." />
            <PanelItem
              name={FaUser}
              title="Account"
              description="Profile, security, activity, account"
            />
            <PanelItem
              name={FaCog}
              title="General settings"
              description="Site language, notifications"
            />
            <PanelItem
              name={FaLock}
              title="Privacy"
              description="Mentions, visibility, data..."
            />
            <PanelItem
              name={FaUser}
              title="Feed preferences"
              description="Languages, blocked users"
            />
            <PanelItem
              name={FaGlobeAmericas}
              title="Language"
              description="Language"
            />
            <PanelItem
              name={FaQuestionCircle}
              title="Help & support"
              description="FAQ, privacy policy"
            />
            <PanelItem
              name={FaCommentAlt}
              title="Feedback"
              description="Contact us"
            />
            <PanelItem
              name={FaInfoCircle}
              title="About lobox"
              description="Anyone on or off lobox"
            />
            <PanelItem
              name={FaLightbulb}
              title="Dark mode"
              description="Anyone on or off lobox"
            />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SettingsPanel;
