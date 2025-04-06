// testData.js
import { faker } from '@faker-js/faker';

export const TestData = {
    generateUser() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        return {
            firstName,
            lastName,
            email: faker.internet.email({ firstName, lastName }),
            password: faker.internet.password({ length: 12 }),
            address: {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode()
            },
            phoneNumber: faker.phone.number()
        };
    },

    generateProduct() {
        return {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            department: faker.commerce.department()
        };
    }
};