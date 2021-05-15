import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useMenuDrawer } from "../../../contexts/MenuDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useMenuDrawer();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
