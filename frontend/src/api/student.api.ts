import { baseUrl } from "@/utils/baseUrl";
import { useQueryClient } from "@tanstack/react-query";

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

  async selectFiles(
    roomId: number,
    workId: number,
    userId: number,

    filesData: File[]
  ) {
    try {
      const formData = new FormData();

      filesData.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch(
        `${baseUrl}/student/selectFiles/${roomId}/${workId}/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An Error Occurred");
      }

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async getFiles(roomId: number, workId: number, userId: number) {
    return await fetch(
      `${baseUrl}/student/getFiles/${roomId}/${workId}/${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || "An Error Occured");
      }

      return response;
    });
  },

  async removeFile(outputId: number) {
    return await fetch(`${baseUrl}/student/removeFile/${outputId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.error);
      }

      return response;
    });
  },

  async submit(
    workId: number,
    roomId: number,
    studentId: number,
    time: string,
    date: string
  ) {
    return await fetch(
      `${baseUrl}/student/submit/${workId}/${roomId}/${studentId}`,
      {
        method: "POST",
        body: JSON.stringify({ time, date }),
      }
    ).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.error);
      }

      return response;
    });
  },

  async cancel(workId: number, roomId: number, studentId: number) {
    return await fetch(
      `${baseUrl}/student/cancel/${workId}/${roomId}/${studentId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    ).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.error);
      }

      return response;
    });
  },
};
