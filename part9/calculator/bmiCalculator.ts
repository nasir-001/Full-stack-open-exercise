interface bmiCalculator {
    mass: number;
    height: number;
}

const parseArguments = (args: Array<string>): bmiCalculator => {
    if(args.length < 4) throw new Error('Not enough arguments')
    if(args.length > 4) throw new Error('Too many arguments')

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            mass: Number(args[2]),
            height: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!')
    }
}

const calculateBmi = (mass: number, height: number) => {
    if (((height * 2) / mass) >= 0 && ((height * 2) / mass) <= 0.60) {
       console.log("Very severely underweight");
    } else if (((height * 2) / mass) >= 0.60 && ((height * 2) / mass) <= 0.64) {
       console.log("Severely underweight");
    } else if (((height * 2) / mass) >= 0.64 && ((height * 2) / mass) <= 0.74) {
       console.log("Underweight");
    } else if (((height * 2) / mass) >= 0.74 && ((height * 2) / mass) <= 1.0) {
       console.log("Normal (healthy weight)" );
    } else if (((height * 2) / mass) >= 1.0 && ((height * 2) / mass) <= 1.2) {
       console.log("Overweight");
    } else if (((height * 2) / mass) >= 1.2 && ((height * 2) / mass) <= 1.4) {
       console.log("Obese Class I (Moderately obese)");
    } else if (((height * 2) / mass) >= 1.4 && ((height * 2) / mass) <= 1.6) {
       console.log("Obese Class II (Severely obese)" );
    } else if (((height * 2) / mass) >= 1.6) {
       console.log("Obese Class III (Very severely obese)");
    }
}

try {
    const { mass, height } = parseArguments(process.argv)
    calculateBmi(mass, height)
} catch (error) {
    console.log('Error, something bad happened, message: ', error.message);
}