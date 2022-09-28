import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
      reducerPath : 'postApi',
      baseQuery : fetchBaseQuery({
        baseUrl : `https://secondmorelive.herokuapp.com`
    }),
    endpoints : (build) => ({

        getAllPost  : build.query({
            query : (getAllPostData) => ({
                token : localStorage.getItem('token'),
                url : `/get`,
                method : 'GET',
                body : getAllPostData, 
                header : {
                    'Content-type' : `application/json`
                }
            })
        }),

        getRegisterUser  : build.mutation({
            query : (userRegister) => ({
                url : `/register`,
                method : 'POST',
                body : userRegister, 
                header : {
                    'Content-type' : 'application/json'
                }
            })
        }), 
      
        getLoginUser : build.mutation({
            query : (userLogin) => ({
                url : `/login`,
                method : 'POST',
                body : userLogin, 
                header : {
                    'Content-type' : 'application/json',
                }
              
            })
        }),

        getEditUser : build.mutation({
           query : (userEdit) => ({
              url : `/register`,
              method : 'PUT',
              header : {
                'Content-type' : 'application/json'
              }
           })
        })
        
    })
})

export const { useGetRegisterUserMutation ,
               useGetLoginUserMutation ,
               useGetAllPostQuery   
            } = postApi;