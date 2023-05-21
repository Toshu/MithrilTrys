import m from "mithril";
import { User, UserData } from "../models/User";

class UserList implements m.Component {
  private user: User;

  constructor(user: User) {
    this.user = user;
    this.user.loadList();
  }

  view = () => {
    console.log("view");
    return m(
      ".user-list",
      this.user.users.map(function (u: UserData) {
        console.log("u", u);
        return m(".user-list-item", u.firstName + " " + u.lastName);
      })
    );
  };

  //   oninit = this.user.loadList;
}

export default UserList;
