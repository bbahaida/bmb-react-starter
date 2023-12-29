import {
  Avatar,
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
import React, { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import authCtx from "../../store/auth/AuthContextProvider";
import { NavbarProps } from "../../types";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Navbar: React.FC<NavbarProps> = () => {
  const { authState, globalLogOutDispatch } = useContext(authCtx);
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
        {authState.isLoggedIn && (
          <Menu>
            <MenuButton cursor="pointer" aria-label="Options">
              <Avatar w="40px" h="40px" src="https://bit.ly/broken-link" />
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={<CiLogout />}
                onClick={() => globalLogOutDispatch()}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}

        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
};

export default Navbar;
