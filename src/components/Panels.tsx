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
} from "@chakra-ui/core";
import { FaUser, FaAngleRight } from "react-icons/fa";

interface PanelItemProps {
  icon: any;
  title: string;
  description: string;
}

const PanelItem = ({ icon, title, description }: PanelItemProps) => {
  return (
    <Flex p={2} my={4} align="center" alignContent="space-between">
      <Box>
        <Icon as={icon} boxSize={6} color="#485363" />
      </Box>
      <Box mx={4} maxWidth="140px">
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
              icon="FaUser"
              title="Account"
              description="Profile, security, activity, account"
            />
            <PanelItem
              icon="FaUser"
              title="General settings"
              description="Site language, notifications"
            />
            <PanelItem
              icon="FaUser"
              title="Privacy"
              description="Mentions, visibility, data..."
            />
            <PanelItem
              icon="FaUser"
              title="Feed preferences"
              description="Languages, blocked users"
            />
            <PanelItem icon="FaUser" title="Language" description="Language" />
            <PanelItem
              icon="FaUser"
              title="Help & support"
              description="FAQ, privacy policy"
            />
            <PanelItem
              icon="FaUser"
              title="Feedback"
              description="Contact us"
            />
            <PanelItem
              icon="FaUser"
              title="About lobox"
              description="Anyone on or off lobox"
            />
            <PanelItem
              icon="FaUser"
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
