# Typescript Fundamentals

This is based on a Udemy's course [Typescript: The Complete Developer Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide) where [Stephen Grider](https://twitter.com/ste_grider) teaches Typescript in depth along with popular design patterns and buiding complex project.

### Course Notes

#### Section 1

- `Typescript` = `Javascript` + `A type system`

- TS Type System is only active _during development_

- It doesn't provide any performance improvement

- Node doesn't understand Typescript, Typescript compiler (`tsc`) compiles it to javascript which then Node or browser can execute

- **Compiling & Running Typescript file**
  Doing it with preliminary Typescript compiler

  ```
  tsc <filename>.ts
  node <filename>.js
  ```

  Doing it with `ts-node`
  ```
  ts-node <filename>.ts
  ```

- [Interface](https://www.typescriptlang.org/docs/handbook/2/objects.html) or *Object Type* is blueprint of the object. In this we declare type of each object property and later use it while initialising a new object variable.

  ```typescript
  interface Todo {
  	id: number
  	title: string
  	completed: boolean
  }
  ```

- **Types**: Easy way to refer to the different `properties` & `methods` that a value has. 

  - Primitive Types
    1. `number`
    2. `boolean`
    3. `string`
    4. `null`
    5. `undefined`
    6. `symbol`
    7. `void`
  - Object Types
    1. `function`
    2. `array`
    3. `class`
    4. `object`

- Types allow other engineers to understand what values are flowing around our codebase

