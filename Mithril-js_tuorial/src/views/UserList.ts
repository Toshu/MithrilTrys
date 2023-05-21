import m from "mithril";
import { User, UserData } from "../models/User";

const UserList: m.Component = {
  oninit: User.loadList,

  view: () => {
    console.log("view");
    return m(
      ".user-list",
      User.userList.map(function (u: UserData) {
        console.log("u", u);
        return m(
          m.route.Link,
          {
            class: "user-list-item",
            href: "/edit/" + u.id,
          },
          u.firstName + " " + u.lastName
        );
      })
    );
  },
};

export default UserList;
