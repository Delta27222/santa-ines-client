import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorsApi = createApi({
  reducerPath: 'doctors',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_SERVER_BASE_URL
  }),
  endpoints: builder => ({
    getDoctors: builder.mutation({
      query: () => {
        return {
          url: `${import.meta.env.VITE_API_DOCTOR_GET_ALL}`,
          method: 'GET',
        }
      }
    }),
    getDoctors1: builder.mutation({
      query: (data) => ({
        url: `${import.meta.env.VITE_API_DOCTOR_GET_ALL}`,
        method: 'GET',
      })
    }),
    updateDoctor: builder.mutation({
      query: (data) => ({
        url: `${import.meta.env.VITE_API_DOCTOR_UPDATE}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteDoctor: builder.mutation({  //TODO -> DANIEL -> NO funciona eliminar a doctor
      query: (data) => {
        const cedula = {cedula: data.id}
        return {
          url: `${import.meta.env.VITE_API_DOCTOR_DELETE}`,
          method: 'DELETE',
          body: cedula
        };
      }
    }),

  })
});

export const { useGetDoctorsMutation, useGetDoctors1Mutation, useUpdateDoctorMutation, useDeleteDoctorMutation } = doctorsApi;
