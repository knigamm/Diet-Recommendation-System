import getSession from "../utils/getSession";

export default async function () {
    const authToken = getSession();
  try {
    const user = await fetch(`${process.env.BASE_URL}/api/user/`, {
      headers: {
        Authorization: `Bearer ${authToken?.value}`,
      },
    });
    const data = await user.json();
    console.log(data)
    return data
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}
