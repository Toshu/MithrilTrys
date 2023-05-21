import m from "mithril";

import { User } from "./models/User";
import UserList from "./views/UserList";

import "./styles.css";

m.mount(document.body, new UserList(new User()));
