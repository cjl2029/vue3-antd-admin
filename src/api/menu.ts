import request from '../request'
import { AxiosResponse } from 'axios'
import { TableList, EditData, UploadApi, OptionsData } from '@/types/api/table'
import { ResponseData } from '@/types/api/public'

type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

export const getData = (params: any): ConfigType<TableList> => {
  return request({
    url: '/menus/list',
    method: 'get',
    params
  })
}

export const addData = (data: any): ConfigType => {
  return request({
    url: '/menus/create',
    method: 'post',
    data
  })
}

export const editGetData = (params: any): ConfigType<EditData> => {
  return request({
    url: '/menus/show',
    method: 'get',
    params
  })
}

export const editData = (data: any): ConfigType => {
  return request({
    url: '/menus/update',
    method: 'post',
    data
  })
}

export const delData = (data: any): ConfigType => {
  return request({
    url: '/menus/delete',
    method: 'post',
    data
  })
}

export const options = (): ConfigType<OptionsData> => {
  return request({
    url: '/menus/options',
    method: 'get'
  })
}