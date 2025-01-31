export default eventHandler(() => {
    // return 'Hello Nuxt'
    // return {
    //     messgae: 'hi'
    // }
    throw createError({
        statusCode: 404,
        message: 'dsfsdfsdffsd',
        statusMessage: '페이지 찾을 수 없다다',
    });
})