import { Component, Vue } from 'nuxt-property-decorator'

import Pagination from '@/types/pagination'

@Component
export default class DataTable extends Vue {
  items: Array<any> = []

  nextPage: number = 1

  pagination: Pagination = {
    current_page: 1,
    last_page: 1,
    page_size: 20,
    total_record: 0,
    has_more_page: false
  }

  get isLastPage(): boolean {
    return this.pagination.current_page == this.pagination.last_page
  }

  onIntersect(isIntersecting: boolean) {
    if (isIntersecting) {
      this.$fetch()
    }
  }

  setPagination(pagination: Pagination) {
    this.pagination = pagination
    this.nextPage = pagination.has_more_page
      ? pagination.current_page + 1
      : pagination.current_page
  }

  pushOrAssignItems(
    items: Array<any>,
    pagination: Pagination,
    replace: boolean = false
  ): void {
    if (pagination.current_page === 1 || replace) {
      this.items = items
    } else {
      this.items = [...this.items, ...items]
    }

    this.setPagination(pagination)
  }

  unshiftOrAssignItems(
    items: Array<any>,
    pagination: Pagination,
    replace: boolean = false
  ): void {
    if (pagination.current_page === 1 || replace) {
      this.items = items
    } else {
      this.items = [...items, ...this.items]
    }

    this.setPagination(pagination)
  }
}
