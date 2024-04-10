import global from "./global";

import TestComponentTheme from "./componentsTheme/TestComponent";

const componentsTheme = {
  TestComponentTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
