import type { IBlogDate, SelectItem } from '../lib/transform-filters';

export interface IBlogFilter {
    dateRange: IBlogDate;
    topic: SelectItem;
}

export interface IBlogFilterContext {
    state: IBlogFilter;
    setState: (values: Partial<IBlogFilter>) => void;
}
