const authenticator = {
    title: 'WTFMVMT',
    message: 'Welcome to the WTFMVMT',
    action: {
        name: 'Login',
        url: '/dashboard'
    },
    users: [
        {
            name: 'Administrator',
            role: 'superuser'
        },
        { 
            name: 'Brandon J. Payne',
            role: 'Owner'
        },
        {
            name: 'Nia Ashay',
            role: ''
        }
    ],
}

export default authenticator