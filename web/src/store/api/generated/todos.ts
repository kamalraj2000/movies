/* eslint-disable -- Auto Generated File */
import { emptySplitApi as api } from "../empty-api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<GetTodosApiResponse, GetTodosApiArg>({
      query: () => ({ url: `/api/Todos` }),
    }),
    createTodo: build.mutation<CreateTodoApiResponse, CreateTodoApiArg>({
      query: (queryArg) => ({
        url: `/api/Todos`,
        method: "POST",
        body: queryArg.createTodoCommand,
      }),
    }),
    updateTodo: build.mutation<UpdateTodoApiResponse, UpdateTodoApiArg>({
      query: (queryArg) => ({
        url: `/api/Todos/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateTodoCommand,
      }),
    }),
    deleteTodo: build.mutation<DeleteTodoApiResponse, DeleteTodoApiArg>({
      query: (queryArg) => ({
        url: `/api/Todos/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as moviesApi };
export type GetTodosApiResponse = /** status 200  */ TodoItem[];
export type GetTodosApiArg = void;
export type CreateTodoApiResponse = /** status 200  */ number;
export type CreateTodoApiArg = {
  createTodoCommand: CreateTodoCommand;
};
export type UpdateTodoApiResponse = unknown;
export type UpdateTodoApiArg = {
  id: number;
  updateTodoCommand: UpdateTodoCommand;
};
export type DeleteTodoApiResponse = unknown;
export type DeleteTodoApiArg = {
  id: number;
};
export type TodoItem = {
  id?: number;
  title?: string | null;
  isComplete?: boolean;
};
export type CreateTodoCommand = {
  title?: string;
};
export type UpdateTodoCommand = {
  id?: number;
  title?: string;
  isComplete?: boolean;
};
export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = injectedRtkApi;
