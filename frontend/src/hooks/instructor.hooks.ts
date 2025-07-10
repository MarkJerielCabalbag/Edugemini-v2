import { instructor } from "@/api/instructor.api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useGetClasses = (userId: number) => {
  return useQuery({
    queryKey: ["classes"],
    queryFn: () => instructor.getClasses(userId),
  });
};

export const usePostClassroom = (
  classname: string,
  subject: string,
  section: string,
  room: string,
  userId: number,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      instructor.createClassroom(classname, subject, section, room, userId),
    onSuccess: () => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
    onError: (error) => {
      onError?.();
      if (error) toast.error(error?.message);
    },
  });
};

export const useGetClassroom = (roomId: number) => {
  return useQuery({
    queryKey: ["classroom"],
    queryFn: () => instructor.getClassroom(roomId),
  });
};

export const useGetAnnouncements = (roomId: number) => {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: () => instructor.getAnnouncements(roomId),
  });
};

export const usePostAnnouncement = (
  roomId: number,
  title: string,
  description: string,
  fileData: any[]
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      instructor.createAnnouncement(roomId, title, description, fileData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      queryClient.invalidateQueries({ queryKey: ["announcement"] });
      toast.success(data?.message);
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      queryClient.invalidateQueries({ queryKey: ["announcement"] });
      toast.success(error?.message);
    },
  });
};

export const useGetAnnouncement = (announceId: number) => {
  return useQuery({
    queryKey: ["announcement"],
    queryFn: () => instructor.getAnnouncement(announceId),
  });
};

export const useDeleteAnnouncement = (announceId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => instructor.removeAnnouncement(announceId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });

      toast.success(data?.message);
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });

      toast.success(error?.message);
    },
  });
};

export const useGetClassworks = (roomId: number) => {
  return useQuery({
    queryKey: ["classworks"],
    queryFn: () => instructor.getClassworks(roomId),
  });
};

export const usePostActivity = (
  roomId: number,
  title: string,
  instruction: string,
  date: string,
  time: string,
  file: any
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      instructor.createClasswork(roomId, title, instruction, date, time, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["classworks"] });

      toast.success(data?.message);
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["classworks"] });

      toast.success(error?.message);
    },
  });
};

export const useGetClasswork = (workId: number) => {
  return useQuery({
    queryKey: ["classwork"],
    queryFn: () => instructor.getClasswork(workId),
  });
};

export const useDeleteClasswork = (roomId: number, workId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => instructor.removeClasswork(roomId, workId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["classwork"] });
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const usePatchClasswork = (
  roomId: number,
  workId: number,
  title: string,
  instruction: string,
  date: string,
  time: string,
  file: any
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      instructor.updateActivity(
        roomId,
        workId,
        title,
        instruction,
        date,
        time,
        file
      ),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["classworks"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetStudents = (roomId: number) => {
  return useQuery({
    queryKey: ["students"],
    queryFn: () => instructor.getStudents(roomId),
  });
};

export const useGetPeople = (roomId: number, workId: number) => {
  return useQuery({
    queryKey: ["people"],
    queryFn: () => instructor.getPeople(roomId, workId),
  });
};

export const usePostApprovedStudent = (studentId: number, roomId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => instructor.acceptStudent(studentId, roomId),
    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({ queryKey: ["people"] });
    },
    onError: async (error) => {
      toast.error(error.message);
    },
  });
};

export const usePostDeclinedStudent = (studentId: number, roomId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => instructor.declineStudent(studentId, roomId),
    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({ queryKey: ["people"] });
    },
    onError: async (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetStudentInfo = (roomId: number, studentId: number) => {
  return useQuery({
    queryKey: ["student"],
    queryFn: () => instructor.getStudentInfo(roomId, studentId),
  });
};

export const useGetStudentFiles = (
  studentId: number,
  workId: number,
  roomId: number
) => {
  return useQuery({
    queryKey: ["studentFiles"],
    queryFn: () => instructor.getStudentFiles(studentId, workId, roomId),
  });
};

export const useGetStudentsScore = (roomId: number) => {
  return useQuery({
    queryKey: ["studentsScore"],
    queryFn: () => instructor.getStudentsScore(roomId),
  });
};
