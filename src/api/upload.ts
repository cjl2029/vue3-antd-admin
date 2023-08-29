import request from '../request'
import { AxiosResponse } from 'axios'
import { TableList, EditData, UploadApi, OptionsData } from '@/types/api/table'
import { ResponseData } from '@/types/api/public'
type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

export const uploadImageApi = (data: any): ConfigType<UploadApi> => {
    return request({
      url: '/upload',
      method: 'post',
      data
    })
  }

  export const uploadFileApi = (data: any): ConfigType<UploadApi> => {
    return request({
      url: '/upload',
      method: 'post',
      data
    })
  }

  export const uploadImageProcess = (data: any,process:any): ConfigType<UploadApi> => {

    return request({
      url: '/upload',
      method: 'post',
      data,
      onUploadProgress:process,
    })
  }