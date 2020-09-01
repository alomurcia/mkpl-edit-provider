import { Provider } from './provider.interface';

export interface DataPaginator {
  number: number;
  size: number;
  totalElements: number;
  sort: string;
  lastPage: boolean;
  numberOfElements: number;
  totalPages: number;
  firstPage: boolean;
}

export interface ListResponse extends DataPaginator {
  content: Provider[];
}

export interface Paginator {
  data: Provider[];
  dataPaginator: DataPaginator;
  date?: string;
}
