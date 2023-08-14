class CredentialsModel {
    public email: string | undefined;
    public password: string | undefined;

    public static usernameValidation = {
        required: { value: true, message: "Missing username" },
        minLength: { value: 2, message: "Username must be at least 2 chars" },
        maxLength: { value: 20, message: "Username can't exceed 20 chars" }
    }

    public static passwordValidation = {
        required: { value: true, message: "Missing password!" },
        minLength: { value: 4, message: "Password must be at least 4 chars" },
        maxLength: { value: 12, message: "Password can't exceed 12 chars!" }
    }
}

export default CredentialsModel;