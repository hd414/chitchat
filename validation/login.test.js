const validateLoginInput = require('./login')

test('Login Error for NULL input', () => {
    const data = {}
    const op = {
        errors: {
            username: 'Username field is required',
            password: 'Password field is required'
        },
        isValid: false
    }
    expect(validateLoginInput(data)).toStrictEqual(op)
})

test('Login with NULL password', () => {
    const data = {
        username: 'abc'
    }
    const op = {
        errors: {
            password: 'Password field is required'
        },
        isValid: false
    }
    expect(validateLoginInput(data)).toStrictEqual(op)
})

test('Login with NULL username', () => {
    const data = {
        password: 'abcd'
    }
    const op = {
        errors: {
            username: 'Username field is required'
        },
        isValid: false
    }
    expect(validateLoginInput(data)).toStrictEqual(op)
})

test('Correct Login inputs', () => {
    const data = {
        username: 'abcd',
        password: 'abcd'
    }
    const op = {
        errors: {},
        isValid: true
    }
    expect(validateLoginInput(data)).toStrictEqual(op)
})