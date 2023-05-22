import "./style.css";
import m from "mithril";

function App(): m.Component {
  return {
    view: () =>
      m(
        "div.app",
        m("header", "Mithril Demo"),
        m("main", "[some content]"),
        m("footer", "Mithril is simple yet powerful")
      ),
  };
}

m.mount(document.body, App);
