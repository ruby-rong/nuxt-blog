/**
 * 分页模型
 * @description 用于分页查询的基本参数
 */
export class BasePageModel {
  /**
   * 当前页码
   */
  page: number

  /**
   * 每页条数
   */
  pageSize: number

  /**
   * 搜索文本
   */
  keywords?: string

  /**
   * 开始日期
   */
  startTime?: string

  /**
   * 结束日期
   */
  endTime?: string

  /**
   * 排序关键字
   * @description 以逗号分隔
   */
  sort?: string

  /**
   * 排序顺序
   * @description 以逗号分隔
   */
  order?: string

  constructor(basePageModel?: BasePageModel) {
    const { page, pageSize, keywords, startTime, endTime } = basePageModel ?? {}
    this.page = page ?? 1
    this.pageSize = pageSize ?? 10
    if (keywords) {
      this.keywords = keywords
    }
    if (startTime) {
      this.startTime = startTime
    }
    if (endTime) {
      this.endTime = endTime
    }
  }
}
