import { ClassProps } from "@/app/instructor/types";
import { StudentProps } from "@/types/types";
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

  async createAnnouncement(
    roomId: number,
    title: string,
    description: string,
    fileData: any[]
  ) {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      fileData.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch(
        `${baseUrl}/instructor/createAnnouncement/${roomId}`,
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

  async getAnnouncement(announceId: number) {
    return await fetch(`${baseUrl}/instructor/getAnnouncement/${announceId}`, {
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

  async removeAnnouncement(announceId: number) {
    return await fetch(
      `${baseUrl}/instructor/deleteAnnouncement/${announceId}`,
      {
        method: "POST",
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

  async getClassworks(roomId: number) {
    return await fetch(`${baseUrl}/instructor/getActivities/${roomId}`, {
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

  async createClasswork(
    roomId: number,
    title: string,
    instruction: string,
    date: string,
    time: string,
    file: File
  ) {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("instruction", instruction);
      formData.append("date", date);
      formData.append("time", time);

      formData.append("file", file);

      console.log(formData);

      const response = await fetch(
        `${baseUrl}/instructor/createActivity/${roomId}`,
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

  async getClasswork(workId: number) {
    return await fetch(`${baseUrl}/instructor/getActivity/${workId}`, {
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

  async removeClasswork(roomId: number, workId: number) {
    return await fetch(
      `${baseUrl}/instructor/removeActivity/${roomId}/${workId}`,
      {
        method: "POST",
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

  async updateActivity(
    roomId: number,
    workId: number,
    title: string,
    instruction: string,
    date: string,
    time: string,
    file: File
  ) {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("instruction", instruction);
      formData.append("date", date);
      formData.append("time", time);

      formData.append("file", file);

      const response = await fetch(
        `${baseUrl}/instructor/updateActivity/${roomId}/${workId}`,
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

  async getStudents(roomId: number) {
    return await fetch(`${baseUrl}/instructor/students/${roomId}`, {
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

  async getPeople(roomId: number, workId: number) {
    return await fetch(`${baseUrl}/instructor/people/${roomId}/${workId}`, {
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

  async acceptStudent(studentId: number, roomId: number) {
    return await fetch(
      `${baseUrl}/instructor/approvedStudent/${studentId}/${roomId}`,
      {
        method: "POST",
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

  async declineStudent(studentId: number, roomId: number) {
    return await fetch(
      `${baseUrl}/instructor/declinedStudent/${studentId}/${roomId}`,
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

  async getStudentInfo(
    roomId: number,
    studentId: number
  ): Promise<StudentProps> {
    return await fetch(
      `${baseUrl}/instructor/getStudentInfo/${roomId}/${studentId}`,
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

  async getStudentFiles(studentId: number, workId: number, roomId: number) {
    return await fetch(
      `${baseUrl}/instructor/getStudentFiles/${studentId}/${workId}/${roomId}`,
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

  async getStudentsScore(roomId: number) {
    return await fetch(`${baseUrl}/instructor/getStudentsScore/${roomId}`, {
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
