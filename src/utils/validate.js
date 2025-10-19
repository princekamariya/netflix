export const checkValidData = (email, passoword) => {
    const blnEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const blnPasswordValidation =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passoword);

    if (!blnEmailValidation) {
        return "Email ID is not valid";
    }
    if (!blnPasswordValidation) {
        return "Password is not valid";
    }

    return null;
};
