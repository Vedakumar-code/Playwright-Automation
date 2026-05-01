export function generateUserData()
{
    const timeStamp = Date.now();

    return {

        name: "vedakumar",
        email: `test${timeStamp}@gmail.com`,
        password: `test${timeStamp}`,
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