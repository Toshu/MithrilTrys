import m from "mithril";
import PostList from "./views/PostList";
import PostForm from "./views/PostForm";

const App: m.Component = {
  view: () =>
    m(
      "div.app",
      m("header", "Mithril Demo"),
      m("main", {
        oncreate: (vnode: m.VnodeDOM) => setupRouting(vnode.dom),
      }),
      m("footer", "Mithril is simple yet powerful")
    ),
};

function setupRouting(root: Element): void {
  m.route.prefix = "";

  m.route(root, "/", {
    // list of posts
    "/": PostList,
    // form to create a post
    "/posts": PostForm,
    // form to update a post
    "/posts/:id": PostForm,
  });
}

export default App;
