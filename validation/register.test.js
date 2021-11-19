const validateRegisterInput = require('./register')

test('Register Error for NULL input', () => {
    const data = {}
    const op = {
        errors: {
            name: 'Name field is required',
            username: 'Username field is required',
            password: 'Password must be at least 6 characters',
            password2: 'Confirm password field is required'
        },
        isValid: false
    }
    expect(validateRegisterInput(data)).toStrictEqual(op)
})

test('Register with NULL passwords', () => {
    const data = {
        name: 'abc',
        username: 'abc'
    }
    const op = {
        errors: {
            password: 'Password must be at least 6 characters',
            password2: 'Confirm password field is required'
        },
        isValid: false
    }
    expect(validateRegisterInput(data)).toStrictEqual(op)
})

test('Register inputs password length less than 6', () => {
    const data = {
        name: 'abce',
        username: 'abcd',
        password: 'abcd',
        password2: 'abcd'
    }
    const op = {
        errors: {
            password: 'Password must be at least 6 characters'
        },
        isValid: false
    }
    expect(validateRegisterInput(data)).toStrictEqual(op)
})

test('Register inputs with different confirm password', () => {
    const data = {
        name: 'abce',
        username: 'abcd',
        password: 'abcd123',
        password2: 'abcd12'
    }
    const op = {
        errors: {
            password2: 'Passwords must match'
        },
        isValid: false
    }
    expect(validateRegisterInput(data)).toStrictEqual(op)
})

test('Correct Register inputs', () => {
    const data = {
        name: 'abce',
        username: 'abcd',
        password: 'abcd123',
        password2: 'abcd123'
    }
    const op = {
        errors: {},
        isValid: true
    }
    expect(validateRegisterInput(data)).toStrictEqual(op)
})