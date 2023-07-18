import request from '../request'
import { AxiosResponse } from 'axios'
import { TableList, EditData, UploadApi, OptionsData } from '@/types/api/table'
import { ResponseData } from '@/types/api/public'

type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

export const getData = (params: any): ConfigType<TableList> => {
  return request({
    url: '/banners/index',
    method: 'get',
    params
  })
}

export const addData = (data: any): ConfigType => {
  return request({
    url: '/banners/create',
    method: 'post',
    data
  })
}

export const editGetData = (params: any): ConfigType<EditData> => {
  return request({
    url: '/banners/show',
    method: 'get',
    params
  })
}

export const editData = (data: any): ConfigType => {
  return request({
    url: '/banners/update',
    method: 'post',
    data
  })
}

export const delData = (data: any): ConfigType => {
  return request({
    url: '/banners/delete',
    method: 'post',
    data
  })
}
