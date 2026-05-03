export function generateUserData()
{
    const timeStamp = Date.now();

    return {

        name: "vedakumar",
        email: `test${timeStamp}@gmail.com`,
        password: `test${timeStamp}`,
        loginEmail: "test8861@gmail.com",
        loginPassword: "Test@8861",
        day: "1",
        month: "January",
        year: "2000",
        firstName: "K",
        lastName: "vedakumar",
        address: "Banaglore",
        country: "India",
        state: "Andhra Pradesh",
        city: "vizag",
        zipcode: "123456",
        mobileNumber: "1234567890"


    };

}

export function generatePaymentData() {

    return {
        nameOnCard: "Vedakumar",
        cardNumber: "123456789098", 
        cvcNumber: "123",
        month: "07",
        year: "2028"
    };

}