import { createElement } from "react";
import { Elements } from "prismic-reactjs";
import {
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const lightModeTextColor = "brand.gray.800";

function propsWithUniqueKey(props, key) {
  return Object.assign(props || {}, { key });
}

export function htmlSerializer(type, element, content, children, key) {
  const { colorMode } = useColorMode();
  let props = {};

  switch (type) {
    case Elements.oList:
      return createElement(
        OrderedList,
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.list:
      return createElement(
        UnorderedList,
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.listItem:
    case Elements.oListItem:
      props = {
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };
      return createElement(ListItem, propsWithUniqueKey(props, key), children);
    case Elements.preformatted:
      props = {
        style: dracula,
        customStyle: {
          fontSize: "1rem",
          lineHeight: "1.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: "1rem",
        },
      };

      return createElement(
        SyntaxHighlighter,
        propsWithUniqueKey(props, key),
        element.text
      );
    case Elements.heading1:
      props = {
        as: "h1",
        size: "2xl",
        my: "1rem",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading2:
      props = {
        as: "h2",
        size: "xl",
        my: "1rem",
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading3:
      props = {
        as: "h3",
        size: "lg",
        my: "1rem",
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading4:
      props = {
        as: "h4",
        size: "md",
        my: "1rem",
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading5:
      props = {
        as: "h5",
        size: "sm",
        my: "1rem",
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading6:
      props = {
        as: "h6",
        size: "xs",
        my: "1rem",
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.paragraph:
      props = {
        color: colorMode === "light" ? lightModeTextColor : undefined,
      };

      return createElement(Text, propsWithUniqueKey(props, key), children);
    case Elements.image:
      props = {
        src: `${element.url}&q=25`,
        alt: element.alt,
        my: "2rem",
        fallbackSrc: "https://via.placeholder.com/500?text=Loading+image...",
        width: "auto",
        height: "auto",
      };

      return createElement(Image, propsWithUniqueKey(props, key));
    default:
      return null;
  }
}
