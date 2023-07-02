export const openError = (api, message) => {
    api.error({
        message: `Oops!`,
        description: message,
        placement: "bottomRight",
    });
};

export const openSuccess = (api, message) => {
    api.success({
        message: `Success!`,
        description: message,
        placement: "bottomRight",
    });
};
