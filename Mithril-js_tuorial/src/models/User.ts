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

class User {
  private userlist: UserData[] = [] as UserData[];

  constructor() {}

  get users(): UserData[] {
    return this.userlist;
  }

  loadList = () => {
    // console.log("lodaList");
    // return m
    //   .request({
    //     method: "GET",
    //     url: "https://rem-rest-api.herokuapp.com/api/users",
    //     withCredentials: true,
    //   })
    //   .then((result) => {
    //     this.userlist = (result as UserAPI).data;
    //   });

    //users = [];
    this.userlist.push({ id: "1", firstName: "fn001", lastName: "001" });
    this.userlist.push({ id: "2", firstName: "fn002", lastName: "002" });
    this.userlist.push({ id: "3", firstName: "fn003", lastName: "003" });
    this.userlist.push({ id: "4", firstName: "fn004", lastName: "004" });
  };
}

export { User, UserData };
