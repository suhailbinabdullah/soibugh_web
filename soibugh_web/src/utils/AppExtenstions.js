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

// https://i.ibb.co/VW9FJwB/advertise.jpg
// https://i.ibb.co/ZWFM7Bf/advertise2.jpg
// https://i.ibb.co/9szss1y/alert.png
// https://i.ibb.co/NZRVcR3/announcement.png
// https://i.ibb.co/jfMpsJ9/astan.jpg
// https://i.ibb.co/4pz9L5V/breaking-news.png
// https://i.ibb.co/YN6CpNT/condolence.png
// https://i.ibb.co/vQr6f5t/congratulations.png
// https://i.ibb.co/9pfdX35/guljan.jpg
// https://i.ibb.co/93Vz1Rg/house-on-chinar.jpg
// https://i.ibb.co/6HCLYFP/manzkha.jpg
// https://i.ibb.co/t3zMLNz/oldest-house-min.png
// https://i.ibb.co/sqMt7sN/photo-not-available-1.png
// https://i.ibb.co/SQCRZzC/pull-down-min.jpg
// https://i.ibb.co/3yp0X0F/reminder.png
// https://i.ibb.co/PzgcbFP/shaheen-school-old-pic.jpg
// https://i.ibb.co/qD0Hr7j/soibugh-background.png
// https://i.ibb.co/NND0YSp/soibugh-nav-bar.png
// https://i.ibb.co/tssQMb0/swan.png
// https://i.ibb.co/HrH3f14/thank-you.png
// https://i.ibb.co/JQSBc1G/worth-to-share.png