import axios from "axios";

export const getUsersList = async () => {
  // try {
  // const response = await axios.get("http://jsonstub.com/orgs/1234/users", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "JsonStub-User-Key": "a11dea59-1923-4e45-83a8-6676bc896d75",
  //     "JsonStub-Project-Key": "fd7f1136-86f3-4c0e-b3c4-627c73493a4e",
  //   },
  // });

  // return response.data;

  return {
    message: "User List Fetched successfully",
    status: true,
    data: [
      {
        name: "Jason Bourne",
        email: "jb@host.com",
        contact: "1234567890",
        dob: "12th March, 1990",
        role: "owner",
      },
      {
        name: "Harvey Spectre",
        email: "hs@host.com",
        contact: "1234567891",
        dob: "9th April, 1981",
        role: "admin",
      },
      {
        name: "Tony Stark",
        email: "ts@host.com",
        contact: "1234567892",
        dob: "27th May, 1985",
        role: "user",
      },
      {
        name: "Bruce Wayne",
        email: "bw@host.com",
        contact: "1234567893",
        dob: "12th December, 1981",
        role: "operator",
      },
      {
        name: "Chandler Bing",
        email: "cb@host.com",
        contact: "1234567894",
        dob: "10th November, 1994",
        role: "owner",
      },
    ],
  };
  // } catch (error) {
  //   console.error(error);
  // }
};
