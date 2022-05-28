# Password generator

https://caitlinparsons25.github.io/password-generator/

## Aims of the project
1. Create a password generator that generates a unique password for the user based on five conditions chosen by the user
2. Have the user choose a password length between 8 and 128 characters
3. Have the user choose whether or not to include lowercase letters, uppercase letters, numbers, and/or special characters
4. Display a unique, randomly generated password based on the conditions chosen by the user

### 1. Create a password generator that generates a unique password for the user based on five conditions chosen by the user
When the user first navigates to the password generator, they are taken to a page that displays as such:
![picture](/Assets/README%20images/generator-main-page.png)

When the user clicks on the red button that says "Generate Password," they are taken through a series of prompts (detailed below) to set the parameters for a unique password.

### 2. Have the user choose a password length between 8 and 128 characters
The first conditiion that the user must decide is the length of their password. A window prompt asks the user to choose a password length between 8 and 128:
![picture](/Assets/README%20images/password-length-prompt.png)

If the user does not enter a password length that is between the accepted range, a window alerts them that they must choose a length that falls within the accepted range:
![picture](/Assets/README%20images/length-error.png)

Once the use enters a password length within the accepted range, they are taken through the remaining password conditions (below).

### 3. Have the user choose whether or not to include lowercase letters, uppercase letters, numbers, and/or special characters
After choosing a password length, the next condition the use must decide on is whether or not to include lowercase letters, uppercase letters, numbers, and/or special characters. They make these decisions through a series of window confirms, clicking either "OK" for yes or "Cancel" for no:
![picture](/Assets/README%20images/lowercase-confirm.png)
![picture](/Assets/README%20images/uppercase-confirm.png)
![picture](/Assets/README%20images/numbers-confirm.png)
![picture](/Assets/README%20images/special-characters-confirm.png)

### 4. Display a unique, randomly generated password based on the conditions chosen by the user
After completing the decision-making process for all five conditions, the user is given a unique password that is displayed in the box that previously said "Your Secure Password":
![picture](/Assets/README%20images/generated-password.png)

