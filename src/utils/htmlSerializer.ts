import { createElement } from "react";
import { Elements } from "prismic-reactjs";
import {
  Code,
  Heading,
  Image,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function propsWithUniqueKey(props, key) {
  return Object.assign(props || {}, { key });
}

export function htmlSerializer(type, element, content, children, key) {
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
      return createElement(ListItem, propsWithUniqueKey(props, key), children);
    case Elements.preformatted:
      props = {
        colorScheme: "whiteAlpha",
        w: "100%",
        p: "1.5rem",
      };

      return createElement(Code, propsWithUniqueKey(props, key), children);
    case Elements.heading1:
      props = {
        as: "h1",
        size: "2xl",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading2:
      props = {
        as: "h2",
        size: "xl",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading3:
      props = {
        as: "h3",
        size: "lg",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading4:
      props = {
        as: "h4",
        size: "md",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading5:
      props = {
        as: "h5",
        size: "sm",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.heading6:
      props = {
        as: "h6",
        size: "xs",
      };

      return createElement(Heading, propsWithUniqueKey(props, key), children);
    case Elements.image:
      props = {
        src: element.url,
        alt: element.alt,
        fallbackSrc: "https://via.placeholder.com/150",
      };

      return createElement(Image, propsWithUniqueKey(props, key));
    default:
      return null;
  }
}
