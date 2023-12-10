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
