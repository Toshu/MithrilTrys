import m from "mithril";
import { User } from "../models/User";

const UserForm: m.Component = {
  oninit: (vnode: any) => {
    User.load(vnode.attrs.id);
  },

  view: () => {
    return m(
      "form",
      {
        onsubmit: (e: Event) => {
          e.preventDefault();
          User.save();
        },
      },
      [
        m("label.label", "First name"),
        m("input.input[type=text][placeholder=First name]", {
          oninput: (e: Event) => {
            // console.log("Event: ", e);
            if (User.current) {
              User.current.firstName = (e.target as HTMLInputElement).value;
            } else {
              User.current = {
                id: "93",
                firstName: (e.target as HTMLInputElement).value,
                lastName: "unknown",
              };
            }
          },
          value: User.current?.firstName,
        }),
        m("label.label", "Last name"),
        m("input.input[placeholder=Last name]", {
          oninput: (e: Event) => {
            // console.log("Event: ", e);
            if (User.current) {
              User.current.lastName = (e.target as HTMLInputElement).value;
            } else {
              User.current = {
                id: "93",
                firstName: "unknown",
                lastName: (e.target as HTMLInputElement).value,
              };
            }
          },
          value: User.current?.lastName,
        }),
        m("button.button[type=submit]", "Save"),
      ]
    );
  },
};

export default UserForm;
