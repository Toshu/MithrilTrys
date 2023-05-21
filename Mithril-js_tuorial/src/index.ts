import m from "mithril";

import { User } from "./models/User";
import UserList from "./views/UserList";

m.mount(document.body, new UserList(new User()));
