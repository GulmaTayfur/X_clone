import API from "./scripts/api.js";
import { getLocal } from "./scripts/helpers.js";
import {
  ele,
  renderUserInfo,
  renderTimeline,
  renderLoader,
  renderDetailLoader,
  renderDetail,
  renderUser,
} from "./scripts/ui.js";

const user = getLocal("user");

const router = () => {
  const params = new URLSearchParams(location.search);
  const page = params.get("page");
  const query = params.get("q");

  switch (page) {
    case "status":
      renderDetailLoader("Gönderi");
      API.getData(`/tweet.php?id=${query}`).then((data) =>
        renderDetail(data, user)
      );

      break;

    case "search":
      renderDetailLoader(`${query} için sonuçlar`);

      API.getData(`/search.php?query=${query}&search_type=top`)
        //
        .then((data) => renderTimeline(data, ele.main, "user_info"));

      break;

    case "user":
      renderDetailLoader(query);

      API.getUser(query).then((user) => {
        renderUser(user);
        const outlet = document.querySelector(".page-bottom");
        API.getData(`/timeline.php?screenname=${query}`).then((data) =>
          renderTimeline(data, outlet, "author")
        );
      });

      break;
    default:
      renderLoader(ele.tweetsArea);
      API.getData(`/timeline.php?screenname=${user.profile}`).then((data) =>
        renderTimeline(data, ele.tweetsArea, "author")
      );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (user) {
    renderUserInfo(user);
  } else {
    location = "/auth.html";
  }
  router();
});

ele.logoutBtn.addEventListener("click", () => {
  console.log("tıklandır");

  localStorage.removeItem("user");

  location = "/auth.html";
});

ele.main.addEventListener("click", (e) => {
  if (e.target.id === "back-btn") {
    history.back();
  }
});

ele.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;

  location = `?page=search&q=${query}`;
});
