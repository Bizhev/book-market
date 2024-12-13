import { ref } from 'vue';
import {useCatalogStore} from "~/store/catalog";
const catalogStore = useCatalogStore();

export function useFetchData() {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);


  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await catalogStore.fetchBooks();
      data.value = response.data;
    } catch (err) {
      error.value = (err as Error).message || 'Error fetching data...';
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
}
