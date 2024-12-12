import { defineStore } from 'pinia';
import {http} from "#shared/api";

const DEFAULT_SEARCH_TEXT= 'Художественное'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    books: [],
    searchQuery: '',
  }),
  getters: {
    filteredItems: (state) => {
      const query = state.searchQuery.toLowerCase();
      return state.books.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query)
        )
      );
    },
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
  },
});
