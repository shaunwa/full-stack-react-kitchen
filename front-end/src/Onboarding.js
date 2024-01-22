import { useState, Children } from 'react';

const Onboarding = ({ onComplete, children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = children.length;

    const currentChild = Children.toArray(children)[currentStep];

    const goToPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    const goToNext = () => {
        if (currentStep >= totalSteps - 1) {
            const keys = [...localStorage];
            const onboardingKeys = keys.filter(k => k.startsWith('onboarding-'));
            const data = {};
            for (let key in onboardingKeys) {
                data[key] = localStorage.getItem(key);
            }
            onComplete({ a: 1, b: 2, c: 3});
        } else {
            setCurrentStep(currentStep + 1);
        }
    }

    return (
        <div>
            <h3>Step {currentStep + 1} of {totalSteps}</h3>
            {currentChild}
            <button onClick={goToPrevious}>Back</button>
            <button onClick={goToNext}>Next</button>
        </div>
    );
}

export default Onboarding;