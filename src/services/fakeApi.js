// export default async function fakeApi() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   let options = [];
//   data.map((user) => {
//     return options.push({ value: user.name, label: user.name });
//   });

import axios from "axios";
import { useState } from "react";

//   return options;
// }

export default async function fakeApi() {
  const fetch = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let result = res.data;
      return result;
    });

  return fetch;
}
