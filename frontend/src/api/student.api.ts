import { baseUrl } from "@/utils/baseUrl";

export const student = {
  async getClassrooms(userId: number) {
    return await fetch(`${baseUrl}/student/classrooms/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || "An Error Occured");
      }

      return response;
    });
  },

  async joinClassroom(
    userId: number,
    firstname: string,
    middlename: string,
    lastname: string,
    sex: string,
    classcode: string
  ) {
    return await fetch(`${baseUrl}/student/joinClassroom/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, middlename, lastname, sex, classcode }),
    }).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.error);
      }

      return response;
    });
  },
};
