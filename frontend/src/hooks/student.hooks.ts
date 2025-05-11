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
