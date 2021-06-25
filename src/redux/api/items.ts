import axios, { AxiosError } from 'axios';
import { IItem, IApiErrorResponse } from '../../interface';

const myAxios = axios.create({
  baseURL: 'http://localhost:8080/items',
});

export const getItems = () =>
  myAxios
    .get<IItem[]>('/list')
    .then((res) => {
      var data = res.data;
      return [true, data];
    })
    .catch((error: AxiosError<IApiErrorResponse>) => {
      return [false, error];
    });

// export const getItems = () =>
//   myAxios
//     .get<IItem[]>('/list')
//     .then((res) => {
//       var x: IApiResponse<AxiosError<IApiErrorResponse>>;
//       x["data"] = res.data
//       return x;
//     })
//     .catch((error: AxiosError<IApiErrorResponse>) => {
//       return { error };
//     });
