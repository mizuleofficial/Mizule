const config = {
    screens: {
        VerifyEmail: {
            path: 'verify',
            parse: {
                email: email => `${email}`,
                password: password => `${password}`
            }
        }
    }
}

const linking = {
    prefixes: ['http://mizule/', 'https://mizule/', 'mizule://'], config
}

export default linking