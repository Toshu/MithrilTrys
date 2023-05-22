import m from "mithril";

import IPost from "./model/IPost";

function savePost(post: IPost): void {
  const isCreate = post.id === -1;
  m.request({
    method: isCreate ? "POST" : "PUT",
    url:
      "https://jsonplaceholder.typicode.com/posts" + isCreate
        ? ""
        : `/${post.id}`,
    body: post,
  });
}

let post: IPost = {
  userId: -1,
  id: -1,
  title: "",
  body: "",
};

const PostForm: m.Component = {
  oninit: () => {
    const id = m.route.param("id");
    if (id) {
      //   m.request<IPost>({
      //     method: "GET",
      //     url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      //   }).then((data) => (post = data));
      if (id === "1") {
        post = {
          userId: 1,
          id: 1,
          title: "Dummy post 1",
          body: "dummy post 1",
        };
      } else {
        post = {
          userId: 1,
          id: 2,
          title: "Dummy post 2",
          body: "dummy post 2",
        };
      }
    }
  },

  view: () =>
    m(
      "form",
      m(
        "label",
        m("span", "Title"),
        m('input[type="text"]', {
          value: post.title,
          onchange: (e: Event) =>
            (post.title = (e.target as HTMLInputElement).value),
        })
      ),
      m(
        "label",
        m("span", "Body"),
        m('textarea[rows="5"]', {
          value: post.body,
          onchange: (e: Event) =>
            (post.body = (e.target as HTMLTextAreaElement).value),
        })
      ),
      m(
        'button.button[type="button"]',
        {
          onclick: () => savePost(post),
        },
        "Save"
      )
    ),
};

export default PostForm;
