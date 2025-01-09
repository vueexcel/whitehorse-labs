import { computed, ref } from "vue";

interface FormValues {
    firstName: string;
    lastName: string;
    jobTitle: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    message: string;
    interests: {
        companyNews: boolean;
        newsletter: boolean;
        counterfeitDetection: boolean;
        failureAnalysis: boolean;
        lifecycle: boolean;
        logistics: boolean;
        programming: boolean;
        factoryAuditing: boolean;
        training: boolean;
    }
}

export const useContactForm = (isValid: (values: FormValues) => boolean) => {
    const isLoading = ref(false);
    
    const formValues = ref<FormValues>({
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: '',
        interests: {
            companyNews: false,
            newsletter: false,
            counterfeitDetection: false,
            failureAnalysis: false,
            lifecycle: false,
            logistics: false,
            programming: false,
            factoryAuditing: false,
            training: false
        }
    })

     const resetForm = () => {
        formValues.value = {
            firstName: '',
            lastName: '',
            jobTitle: '',
            companyName: '',
            message: '',
            email: '',
            phoneNumber: '',
            interests: {
                companyNews: false,
                newsletter: false,
                counterfeitDetection: false,
                failureAnalysis: false,
                lifecycle: false,
                logistics: false,
                programming: false,
                factoryAuditing: false,
                training: false
            }
        }
    }

    const handleSubmit = () => {
        isLoading.value = true
        setTimeout(() => {
            isLoading.value = false
            resetForm()
        }, 3000)
    }

    const disabled = computed(() => !isValid(formValues.value) || isLoading.value)
    const hasError = computed(() => !isValid(formValues.value))

    return {
        values: formValues,
        loading: isLoading,
        resetForm,
        handleSubmit,
        disabled,
        hasError
    }
}