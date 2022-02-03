export default interface Pagination {
  current_page: number
  last_page: number
  page_size: number
  total_record: number
  has_more_page: boolean
}
