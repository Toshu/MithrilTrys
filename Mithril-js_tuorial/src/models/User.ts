// import m from "mithril";

// interface UserAPI {
//   offset: Number;
//   limit: Number;
//   total: Number;
//   data: UserData[];
// }

interface UserData {
  id: String;
  firstName: String;
  lastName: String;
}

const User = {
  userList: [] as UserData[],

  loadList: () => {
    console.log("lodaList");

    // return m
    //   .request({
    //     method: "GET",
    //     url: "https://rem-rest-api.herokuapp.com/api/users",
    //     withCredentials: true,
    //   })
    //   .then((result) => {
    //     User.userList = (result as UserAPI).data;
    //   });

    User.userList.push({ id: "1", firstName: "fn001", lastName: "001" });
    User.userList.push({ id: "2", firstName: "fn002", lastName: "002" });
    User.userList.push({ id: "3", firstName: "fn003", lastName: "003" });
    User.userList.push({ id: "4", firstName: "fn004", lastName: "004" });
  },
};

export { User, UserData };
