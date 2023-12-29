import { HStack, Icon, useColorMode } from "@chakra-ui/react";
import { CiDark, CiSun } from "react-icons/ci";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      {colorMode === "light" && (
        <Icon
          w="30px"
          h="30px"
          cursor="pointer"
          as={CiDark}
          onClick={toggleColorMode}
        />
      )}

      {colorMode === "dark" && (
        <Icon
          color="orange"
          w="30px"
          h="30px"
          cursor="pointer"
          as={CiSun}
          onClick={toggleColorMode}
        />
      )}
    </HStack>
  );
};
