export interface ApiResponse {
    error?: string
    shortenedUrl?: string
}

const shorten = async (url: string): Promise<ApiResponse> => {
    try {
        const rawResponse = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);

    const jsonResponse = await rawResponse.json();

    switch (rawResponse.status) {
        case 200:
        case 201:
            return {
                shortenedUrl: jsonResponse.result.full_short_link
            }
        case 400:
            return {
                error: getErrorMessage(jsonResponse.error_code)
            }
        default:
            return {
                error: getErrorMessage()
            }
    }
    } catch (e) {
        return {
            error: getErrorMessage(),
        }
    }
}

const getErrorMessage = (errorCode?: number): string => {
    let error: string;
        switch (errorCode) {
            case 1:
                error = 'Please enter a link'
                break
            case 2:
                error = 'Invalid URL submitted'
                break;
            case 3:
                error = 'Please try again in a second'
                break;
            case 10:
                error = 'Sorry, this link is disallowed'
                break;
            default:
                error = 'Sorry, an error occurred. Please try again'
                break;
    }

    return error;
}


export default shorten;