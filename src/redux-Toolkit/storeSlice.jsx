import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const Token = localStorage.getItem('token')

export const postApi = createApi({
      reducerPath : 'postApi',
      baseQuery : fetchBaseQuery({
        baseUrl : `https://secondmorelive.herokuapp.com/`
    }),
    endpoints : (build) => ({

        getAllPost  : build.query({
            query : () => ({
                url : `get`,
                method : 'GET',
                headers : {
                    'Content-type' : `application/json`,
                     Authorization : `Bearer ${Token}`
                }
            })
        }),

        getRegisterUser  : build.mutation({
            query : (userRegister) => ({
                url : `register`,
                method : 'POST',
                body : userRegister, 
                headers : {
                    'Content-type' : 'application/json'
                }
            })
        }), 
      
        getLoginUser : build.mutation({
            query : (userLogin) => ({
                url : `login`,
                method : 'POST',
                body : userLogin, 
                headers : {
                    'Content-type' : 'application/json',
                }
              
            })
        }),

        getAddUser : build.mutation({
           query : (addUser) => ({
              url : `post`,
              method : 'POST',
              body : addUser,
              headers : {
                'Content-type' : 'application/json',
                Authorization : `Bearer ${Token}`
              }
           })
        }),

        getDeleteUser : build.mutation({
            query : (deleteUser) => ({
               url : `delete/${deleteUser}`,
               method : 'DELETE',
               headers : {
                'Content-type' : 'application/json',
                 Authorization : `Bearer ${Token}`
               }
            })
         }),
         getEditUser : build.mutation({
            query : (id) => ({
               url : `get/${id}`,
               method : 'GET',
               headers : {
                'Content-type' : 'application/json',
                 Authorization : `Bearer ${Token}`
               }
            })
         }),

         getUpdateUser : build.mutation({
            query : (updateUser) => ({
               url : `update/${updateUser.id}`,
               method : 'PUT',
               body : updateUser,
               headers : {
                 'Content-type' : 'application/json',
                 Authorization : `Bearer ${Token}`
               }
            })
         })
        
    })
})

export const { useGetRegisterUserMutation ,
               useGetLoginUserMutation ,
               useGetAllPostQuery,
               useGetAddUserMutation ,
               useGetDeleteUserMutation ,
               useGetEditUserMutation ,
               useGetUpdateUserMutation
            } = postApi;