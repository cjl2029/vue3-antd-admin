import request from '../request'
import { AxiosResponse } from 'axios'
import { TableList, EditData, UploadApi, OptionsData } from '@/types/api/table'
import { ResponseData } from '@/types/api/public'

type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

export const getData = (params: any): ConfigType<TableList> => {
  return request({
    url: '/orders/index',
    method: 'get',
    params
  })
}

export const addData = (data: any): ConfigType => {
  return request({
    url: '/orders/create',
    method: 'post',
    data
  })
}

export const editGetData = (params: any): ConfigType<EditData> => {
  return request({
    url: '/orders/show',
    method: 'get',
    params
  })
}

export const editData = (data: OptionsData): ConfigType => {
  return request({
    url: '/orders/update',
    method: 'post',
    data
  })
}

export const delData = (data: any): ConfigType => {
  return request({
    url: '/orders/delete',
    method: 'post',
    data
  })
}

export const options = (): ConfigType<OptionsData> => {
  return request({
    url: '/orders/options',
    method: 'get',
  })
}