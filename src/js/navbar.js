// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/vue";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  setup() {
    const navigation = [
      { name: "Home", href: "#", current: true },
      { name: "Profile", href: "#", current: false },
      { name: "Friends", href: "#", current: false },
      { name: "Create Post", href: "#", current: false },
    ];
    return { navigation };
  },
};
