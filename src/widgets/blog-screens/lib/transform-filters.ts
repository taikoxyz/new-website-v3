import dayjs from 'dayjs';

export interface IBlogDateDefault {
    title: string;
    value: string;
}

export interface IBlogDate {
    title: string;
    key: string;
    value: {
        from?: string;
        to?: string;
    };
}

export const transformDate = (initialData: IBlogDateDefault[]): IBlogDate[] => {
    const data: IBlogDate[] = [];

    for (const item of initialData) {
        const date: IBlogDate = {
            title: item.title,
            key: item.value,
            value: {}
        };

        if (item.value === 'all') {
            date.value.from = date.value.to = undefined;
        }

        if (item.value === 'a-month') {
            date.value.from = dayjs().subtract(1, 'month').toISOString();
        }

        if (item.value === '6-month') {
            date.value.from = dayjs().subtract(6, 'month').toISOString();
        }

        if (item.value === 'year') {
            date.value.from = dayjs().subtract(1, 'year').toISOString();
        }

        data.push(date);
    }

    return data;
};

export interface SelectItem {
    name: string;
    value: string;
}

export const transformCategory = (initialData: { id: number; name: string }[]): SelectItem[] => {
    const data: SelectItem[] = [{ name: 'All topics', value: 'all' }];

    for (const item of initialData) {
        data.push({
            name: item.name,
            value: item.id.toString()
        });
    }

    return data;
};
