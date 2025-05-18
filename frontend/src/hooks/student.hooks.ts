import { student } from "@/api/student.api";
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

  filesData: any
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => student.selectFiles(roomId, workId, userId, filesData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};
