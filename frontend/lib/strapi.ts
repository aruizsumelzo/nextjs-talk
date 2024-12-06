const { STRAPI_TOKEN, BASE_URL } = process.env

export function query(item: string, options: {
    fields?: string[],
    populate?: string[],
    filters?: Record<string, Record<string, string>>,
    locale?: string,
    pageSize?: number | null,
    page?: number,
    sort?: string[],
} = {}, id?: string | null) {
    const {
        fields = [],
        populate = [],
        filters = {},
        locale = 'en',
        pageSize = null,
        page = null,
        sort = [],
    } = options;

    const queryParams: string[] = [];

    if (fields.length > 0) {
        fields.forEach((field, index) => {
            queryParams.push(`fields[${index}]=${field}`);
        });
    }
    if (populate.length > 0) {
        populate.forEach((pop) => {
            queryParams.push(`populate[${pop}][fields][0]=url`);
        });
    }

    for (const key in filters) {
        for (const filterKey in filters[key]) {
            queryParams.push(`filters[${key}][${filterKey}]=${filters[key][filterKey]}`);
        }
    }

    if (page) {
        queryParams.push(`pagination[page]=${page}`);
    }
    if (pageSize) {
        queryParams.push(`pagination[pageSize]=${pageSize}`);
    }

    if (sort.length > 0) {
        sort.forEach((sortField, index) => {
            queryParams.push(`sort[${index}]=${sortField}`);
        });
    }
    if (locale) {
        queryParams.push(`locale=${locale}`);
    }

    const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
    const itemPath = id ? `${item}/${id}` : item;
    const apiUrl = `${BASE_URL}/api/${itemPath}${queryString}`;

    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    }).then(response => response.json());
}