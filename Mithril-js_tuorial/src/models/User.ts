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

const startUsers: UserData[] = [];
startUsers.push({ id: "1", firstName: "fn001", lastName: "001" });
startUsers.push({ id: "2", firstName: "fn002", lastName: "002" });
startUsers.push({ id: "3", firstName: "fn003", lastName: "003" });
startUsers.push({ id: "4", firstName: "fn004", lastName: "004" });

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

    User.userList = [] as UserData[];
    startUsers.forEach((u) => User.userList.push(u));
    // User.userList.push({ id: "1", firstName: "fn001", lastName: "001" });
    // User.userList.push({ id: "2", firstName: "fn002", lastName: "002" });
    // User.userList.push({ id: "3", firstName: "fn003", lastName: "003" });
    // User.userList.push({ id: "4", firstName: "fn004", lastName: "004" });
  },

  current: {} as UserData | undefined,
  load: function (id: string) {
    // return m
    //   .request({
    //     method: "GET",
    //     url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
    //     withCredentials: true,
    //   })
    //   .then(function (result) {
    //     User.current = result as UserData;
    //   });

    User.current = User.userList.find((u) => u.id === id);
  },

  save: function () {
    // return m.request({
    //   method: "PUT",
    //   url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current?.id,
    //   body: User.current,
    //   withCredentials: true,
    // });

    // console.log("save 1");
    if (User.current) {
      //   console.log("save 2");
      const startuser = startUsers.find((u) => u.id === User.current?.id);
      if (startuser) {
        // console.log("save 3");
        // console.log("user:", startuser);
        startuser.firstName = User.current.firstName;
        startuser.lastName = User.current.lastName;
        // console.log("save 4");
        // console.log("user:", startuser);
      }
    }
  },
};

export { User, UserData };
