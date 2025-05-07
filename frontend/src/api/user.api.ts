import { baseUrl } from "@/baseUrl";

export const user = {
  async signUp(username: string, email: string, password: string) {
    return await fetch(`${baseUrl}/user/signUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    }).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || "An Error Occured");
      }

      return response;
    });
  },

  async signIn(email: string, password: string) {
    return await fetch(`${baseUrl}/user/signIn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || "An Error Occured");
      }

      return response;
    });
  },
};
