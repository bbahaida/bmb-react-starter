import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { NavbarProps } from "../../types";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Navbar: React.FC<NavbarProps> = () => {
  const bg = useColorModeValue("white", "full.900");
  const borderColor = useColorModeValue("pinky.200", "white");

  return (
    <Flex
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      as="nav"
      p="10px"
      alignItems="center"
      h="60px"
    >
      <Heading as="h4" pl="20px">
        Logo
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Menu>
          <MenuButton
            cursor="pointer"
            as={TriangleDownIcon}
            aria-label="Options"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<CiLogout />}>Logout</MenuItem>
          </MenuList>
        </Menu>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="gray.200"
          p="10px"
          w="40px"
          h="40px"
          borderRadius="50%"
        >
          BM
        </Box>

        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
};

export default Navbar;
