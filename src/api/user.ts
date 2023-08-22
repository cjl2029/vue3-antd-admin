import request from '../request'
import { AxiosResponse } from 'axios'
import { TableList, EditData, UploadApi, OptionsData } from '@/types/api/table'
import { ResponseData } from '@/types/api/public'

type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

export const getData = (params: any): ConfigType<TableList> => {
  return request({
    url: '/users/list',
    method: 'get',
    params
  })
}
export const editGetData = (params: any): ConfigType<EditData> => {
  return request({
    url: '/users/show',
    method: 'get',
    params
  })
}

export const addData = (data: any): ConfigType => {
  return request({
    url: '/users/create',
    method: 'post',
    data
  })
}


export const editData = (data: any): ConfigType => {
  return request({
    url: '/users/update',
    method: 'post',
    data
  })
}