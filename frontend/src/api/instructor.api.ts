import { ClassProps } from "@/app/instructor/types";
import { baseUrl } from "@/utils/baseUrl";

export const instructor = {
  async getClasses(userId: number) {
    return await fetch(`${baseUrl}/instructor/classes/${userId}`, {
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

  async createClassroom(
    classname: string,
    subject: string,
    section: string,
    room: string,
    userId: number
  ) {
    return await fetch(`${baseUrl}/instructor/createClassroom/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ classname, subject, section, room }),
    }).then(async (res) => {
      const response = await res.json();

      if (!res.ok) {
        throw new Error(response.message || "An Error Occured");
      }

      return response;
    });
  },

  async getClassroom(roomId: number): Promise<ClassProps> {
    return await fetch(`${baseUrl}/instructor/class/${roomId}`, {
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

  async getAnnouncements(roomId: number) {
    return await fetch(`${baseUrl}/instructor/getAnnouncements/${roomId}`, {
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
};
