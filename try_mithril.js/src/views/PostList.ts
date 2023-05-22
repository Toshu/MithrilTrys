import m from "mithril";

import IPost from "./model/IPost";

let posts: IPost[] = [];

const PostList: m.Component = {
  oninit: () => {
    // m.request<IPost[]>({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/posts",
    // }).then((data) => (posts = data as IPost[]));
    posts = [
      { userId: 1, id: 1, title: "Dummy post 1", body: "dummy post 1" },
      { userId: 1, id: 2, title: "Dummy post 2", body: "dummy post 2" },
    ];
  },

  view: () =>
    m(
      "section.post-list",
      m(
        "ul",
        posts.map((post) =>
          m(
            "li",
            m(
              m.route.Link,
              {
                href: `/posts/${post.id}`,
              },
              post.title
            )
          )
        )
      ),
      m(
        m.route.Link,
        {
          href: "/posts",
          className: "button",
        },
        "Add new post"
      )
    ),
};

export default PostList;
