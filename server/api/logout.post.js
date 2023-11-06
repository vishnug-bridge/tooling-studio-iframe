export default defineEventHandler(async (event) => {
    try {
        
        setCookie(
            event, 
            'ts_token', 
            null,
            { 
                sameSite: 'none',
                secure:true
            }
        );

        return true;

    } catch (error) {
        console.log(error)
    }


});

