import {defineStore} from 'pinia';
import {http} from "#shared/api";

const DEFAULT_SEARCH_TEXT = 'Художественное'
const COUNT_PER_PAGE = 10;

export enum TypeLayout {
  Grid,
  List
}

type CatalogState = {
  books: unknown[]
  searchQuery: string
  activeTypeLayout: TypeLayout,
  currentPage: number,
  perPage: number,
}
export const useCatalogStore = defineStore('catalog', {
  state: (): CatalogState => ({
    books: [],
    searchQuery: '',
    activeTypeLayout: TypeLayout.Grid,
    perPage: COUNT_PER_PAGE,
    currentPage: 1,
  }),
  getters: {
    items: (state) => {
      const query = state.searchQuery.toLowerCase();
      return state.books.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query)
        )
      );
    },
    itemsWithPagination:(state)=>{
      if (state.currentPage && state.perPage) {
        const startIndex = (state.currentPage - 1) * state.perPage;
        const endIndex = startIndex + state.perPage;
        return state.items.slice(startIndex, endIndex);
      }
    }

  },
  actions: {
    async fetchBooks(query = DEFAULT_SEARCH_TEXT) {
      try {
        const {data} = await http.get(`/volumes?q=intitle:${query}&&maxResults=40`)
        this.books = data.items;
      } catch (error) {
        console.error('Error in fetching data:', error);
      }
    },
    setTypeLayout(type: TypeLayout) {
      this.activeTypeLayout = type;
    },
    setActiveStep(currentPage: number) {
      this.currentPage = currentPage;
    }
  },
});
