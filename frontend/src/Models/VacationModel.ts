export interface VacationModel {
    imageUrl: string;
    id: number,
    destination: string,
    description: string,
    startDate: string,
    endDate: string,
    price: number,
    imageName: string,
    image: File,
    fancierCount: number,
    isUserLikes?: number

}

export const vacationDestinationValidation = {
    required: { value: true, message: "Missing name" },
    minLength: { value: 3, message: "Name too short" },
    maxLength: { value: 100, message: "Name too long" }
}
export const vacationDescriptionValidation = {
    required: { value: true, message: "Missing name" },
    minLength: { value: 3, message: "Name too short" },
    maxLength: { value: 1000, message: "Name too long" }
}
export const vacationStartDateValidation = {
    required: { value: true, message: "Missing start date" },
    pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/,
        message: "Invalid date format, must be YYYY-MM-DD",
    },
    validate: {
        notBeforeToday: (value: string) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const startDate = new Date(value);
            return startDate >= today || "Start date cannot be before today";
        },
    },
};

export const vacationEndDateValidation = {
    required: { value: true, message: "Missing end date" },
    pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/,
        message: "Invalid date format, must be YYYY-MM-DD",
    },
    validate: {
        notBeforeToday: (value: string) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const endDate = new Date(value);
            return endDate >= today || "End date cannot be before today";
        },
    },
};


export const vacationPriceValidation = {
    required: { value: true, message: "Missing price" },
    min: { value: 0, message: "Price can't be negative" },
    max: { value: 10000, message: "Price can't exceed 10000" }
}

