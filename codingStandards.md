# Coding Standards And Best Practices

Writing code to create apps isn't just enough; the code should be **clean and maintainable**.

Here are some of the common practices to write clean and consistent code,

## Common Practices

### Naming Conventions

- [ ] Component’s names should be written using **PascalCase** - `HeroBanner`
- [ ] Non-components (functions, Variable names, folder name, helper file name, etc..) should be written using **camelCase** - `myUtilityFile.js`
- [ ] Use One word - one concept (A word represents a concept). For example, you define a component that renders a list of expenses and names it like `<ExpensesList/>`.Meaningful names for components, methods, and variables are enough for making the code readable.
- [ ] Use the `.jsx` extension for React components file


### Comments

- [ ] Use comments to explain why you did something, not how you did it. If you find yourself explaining how you did something, then spend more time writing descriptive functions, methods, and filenames that are self-explanatory.
- [ ] Write comments that are informative, explanatory and offer clarification,
- [ ] Another point is not to write comments that are obvious and easy to know what it does

### Other best practices

- [ ] Create an `index.js` within each folder for exporting. This will reduce repeating names on the imports.
- [ ] Create many utility files that can help you remove duplicate code from multiple files.
- [ ] Don't repeat yourself (DRY). Make it reusable to avoid duplicate code
- [ ] Avoid Inline CSS as and when possible (a CSS class should be created when there are more than 3 or 4 CSS attributes).
- [ ] Create multiple files instead of writing a big file. (fix to small functionality for each file) - Each with a single responsibility. Lines of code shouldn't exceed ~400
- [ ] Review your code before creating a pull request.
- [ ] Remove the console. logs — unless you have strong motivation why you would like it.
- [ ] Remove the debuggers once you debugged it.

## ES6

- [ ] Always `destructure` your props. Destructuring your props helps make your code cleaner and more maintainable. It also makes assigning object properties to variables feel like much less of a chore.
- [ ] Know where to use `spread/rest` operators. You shall read about it before actually using it.
- [ ] Use `const` or `let` instead of var.
  - [ ] `const` lets you check that a variable should always stay constant.
  - [ ]  `let` indicates that the values of the variables can be changed.
- [ ] Start preferring `arrow functions` (= >) for cleaner code. Arrow functions allow simplifying your code to a single line.
- [ ] Use `optional chainings` ([Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)) if possible.
- [ ] Use `nullish coalescing` ([Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)) if possible

## React code conventions

### Component creation

Every component should be created by following the below 7 fundamental rules,

- [ ] Use the `Single responsibility principle. It suggests creating a component that implements only one responsibility and has one reason to change.
- [ ] Make it an `Encapsulated component`, which hides its internal structure and implementation details, and provides props to control the behavior and output.
- [ ] Make it `composable`. A composable component is created from the composition of smaller specialized components.
- [ ] Make it `reusable`. A reusable component is written once but used multiple times. Reuse the code whenever you can to avoid repetition(Don't repeat yourself (DRY)).
- [ ] Make it `Pure`. A pure component always renders the same elements for the same prop values.
- [ ] Make it `Testable`. A tested component is verified whether it renders the expected output for a given input. A testable component is easy to test. (Optional)
- [ ] Make it `Meaningful`. A meaningful component is easy to understand what it does. Component naming and expressive code are the keys to readability. Your code must be understandable and welcoming to read.

  In short,
    A `reliable component implements one responsibility, hides its internal structure, and provides an effective set of props to control its behavior.

### Best practices

- [ ] Always use `prop-types` to define all the props (Only for Atoms (like input, button))
- [ ] Separate function from the JSX if it takes more than 1 line
- [ ] Only include one React component per file
- [ ] Avoid using indexes as key props if unique ids are available
- [ ] Use fragments (<></>) for grouping jsx
- [ ] Create Custom hooks whenever possible
- [ ] Group the state whenever possible (Eg: username & password state -> user state)
- [ ] Avoid curly braces for string props
- [ ] Prefer conditional rendering with the ternary operator
- [ ] Use Higher Order Components where appropriate

## MUI styling conventions

- [ ] Use `sx` for styling the MUI Component
- [ ] For every JSX element (div, span, p etc..) use the respective MUI Components (Box, Typography, etc..).  (This is to take the advantage of sx props)
- [ ] Use inline sx only if there are 2 or 3 css attributes
- [ ] Create a Separate sx object if css attributes exceed 2 and assign it to the component
- [ ] The naming format for sx object is `meaningfulname+Sx` like `rootSx`, `optionListSx`, `autocompleteSx`  (for the top parent use `rootSx`)
- [ ] Don't use color codes directly in styling use theme color palette like `primary.main`.
- [ ] For the grid & flex use the sx property to style it, instead of using Grid MUI Component. (To achieve this group the components with Box MUI Component)
- [ ] Every visual element style should be controllable in the atom and the reusable components. So while using sx for styling provide a prop to override the style. For Example, for `rootSx` provide `rootStyle`, for `inputSx` provide `inputStyle` to override it.
  - [ ] The sx(`rootSx`) and override style(`rootStyle`) variable name (`root`) (eg: `root`,`input`) should be the same.
- [ ] Apply default properties like variant, size, etc.. based on the atom.

## State Management Best Practices

### Local State Management

3 Rules of React State Management

**1. A state variable should be responsible for one concern.**

It meets with the Single Responsibility Principle when a state variable is in charge of just one concern.

**2. Extract complex state logic out of the component into a custom hook**

React hooks are created to isolate the component from complex state management and side effects.

So, since the **component should be concerned only about the elements to render and some event listeners to attach**, the complex state logic should be extracted into a custom hook.

The benefits of extracting the complex state management into a custom hook are:

  1. The component becomes free of state management details
  2. The custom hook can be reused
  3. The custom hook can be easily tested in isolation

*Use a custom hook if there is a state with one operation (Custom Logic).*

**3. Extract multiple state operations into a reducer.**

If the state requires multiple operations, use a reducer to incorporate these operations.

*No matter what rule you use, the **state should be as simple and decoupled as possible**. The component should not be cluttered with the details of how the state is updated: these should be a part of a custom hook or a reducer.*

### Global State Management using Zustand

The same 3 Rules will also apply to Global State Management.

The difference here is creating and handling an isolation store using `zustand` instead of react built-in hooks like `useState/useReducer` for each feature/functionality based on the use case.

In store we use can use either `actions (JS function)` or `useReducer` to handle the operations (state logics).

Eg: A theme store will be responsible for handling the dark/light theme. A feature store will handle the feature state and actions(CRUD) to update the state.

The Rule of Thumb is

> The **state should be as simple and decoupled as possible**. The component should not be cluttered with the details of how the state is being updated: these should be a part of the store.


#### Zustand Naming Conventions

 - [ ] The custom hook name for the store should be `use+meaningFulname`. Usually, the store `filename` and the `meaningFulname` would be the same.
 - [ ]  Use One word - one concept (A word represents a concept) to represent the state/actions. Eg: stateName, getStateName, createStateName, updateStateName, deleteStateName.
 - [ ]  Always use `camelCase`


#### Zustand Best Practices

- [ ] Don't create an unnecessary state inside a store.
- [ ] Always use actions to update the state, avoid using `setState/getState` method outside the store to update the store
- [ ] Don't directly work on the store's original state . Work on the state copies.
- [ ] For the Read API, use react-query's queryClient to get the data. Add cache options in the query client if necessary
- [ ] Use the `try/catch` method for the API calls inside the store actions
- [ ] Always use reusable fetch API functions for API Calls


## Branch Naming Conventions

### Main Branches

These branches which we expect to be permanently available on the repository follow the flow of code changes starting from development until the production.

**Development (dev)**

All new features and bug fixes should be brought to the development branch. Resolving developer code conflicts should be done as early as here.

**QA/Test (test)**

Contains all codes ready for QA (BDD) testing.

**Staging (staging, Optional)**

It contains tested features that the stakeholders wanted to be available either for a demo or a proposal before elevating into production. Decisions are made here if a feature should be finally brought to the production code.

**Master (master)**

The production branch, if the repository is published, this is the default branch being presented.

Except for Hotfixes, we want our codes to follow a one-way merge starting from 

> development > test> staging > production.

### Temporary Branches

As the name implies, these are disposable branches that can be created and deleted by the need of the developer or deployer.

**Atoms**

A branch for creating/updating the atom

> Format - atom/atomName 
> 
`Eg: atom/button`

**Components**

A branch for creating/updating the component

> Format - comp/componentPath/componentName

`Eg: comp/clinical/appointmentBooking`

**Feature**

A branch for adding a new/updating the feature ui and integration

> feat/appName/featureName-ui
> feat/appName/featureName-integration

`Eg: feat/clinical/appointmentBooking-ui, feat/clinical appointmentBooking-integration`

**Functionality**

A branch for adding/updating a functionality, which is not a feature

> Format - func/appName/functionalityName

`Eg: func/clinical/routing, func/clinical/storybook`

**Bug Fix**

A branch for handling bugs after a release, sprint or demo.

> Format - bugFix/appName/bug-name

`Eg: bugFix/clinical/image-carousel-height`


**Merging**

A temporary branch for resolving merge conflicts

> Format - merge/appName/currentBranch-branchToMerge

`Eg: merge/clinical/dev-func/storybook`

**Hot Fix**

A branch to fix a blocker, and do a temporary patch, should be handled immediately. 

> Format - hotFix/appName/hot-fix-name

`Eg: hotFix/clinical/removed-debugger`

**Experimental**

A branch for adding any new feature or idea that is not part of a release or a sprint.

> Format - exp/experiment-name

`Eg: exp/dark-theme-support`

**Release**

A branch for tagging a specific release version

> Format - release/appName/(versionNumber)v

`Eg: release/clinical/0.1v`


## Git Commit Conventions

Make atomic commits of changes, which means each commit should be focused on one specific purpose.

For committing use Conventional Commits specification

https://www.conventionalcommits.org/en/v1.0.0/

For consistency, try and use the imperative present tense when creating a message. Examples:

Use "Add tests for" instead of "I added tests for"
Use "Change x to y" instead of "Changed x to y"

To make your job easier use this extension

https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits