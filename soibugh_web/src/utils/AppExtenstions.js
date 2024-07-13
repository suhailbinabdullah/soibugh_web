export const groupBy = (array, key) => {
    return Object.values(array.reduce((acc, obj) => {
        const keyValue = String(obj[key]).toLocaleUpperCase();
        if (!acc[keyValue]) {
            acc[keyValue] = { key: keyValue, values: [] };
        }
        acc[keyValue].values.push(obj);
        return acc;
    }, {}));
};

export const mapMenuDataToAntdMenu = (data) => {

    return data.map(item => ({
        key: item?.key,
        label: item?.key,
    }))

    // console.log(data)
};

export const mapMenuDataToAntdMenu1 = (data) => {
    return data.map(item => {
        const { key, values } = item;

        if (values && values.length > 0) {
            return {
                key: key,
                label: key,
                children: values.map(child => ({
                    key: child?.id,
                    label: child?.title
                }))
            };
        } else {
            return {
                key: key,
                label: key
            };
        }
    });
}