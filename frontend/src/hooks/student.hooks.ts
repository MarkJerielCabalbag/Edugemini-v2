import { student } from "@/api/student.api";
import { FileProps } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useGetClassrooms = (userId: number) => {
  return useQuery({
    queryKey: ["classrooms"],
    queryFn: () => student.getClassrooms(userId),
  });
};

export const usePostJoinClassroom = (
  userId: number,
  firstname: string,
  middlename: string,
  lastname: string,
  sex: string,
  classcode: string
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      student.joinClassroom(
        userId,
        firstname,
        middlename,
        lastname,
        sex,
        classcode
      ),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const useGetFiles = (roomId: number, workId: number, userId: number) => {
  return useQuery({
    queryKey: ["files"],
    queryFn: () => student.getFiles(roomId, workId, userId),
  });
};

export const usePostSelectedFiles = (
  roomId: number,
  workId: number,
  userId: number,
  filesData: File[]
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => student.selectFiles(roomId, workId, userId, filesData),
    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({ queryKey: ["files"] });
    },

    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const usePostRemoveFile = () => {
  return useMutation({
    mutationFn: (outputId: number) => student.removeFile(outputId),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const usePostSubmit = (
  workId: number,
  roomId: number,
  studentId: number,
  time: string,
  date: string
) => {
  return useMutation({
    mutationFn: () => student.submit(workId, roomId, studentId, time, date),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const usePostCancelSubmition = (
  workId: number,
  roomId: number,
  studentId: number
) => {
  return useMutation({
    mutationFn: () => student.cancel(workId, roomId, studentId),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};
