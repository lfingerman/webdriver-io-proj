# WebDriver.io Demo Project

This project demonstrates automated testing using WebDriver.io with a structured approach to create maintainable, reliable UI tests.

## Key Features

### Page Object Model

The project implements the Page Object Model (POM) design pattern to create a clean separation between test logic and page-specific code. This provides:

- Better maintainability as UI changes only require updates in one place
- More readable tests that express business logic rather than implementation details
- Reusable page interactions across multiple test cases

Example:
```javascript
// pages/login.page.js
class LoginPage {
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get submitButton() { return $('button[type="submit"]'); }

    async open() {
        await browser.url('/login');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}
module.exports = new LoginPage();
```

### Data Generation with Faker

The project uses Faker.js to generate realistic test data on the fly, providing:

- Diverse test inputs that better simulate real user behavior
- Reduced test flakiness by avoiding hardcoded test data
- Improved test coverage with randomized inputs

Example:
```javascript
import { faker } from '@faker-js/faker';

describe('Registration process', () => {
    it('should register a new user successfully', async () => {
        const userData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 12 })
        };
        
        await RegistrationPage.open();
        await RegistrationPage.register(userData);
        
        await expect(ConfirmationPage.successMessage)
            .toHaveText(expect.stringContaining('Registration successful'));
    });
});
```

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Run tests with `npm test`

## Project Structure

```
├── configs/                 # WebDriver.io configuration files
├── pages/                   # Page objects
├── specs/                   # Test specifications
├── helpers/                 # Test helpers and utilities
│   └── testData.js          # Faker-based test data generators
├── reports/                 # Test reports (generated)
└── README.md
```

## Dependencies

- WebDriver.io: Core test automation framework
- @faker-js/faker: Realistic test data generation
- Expect: Assertion library
- Allure: Reporting
