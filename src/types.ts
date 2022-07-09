/**
 * @desc 请求类型
 */
export type RequestType = (payload: any) => Promise<any>;

/**
 * @desc 对象类型
 */
export interface AnyObject {
  [propName: string]: any;
}
