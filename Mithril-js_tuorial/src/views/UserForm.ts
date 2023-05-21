import m from "mithril";
import { User } from "../models/User";

const UserForm: m.Component = {
  oninit: (vnode: any) => {
    User.load(vnode.attrs.id);
  },

  view: () => {
    return m("form", [
      m("label.label", "First name"),
      m("input.input[type=text][placeholder=First name]", {
        value: User.current?.firstName,
      }),
      m("label.label", "Last name"),
      m("input.input[placeholder=Last name]", {
        value: User.current?.lastName,
      }),
      m("button.button[type=submit]", "Save"),
    ]);
  },
};

export default UserForm;
